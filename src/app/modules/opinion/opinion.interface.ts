export interface IOpinion {
  id?: string;
  name: string;
  bpNumber: string;
  email?: string;
  phone?: string;
  workplace: string;
  websiteName?: string;
  features: string[];
  comments?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
