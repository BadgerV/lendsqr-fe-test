// Importing external stylesheet
import "../../styles/InfoBox/infoBox.scss";

// Importing the InfoBoxProps type from the types file
import { InfoBoxProps } from "../../types";
import { formatNumberWithCommas } from "../../utils/utils";

// Functional component representing an info box
const InfoBox: React.FC<InfoBoxProps> = ({ icon, text, number }) => {
  return (
    // Container for the info box
    <div className="infobox-container" data-testid="info-box-container">
      {/* Icon */}
      <img src={icon} alt="info-icon" className="icon" width={35} height={35} />

      {/* Text */}
      <span className="text">{text}</span>

      {/* Number */}
      <span className="number">{formatNumberWithCommas(number)}</span>
    </div>
  );
};

// Exporting the InfoBox component as the default export
export default InfoBox;
