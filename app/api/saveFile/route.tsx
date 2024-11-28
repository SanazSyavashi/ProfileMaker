import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { filename, data } = await req.json();

    const filePath = path.join(process.cwd(), filename);

    await fs.promises.writeFile(filePath, JSON.stringify(data));

    return new Response(JSON.stringify({ message: 'Data has been written to the file.' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Error writing to file:',err }), { status: 500 });
  }
}
