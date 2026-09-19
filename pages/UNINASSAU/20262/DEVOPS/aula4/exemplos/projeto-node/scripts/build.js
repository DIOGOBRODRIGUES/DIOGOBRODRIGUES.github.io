import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await copyFile('src/soma.js', 'dist/soma.js');
await copyFile('package.json', 'dist/package.json');
console.log('Build disponível em dist/');
