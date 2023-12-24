import "../../styles/InfoBox/infoBox.scss";
import { InfoBoxProps } from "../../types";

const InfoBox: React.FC<InfoBoxProps> = ({ icon, text, number }) => {
  return (
    <div className="infobox-container">
      <img src={icon} alt="" className="icon" width={35} height={35} />
      <span className="text">{text}</span>
      <span className="number">{number}</span>
    </div>
  );
};

export default InfoBox;
