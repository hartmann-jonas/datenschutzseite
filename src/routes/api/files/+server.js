import fs from 'fs';
import path from 'path';

export async function GET() {
    const directoryPath = path.join(process.cwd(), 'static/files');
    const files = fs.readdirSync(directoryPath);
    let fileNames = [];
    files.forEach(file => {
        let fileName = file.slice("",".pdf".length * -1);
        fileNames.push(fileName)
    });
    return new Response(JSON.stringify(fileNames), {
        headers: { 'Content-Type': 'application/json' }
    });
}
