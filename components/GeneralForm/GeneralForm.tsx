/* eslint-disable @typescript-eslint/no-explicit-any */
//NODE_MODULES
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, CircularProgress } from '@mui/material';
//--------------------------------------------------------

// DEPENDENCY
import GButton from '@/components/Button/components/GButton';
import InputLabel from '@/components/Inputs/InputLabel/InputLabel';
import TextInput from '@/components/Inputs/TextInput/TextInput';
import DatePicker from '@/components/Inputs/DatePicker/DatePicker';
import Dropdown from '@/components/Inputs/Dropdown/Dropdown';
import ChipInput from '@/components/Inputs/ChipInput/ChipInput';
import NumberInput from '../Inputs/NumberInput/NumberInput';
import TextAreaInput from '../Inputs/TextAreaInput/TextAreaInput';
import FilePicker from '../Inputs/FilePicker/FilePicker';
import GenericSnackbar from '../Snackbar/GenericSnackbar';
import FormSkeleton from '../FormSkeleton/FormSkeleton';
//-----------------------------------------------------------------

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'date' | 'dropdown' | 'chip' | 'number' | 'area'|'file';
  options?: { title: string; key: string; text: string; value: string }[];
  rules?: Record<string, any>;
}

interface GeneralFormProps {
  fields: FieldConfig[];
  defaultValues: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
  onCancel?: () => void;
  isFormLoading?:boolean;
}

const GeneralForm: React.FC<GeneralFormProps> = ({ fields, defaultValues , onSubmit}) => {
  const { handleSubmit, control, reset ,setValue} = useForm({ defaultValues });
   const [isLoading, setIsLoading] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [isSkeletonVisible, setIsSkeletonVisible] = useState(true);


//SET DEFAULT VALUE IN FORM
  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });
      const timer = setTimeout(() => {
        setIsSkeletonVisible(false); 
      }, 500);
    
      return () => clearTimeout(timer);
    }
  }, [defaultValues, setValue]);

  //SUBMITING THE FORM
  const handleFormSubmit = (data: Record<string, any>) => {
    setIsLoading(true);
    onSubmit(data);
    setTimeout(() => {
     setIsLoading(false);
      setIsSnackbarOpen(true)
    }, 2000);
  };

  //CANCEL HANDLER
  const cancelHandler = () => {
    reset()

  }
  return(
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
      {isSkeletonVisible || Object.keys(defaultValues).length === 0 ? (
          <FormSkeleton rows={fields} isSingleLine={false} />
        ) :
      <>
        {fields.map((field) => (
          <InputLabel
            key={field.name}
            className='mb-2 mr-0 sm:mr-5'
            label={field.label}
            disable={false}
            rules={field.rules || {}}
          >
            <Controller
              name={field.name}
              control={control}
              rules={field.rules}
              render={({ field: controllerField, fieldState }) => {
                switch (field.type) {
                  case 'text':
                    return (
                      <TextInput
                        {...controllerField}
                        placeholder={`Enter ${field.label}`}
                        className="w-full"
                        error={fieldState.error}
                        value={controllerField.value ?? defaultValues[field.name] ?? ''}
                        onChangeValue={(value) => controllerField.onChange(value)}
                      />
                    );
                  case 'number':
                    return (
                      <NumberInput
                        {...controllerField}
                        placeholder={`Enter ${field.label}`}
                        className="w-full"
                        error={fieldState.error}
                        onChangeValue={(value) => controllerField.onChange(value)}
                        value={controllerField.value??defaultValues[field.name]??''}
                      />
                    );
                  case 'area':
                    return (
                      <TextAreaInput
                        {...controllerField}
                        placeholder={`Enter ${field.label}`}
                        className="w-full"
                        error={fieldState.error}
                        onChangeValue={(value) => controllerField.onChange(value)}
                        value={controllerField.value??defaultValues[field.name]??''}
                      />
                    );
                  case 'date':
                    return (
                      <DatePicker
                        {...controllerField}
                        error={fieldState.error}
                        onChangeValue={(newDate) => controllerField.onChange(newDate)}
                        name={field.name}
                        defaultValue={defaultValues[field.name]}
                        value={controllerField.value??defaultValues[field.name]??''}

                      />
                    );
                  case 'dropdown':
                    return (
                      <Dropdown
                        {...controllerField}
                        error={fieldState.error}
                        options={field.options || []}
                        onChangeValue={(value) => controllerField.onChange(value)}
                        name={field.name}
                        value={controllerField.value??defaultValues[field.name]??''}
                      />
                    );
                  case 'chip':
                    return (
                      <ChipInput
                        value={controllerField.value || []}
                        onChangeValue={controllerField.onChange}
                        placeholder={`Enter ${field.label} and press Enter`}
                        error={fieldState.error}
                        name={field.name}
                        defaultValue={defaultValues[field.name]}
                      />
                    );
                    case 'file':  
                    return (
                      <FilePicker
                        {...controllerField}
                        error={fieldState.error}
                        onChangeValue={(file) => controllerField.onChange(file)}
                        name={field.name}
                        placeholder={`Select ${field.label}`}
                        value={controllerField.value ?? defaultValues[field.name] ?? ''}
                      />
                    );
                  default:
                    return <div />;
                }
              }}
            />
          </InputLabel>
        ))}
        </> }

<Box className="flex flex-col items-center sm:flex-row lg:flex-row  justify-start gap-4">
  {isLoading ? (
    <GButton
      color="primary"
      variant="contained"
      type="submit"
      className="w-full sm:w-4/5 h-10 lg:w-4/5 h-12"
    >
      <CircularProgress
        color="inherit"
        size="1rem"
        classes={{ root: 'mx-6' }}
      />
    </GButton>
  ) : (
    <GButton
      color="primary"
      variant="contained"
      type="submit"
      className="w-full sm:w-4/5 h-10 lg:w-4/5 h-12"
      title="Submit"
    />
  )}

  <GButton
    link="/Preview"
    color="error"
    variant="contained"
    type="button"
    className="w-full  sm:w-4/5 h-10 lg:w-4/5 h-12"
    title="Cancel"
    onClick={cancelHandler}
  />
</Box>

      </form>
      <GenericSnackbar severity={'success'} text={'Data saved successfully'} open={isSnackbarOpen} handleClose={function (): void {
        setIsSnackbarOpen(false)
      }} />
    </>
  )
};

export default GeneralForm;
