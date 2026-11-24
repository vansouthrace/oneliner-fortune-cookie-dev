import fs from 'node:fs';
import path from 'node:path';

const entry = `The bug you cannot reproduce has been in production since Tuesday. It is now a feature.`;
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry);
