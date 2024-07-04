import * as fs from 'fs';
import * as path from 'path';

const directoryPath = path.join(process.cwd(), 'static/files');
const files = fs.readdirSync(directoryPath);

fs.writeFileSync(
    path.join(process.cwd(), 'static/files.json'),
    JSON.stringify(files)
);

console.log('files.json generated with the following files:', files);
