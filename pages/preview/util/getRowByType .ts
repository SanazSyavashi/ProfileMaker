interface TRow {
  label: string;
  name: string;
}

const socialRow: TRow[] = [
  { label: "Twitter", name: "twitter" },
  { label: "Github", name: "github" },
  { label: "LinkedIn", name: "linkdin" },
  { label: "Instagram", name: "instagram" },
  { label: "Personal Blog", name: "personal" }
];

const personalRow: TRow[] = [
  { label: "Name", name: "name" },
  { label: "Date of Birth", name: "birthDate" },
  { label: "Gender", name: "gender" },
  { label: "Address", name: "address" },
  { label: "Short Bio", name: "bio" },
  { label: "Website", name: "website" }
];

const basicRow: TRow[] = [
  { label: "Full Name", name: "fullName" },
  { label: "User Name", name: "userName" },
  { label: "Email Address", name: "email" },
  { label: "Phone Number", name: "phone" }
];

const professionalRow: TRow[] = [
  { label: "Job Title", name: "job" },
  { label: "Companies", name: "company" },
  { label: "Skills", name: "skill" },
  { label: "Educations", name: "education" },
  { label: "Work Experience", name: "work" },
  { label: "LinkedIn Profile", name: "linkdin" }
];

//get row type and return rows of forms dynamically
const getRowByType = (type: 'social' | 'personal' | 'basic' | 'professional'): TRow[] => {
  switch (type) {
    case 'social':
      return socialRow;
    case 'personal':
      return personalRow;
    case 'basic':
      return basicRow;
    case 'professional':
      return professionalRow;
    default:
      return [];
  }
};

export default getRowByType;
