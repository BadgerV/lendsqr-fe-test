

// Importing stylesheet
import './textWithIcon.scss'

// Importing types
import { TextWithIconProps } from "../../types";

// JSX element representing text with an icon
const TextWithIcon: React.FC<TextWithIconProps> = ({ icon, text, onClick = undefined }) => {
  return (
    <div className="text-with-icon" onClick={onClick}>
      {/* Icon */}
      <img src={icon} alt="text-wtih-icon-img" className="icon" />
      {/* Text */}
      <span className="text">{text}</span>
    </div>
  );
};

// Exporting the TextWithIcon component as the default export
export default TextWithIcon;
