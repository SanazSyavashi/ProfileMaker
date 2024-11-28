/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
// Dependencies
import GeneralForm from '@/components/GeneralForm/GeneralForm';
import { saveFile } from '../util/saveData';
import GenericSnackbar from '@/components/snackbar/GenericSnackbar';
import { readFile } from '../util/readData';
import getFieldsByFileName from '../Fields/getField';
// ---------------------------------------------------------------
export interface GenericFormPageProps {
  fileName: string;
  title?: string;
}
// ---------------------------------------------------------------
const GenericFormPage: React.FC<GenericFormPageProps> = ({ fileName }) => {

  const [message, setMessage] = useState<string>('');
  const [service, setService] = useState<'error' | 'success' | 'warning' | 'info'>('success');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>();
  const fields=getFieldsByFileName(fileName)
  
  const fetchFileContent = async () => {
    try {
      const content = await readFile(fileName);
      const contentData = content.content;
      setDefaultValues(contentData);
      setErrorMessage('');
    } catch (error: any) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  useEffect(() => {
    fetchFileContent();
    console.log({ errorMessage });
  }, []);

  const handleSave = async (data: Record<string, any>) => {
    try {
      const result = await saveFile(fileName, { content: data });
      if (result.ok) {
        setMessage(result.message);
        setService('success');
        setIsSnackbarOpen(true);
      }
    } catch (error: any) {
      setMessage('Error: ');
      setMessage(error.message);
      setService('error');
      setIsSnackbarOpen(true);
    }
  };

  const handleFormSubmit = (data: Record<string, any>) => {
    handleSave(data);
  };

  return (
    <>
      <GeneralForm
        fields={fields}
        onSubmit={handleFormSubmit}
        defaultValues={defaultValues ? defaultValues : {}}
      />
      <GenericSnackbar
        severity={service}
        text={message}
        open={isSnackbarOpen}
        handleClose={() => setIsSnackbarOpen(false)}
      />
    </>
  );
};

export default GenericFormPage;
