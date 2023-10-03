export interface IUser {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  user_agreement: boolean;
  offer_agreement: boolean;
  inn?: number;
  show_phone_number?: boolean;
  phone_number?: string;
  is_staff?: boolean;
  interest: number[];
  job_title?: string;
  organization?: string;
}

export type ILoginData = Pick<IUser, 'username' | 'password'>;

export interface IToken {
  refresh: string;
  access: string;
}
