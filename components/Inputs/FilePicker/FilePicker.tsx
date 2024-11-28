"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
//NODE_MODULES
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { FieldError } from 'react-hook-form';
//--------------------------------------------------------------------
// //DEPENDENCY
import { TInputBaseProps } from '../types/inputs';
import HelperTextShow from '@/components/HelperTextShow/HelperTextShow';
import ErrShow from '@/components/ErrShow/ErrShow';
// -------------------------------------------------------------------

interface Props extends TInputBaseProps <any>{
  disabled?: boolean;
  className?: string;
  error?: FieldError;
  helperText?: string;
  validationMessage?: string;
  onChangeValue?: (file: File | null) => void;
  multiple?: boolean;
}

const FilePicker = (props: Props) => {
  const {
    value,
    onChangeValue,
    placeholder,
    className = '',
    disabled = false,
    error,
    onBlur,
    name,
    helperText,
    validationMessage,
    multiple = false,
  } = props;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (onChangeValue) {
      const selectedFile = e.target.files ? e.target.files[0] : null;
      onChangeValue(selectedFile);
    }
  };

  const getHelperText = () => {
    if (!error && !validationMessage) return helperText ?? '';
    if (!error) return validationMessage;
    return error.message;
  };

  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className={classNames(
            'cursor-pointer text-primary',
            disabled && 'opacity-50 pointer-events-none',
            className
          )}
        >
          <div className="border border-gray-300 p-2 rounded-lg text-center">
            {value ? (
              <span>Selected file: {value.name}</span>
            ) : (
              <span>{placeholder || 'Select file'}</span>
            )}
          </div>
        </label>

        <input
          id={name}
          name={name}
          type="file"
          onChange={handleChange}
          disabled={disabled}
          className="hidden"
          onBlur={onBlur}
          multiple={multiple}
          accept="image/*" 
        />
      </div>

      {!!error?.message && !!error && <ErrShow err={getHelperText() || ''} />}
      {!!helperText && (!error || !error.message) && (
        <HelperTextShow err={helperText} />
      )}
    </>
  );
};

export default FilePicker;
