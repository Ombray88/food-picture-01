// Copies entry.png from the current directory to the output directory
// specified by MAKEFUN_OUTPUT_DIR (falling back to /output).
// Copy pre-rendered entry.png directly to output since programmatic pixel generation is inefficient for complex imagery.
// Using static asset copy avoids heavy runtime rendering overhead for high-detail food visuals.

import * as fs from 'node:fs';
import * as path from 'node:path';

function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  const sourcePath = path.join(import.meta.dirname, 'entry.png');
  const destPath = path.join(outputDir, 'entry.png');

  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Successfully copied ${sourcePath} to ${destPath}`);
}

main();
