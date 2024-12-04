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
    },
  },
];