import sharp from "sharp";

const files = ["app_dashboard", "app_insights", "chat"];

for (const name of files) {
  await sharp(`src/assets/${name}.png`)
    .webp({ quality: 82, effort: 6 })
    .toFile(`src/assets/${name}.webp`);
  console.log(`Optimized ${name}.webp`);
}
