// index.d.ts

export interface TextWithIconProps {
  icon: string;
  text: string;
}

export interface StatusProps {
  type: string;
}

export interface RowSeriesProps {
  name: string;
  email: string;
  phone: string;
  username: string;
  date: string;
  type: string;
}

export interface HoverDisplayProps {
  isOpen: boolean;
}

export interface InfoBoxProps {
  text: string;
  number: string;
  icon: string; // Assuming the icon is a string representing the image source
}
