// index.d.ts

// Props interface for components displaying text with an icon
export interface TextWithIconProps {
  icon: string; // Icon source
  text: string; // Text content
  onClick?: MouseEventHandler<HTMLDivElement> | null;
}

// Props interface for the Status component
export interface StatusProps {
  type: string; // Type of status
}

// Props interface for the RowSeries component
export interface RowSeriesProps {
  id: number; // User ID
  phone_number: string; // User phone number
  date_joined: string; // Date when the user joined
  name: string; // User name
  email: string; // User email
  organization: string; // User organization
  status: string; // User status
}

// Props interface for the HoverDisplay component
export interface ClickableDisplayProps {
  isOpen: boolean; // Flag indicating whether the hover display is open
}

// Props interface for the InfoBox component
export interface InfoBoxProps {
  text: string; // Text content for the InfoBox
  number: number; // Numeric content for the InfoBox
  icon: string; // Assuming the icon is a string representing the image source
}

// Interface representing the structure of a User object
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

// Interface representing the structure of the state
export interface State {
  usersInfo: User[]; // Array of user information
  isLoading: boolean; // Loading state
  pageNumber: number; // Current page number
  page: User[]; // Users on the current page
  userInfo: User | Record<string>; // Information for a specific user
  itemsPerPage: number; // Number of items to display per page
  loggedInUser: null | string;
}
