// Importing stylesheet
import "../../styles/TextWithIcon/textWithIcon.scss";

// Importing types
import { TextWithIconProps } from "../../types";

// JSX element representing text with an icon
const TextWithIcon: React.FC<TextWithIconProps> = ({ icon, text }) => {
  return (
    <div className="text-with-icon">
      {/* Icon */}
      <img src={icon} alt="" className="icon" />
      {/* Text */}
      <span className="text">{text}</span>
    </div>
  );
};

// Exporting the TextWithIcon component as the default export
export default TextWithIcon;
