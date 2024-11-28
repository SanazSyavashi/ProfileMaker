/* eslint-disable @typescript-eslint/no-explicit-any */
//NODE_MODULES
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box } from '@mui/material';
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
import GenericSnackbar from '../snackbar/GenericSnackbar';
import LoadingComponent from '../Loading/LoadingComponent';
import FilePicker from '../Inputs/FilePicker/FilePicker';
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


  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key]);
      });
    }
  }, [defaultValues, setValue]);

  const handleFormSubmit = (data: Record<string, any>) => {
    setIsLoading(true);
    onSubmit(data);
    setTimeout(() => {
      setIsLoading(false);
      setIsSnackbarOpen(true)
    }, 2000);
  };

  const cancelHandler = () => {
    reset()

  }
  console.log(defaultValues)
  return(
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
      {Object.keys(defaultValues).length === 0? <LoadingComponent/>:
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
                        label={`Select ${field.label}`}
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

        <Box className="flex flex-row justify-between">
          <GButton
            color="primary"
            variant="contained"
            isLoading={isLoading}
            type="submit"
            className="w-5/12"
            title="Submit"
          >
            Submit
          </GButton>

          <GButton
            link='/Preview'
            color="error"
            variant="contained"
            type="button"
            className="w-5/12"
            title="cancel"
            onClick={cancelHandler}
          >
            Discard Changes
          </GButton>
        </Box>
 </> }
      </form>
      <GenericSnackbar severity={'success'} text={'Data saved successfully'} open={isSnackbarOpen} handleClose={function (): void {
        setIsSnackbarOpen(false)
      }} />
    </>
  )
};

export default GeneralForm;
