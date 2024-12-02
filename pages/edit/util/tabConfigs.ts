//DEPENDENCY
//-------------------------------------------------------------

import { GenericFormPageProps } from "../components/GenericFormPage";

//CONFIG OF EACH TAB OF EDIT PART
export const normalTabConfigs: GenericFormPageProps[] = [
  { fileName: "professionalInfoForm.txt", title: "Professional Information" },
  { fileName: "socialInfoForm.txt", title: "Social Information" }
];

export const specialTabConfigs: GenericFormPageProps[] = [
  { fileName: "basicInfoForm.txt", title: "Basic Information" },
  { fileName: "personalInfoForm.txt", title: "Personal Information" },
];