/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/api.ts

interface ReadFileResponse {
  message: string;
  data?: object;
  error?: string;
}

//----------------------------------------------------------
export const readFile = async (filename: string): Promise<Record<string, any>> => {
  try {
    const response = await fetch('/api/readFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename }), 
    });

    const result: ReadFileResponse = await response.json();

    if (response.ok) {
      return result.data || {}; 
    } else {
      throw new Error(result.message || 'Unknown error occurred');
    }
  } catch (error: any) {
    throw new Error('An error occurred while reading the file : '+error);
  }
};
