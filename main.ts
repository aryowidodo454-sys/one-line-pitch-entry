import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// U09 — round-5 champion (136 chars), submitted for R3 on Aryo's 16:21 WIB order.
const PITCH =
  'Your notes hold an app idea you never coded: hand it to an AI agent on make.fun, try a first version yourself, and the idea stays yours.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PITCH, 'utf8');
