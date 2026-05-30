"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);
  const t = useRef(0);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#15897a"),
      new THREE.Color("#3b82f6"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#10b981"),
    ];
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    t.current += delta;
    if (mesh.current) {
      mesh.current.rotation.y = t.current * 0.05;
      mesh.current.rotation.x = Math.sin(t.current * 0.03) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function CoreOrb() {
  const mesh = useRef<THREE.Mesh>(null!);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;
    if (mesh.current) {
      mesh.current.rotation.y = t.current * 0.15;
      mesh.current.rotation.z = t.current * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={mesh} args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#15897a"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          emissive="#0d5c52"
          emissiveIntensity={0.4}
        />
      </Sphere>
      <mesh>
        <torusGeometry args={[1.6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function RingConnectors() {
  const group = useRef<THREE.Group>(null!);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;
    if (group.current) group.current.rotation.y = t.current * 0.1;
  });

  return (
    <group ref={group}>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <mesh key={i} position={[Math.cos(rad) * 2.2, Math.sin(rad) * 0.5, Math.sin(rad) * 2.2]}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#10b981" : "#8b5cf6"}
              emissive={i % 2 === 0 ? "#10b981" : "#8b5cf6"}
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]}   intensity={1.5} color="#15897a" />
      <pointLight position={[-5, -3, -5]} intensity={1}   color="#3b82f6" />
      <pointLight position={[0, 5, -5]}  intensity={0.8}  color="#8b5cf6" />
      <Stars radius={60} depth={40} count={300} factor={3} saturation={0} fade speed={0.5} />
      <CoreOrb />
      <Particles />
      <RingConnectors />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
