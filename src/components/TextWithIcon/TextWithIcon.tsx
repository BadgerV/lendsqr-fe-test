//import style
import "../../styles/TextWithIcon/textWithIcon.scss";

//import types
import { TextWithIconProps } from "../../types";

//JSX element
const TextWithIcon: React.FC<TextWithIconProps> = ({ icon, text }) => {
  return (
    <div className="text-with-icon">
      <img src={icon} alt="" className="icon" />
      <span className="text">{text}</span>
    </div>
  );
};

export default TextWithIcon;
