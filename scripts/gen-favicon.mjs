import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const SVG_SRC = readFileSync("public/logo-mark.svg");

async function rasterize(size, bg = "white") {
  return sharp(SVG_SRC)
    .resize(size, size)
    .flatten({ background: bg })
    .png()
    .toBuffer();
}

// For transparent-background sizes (navbar, etc.)
async function rasterizeTransparent(size) {
  return sharp(SVG_SRC)
    .resize(size, size)
    .png()
    .toBuffer();
}

function packIco(entries) {
  const count = entries.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = headerSize + count * dirEntrySize;
  let offset = dirSize;
  const offsets = [];
  for (const e of entries) { offsets.push(offset); offset += e.data.length; }

  const ico = Buffer.alloc(offset);
  let pos = 0;
  ico.writeUInt16LE(0, pos); pos += 2;
  ico.writeUInt16LE(1, pos); pos += 2;
  ico.writeUInt16LE(count, pos); pos += 2;

  for (let i = 0; i < count; i++) {
    const e = entries[i];
    const w = e.size >= 256 ? 0 : e.size;
    const h = e.size >= 256 ? 0 : e.size;
    ico.writeUInt8(w, pos); pos += 1;
    ico.writeUInt8(h, pos); pos += 1;
    ico.writeUInt8(0, pos); pos += 1;
    ico.writeUInt8(0, pos); pos += 1;
    ico.writeUInt16LE(1, pos); pos += 2;
    ico.writeUInt16LE(32, pos); pos += 2;
    ico.writeUInt32LE(e.data.length, pos); pos += 4;
    ico.writeUInt32LE(offsets[i], pos); pos += 4;
  }
  for (const e of entries) { e.data.copy(ico, pos); pos += e.data.length; }
  return ico;
}

async function main() {
  mkdirSync("public/icons", { recursive: true });
  console.log("Generating icons from logo-mark.svg…");

  const [s16, s32, s48, s180, s192, s512] = await Promise.all([
    rasterizeTransparent(16),
    rasterizeTransparent(32),
    rasterizeTransparent(48),
    rasterize(180),
    rasterize(192),
    rasterize(512),
  ]);

  writeFileSync("app/favicon.ico", packIco([
    { size: 16, data: s16 },
    { size: 32, data: s32 },
    { size: 48, data: s48 },
  ]));
  console.log("✓ app/favicon.ico  (16 + 32 + 48px)");

  writeFileSync("public/apple-touch-icon.png", s180);
  console.log("✓ public/apple-touch-icon.png  (180px)");

  writeFileSync("public/icons/icon-192.png", s192);
  writeFileSync("public/icons/icon-512.png", s512);
  console.log("✓ public/icons/icon-192.png + icon-512.png");

  writeFileSync("public/favicon-32x32.png", s32);
  console.log("✓ public/favicon-32x32.png  (navbar)");

  console.log("\nDone.");
}

main().catch((e) => { console.error(e); process.exit(1); });
