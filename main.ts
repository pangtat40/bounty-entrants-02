import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// This program does one thing: copy BOUNTY.json from the repository
// directory to the output directory, byte for byte.
const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR || here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR || resolve(here, "output");

mkdirSync(outDir, { recursive: true });
const data = readFileSync(resolve(botDir, "BOUNTY.json"));
// Fail fast with a clear error if the file is not valid JSON; the copy
// itself stays byte-identical either way.
JSON.parse(data.toString("utf8"));
const outPath = resolve(outDir, "BOUNTY.json");
writeFileSync(outPath, data);
console.log(`copied ${data.length} bytes to ${outPath}`);
