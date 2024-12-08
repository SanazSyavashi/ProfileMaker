//DEPENDENCY
import { FieldConfig } from "@/components/GeneralForm/GeneralForm";
//-----------------------------------------------------------------

//FIELDS OF BASIC FORM WHICH LOAD DYNAMICALLY
export const basicFields: FieldConfig[] = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      }, 
      pattern: { 
        value: /^[A-Za-z\s]+$/,
        message: "Only English letters are allowed"
      },
    },
  },
  {
    name: 'userName',
    label: 'User Name',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      },
      pattern: { 
        value: /^[A-Za-z\s]+$/,
        message: "Only English letters are allowed"
      },
    },
  },
  {
    name: 'pic',
    label: 'Profile Picture',
    type: 'file',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      },
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    },
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'number',
    rules: {
      required: {
        value: true,
         message: "Please fill out this field"
      },
        minLength: { value: 6, message: "Minimum 6 characters required" },
        maxLength: { value: 20, message: "Maximum 20 characters allowed" }
    },
  },
];