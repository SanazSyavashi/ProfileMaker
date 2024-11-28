// getFieldsByFileName.ts

import { basicFields } from "./basic";
import { personalFields } from "./personal";
import { professionalFields } from "./professional";
import { socialFields } from "./social";

const getFieldsByFileName = (fileName: string) => {
  switch (fileName) {
    case 'basicInfoForm.txt':
      return basicFields;
    case 'personalInfoForm.txt':
      return personalFields;
    case 'professionalInfoForm.txt':
      return professionalFields;
    case 'socialInfoForm.txt':
      return socialFields;
    default:
      throw new Error(`Unknown file name: ${fileName}`);
  }
};

export default getFieldsByFileName;
