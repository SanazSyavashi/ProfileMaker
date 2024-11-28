/* eslint-disable @typescript-eslint/no-explicit-any */

export const saveFile = async (filename: string, data: Record<string, any>) => {
  try {
    const response = await fetch('/api/saveFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename, data }),
    });

    const result = await response.json();

    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message);
    }
  } catch (error:any) {
    throw new Error('An error occurred while saving the file :'+error);
  }
};
