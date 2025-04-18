// backend/merge-schema.mjs
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const basePath = 'prisma/schema.base.prisma';
const modelsDir = 'prisma/models';
const outputPath = 'prisma/schema.prisma';

const baseSchema = readFileSync(basePath, 'utf8');
const modelFiles = readdirSync(modelsDir)
  .filter(file => file.endsWith('.prisma'))
  .map(file => readFileSync(join(modelsDir, file), 'utf8'))
  .join('\n\n');

const merged = `${baseSchema}\n\n${modelFiles}`;
writeFileSync(outputPath, merged);

console.log(`✅ schema.prisma generated with ${modelFiles.length} models.`);
