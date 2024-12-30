export interface Country {
  code: string;
  name: string;
  description: string;
  status: string;
  flagUrl: string;
  creationDate: string;
  lastUpdateDate: string;
}

export interface IdCoumentType {
  id: string;
  name: string;
  description: string;
  isActive: string;
}

export interface UserFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  idDocumentType: string;
  idNumber: string;
  phone: string;
  codeCountry: string;
  termsConditions: boolean;
  status: boolean;
}

export type FormElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
