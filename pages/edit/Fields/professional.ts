//DEPENDENCY
import { FieldConfig } from "@/components/GeneralForm/GeneralForm";
//-----------------------------------------------------------------

//FIELDS OF PROFESSIONAL FORM WHICH LOAD DYNAMICALLY
export const professionalFields : FieldConfig[]= [
  {
    name: 'job',
    label: 'Job Title',
    type: 'chip', 
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'company',
    label: 'Companies',
    type: 'chip',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'skill',
    label: 'Skills',
    type: 'chip',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
  {
    name: 'education',
    label: 'Educations',
    type: 'chip',
  },
  {
    name: 'work',
    label: 'Work Experience',
    type: 'chip',
  },
  {
    name: 'linkdin',
    label: 'LinkedIn Profile',
    type: 'text',
    rules: {
      required: {
        value: true,
         message: "this field is req"
      },
    },
  },
];
