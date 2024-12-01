/* eslint-disable @typescript-eslint/no-explicit-any */
//NODE_MODULES
import { useState, useCallback } from 'react';
// -----------------------------------------------------------------------
//DEPENDENCY
import { readFile } from '@/pages/edit/util/readData';
// -----------------------------------------------------------------------
//this hook help to get data from api dynamically
const useFileContent = (fileName: string) => {
  const [fileContent, setFileContent] = useState<Record<string, any>>({});  
  const [error, setError] = useState<string | null>(null);

  const fetchFileContent = useCallback(async () => {
    try {
      const content = await readFile(fileName); 
      const contentData = content.content;
      setFileContent(contentData);
    } catch (err) {
      setError('Error loading file content');
      console.error(err);
    }
  }, [fileName]);

  return {
    fileContent,
    error,
    fetchFileContent,
  };
};

export default useFileContent;
