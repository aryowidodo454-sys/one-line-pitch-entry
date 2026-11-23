import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PITCH =
  'Tell that app idea in your phone notes to an AI agent on make.fun, no code from you, and tap through its first version instead of just describing it — worst case, the idea is still yours.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PITCH, 'utf8');
