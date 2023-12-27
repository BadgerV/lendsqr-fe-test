// index.d.ts

export interface TextWithIconProps {
  icon: string;
  text: string;
}

export interface StatusProps {
  type: string;
}

export interface RowSeriesProps {
  id: number;
  phone_number: string;
  date_joined: string;
  name: string;
  email: string;
  organization: string;
  status: string;
}

export interface HoverDisplayProps {
  isOpen: boolean;
}

export interface InfoBoxProps {
  text: string;
  number: string;
  icon: string; // Assuming the icon is a string representing the image source
}

interface User {
  acc_no: string;
  bank_name: string;
  bvn: number;
  children: number;
  date_joined: string;
  email: string;
  facebook_username: string;
  gender: string;
  guarantor_email: string;
  guarantor_name: string;
  guarantor_phone_number: string;
  guarantor_relationship: string;
  id: number;
  instagram_username: string;
  lendsrq_id: string;
  level_of_education: string;
  loan_amount: number;
  marital_status: string;
  monthly_income: number;
  name: string;
  office_email: string;
  organization: string;
  phone_number: string;
  residence: string;
  sector_of_employment: string;
  status: string;
  twitter_username: string;
  user_tier: number;
}

export interface State {
  usersInfo: User[];
  isLoading: boolean;
  pageNumber: number;
  page: User[];
  userInfo: User | Record<string>;
  itemsPerPage: number;
}
