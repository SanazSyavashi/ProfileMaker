interface FormsRow {
  fileName: string; 
  type: 'basic' | 'personal' | 'professional' | 'social'; 
  title: string; 
  multiRow?: boolean; 
}

const formsRow: FormsRow[] = [
  {
    fileName: 'basicInfoForm.txt',
    type: 'basic',
    title: 'Basic Information',
  },
  {
    fileName: 'personalInfoForm.txt',
    type: 'personal',
    title: 'Personal Information',
  },
  {
    fileName: 'professionalInfoForm.txt',
    type: 'professional',
    title: 'Professional Information',
    multiRow: true, 
  },
  {
    fileName: 'socialInfoForm.txt',
    type: 'social',
    title: 'Social Information',
  },
];

export default formsRow;
