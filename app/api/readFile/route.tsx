/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const { filename }: { filename: string } = await req.json();
  if (!filename) {
    return NextResponse.json({ message: 'Filename is required' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), filename);

  try {
    if (fs.existsSync(filePath)) {
      const fileData = await fs.promises.readFile(filePath, 'utf-8');
      const parsedData = JSON.parse(fileData); 
      return NextResponse.json({ message: 'File read successfully', data: parsedData,isLoading: false });
    } else {
      return NextResponse.json({ message: 'File not found',isLoading: false }, { status: 404 });
    }
  } catch (error:any) {
    return NextResponse.json({ message: 'Error reading file', error: error.message,isLoading: false }, { status: 500 });
  }
}