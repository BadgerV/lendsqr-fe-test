// Importing stylesheet
import "../../styles/Status/Status.styles.scss";
import { StatusProps } from "../../types";

// Functional component representing the status
const Status: React.FC<StatusProps> = ({ type }) => {
  // Function to choose the appropriate status button based on the given type
  const chooseStatusButton = (type: string) => {
    if (type === "active") {
      return <ActiveButton />;
    } else if (type === "blacklist") {
      return <BlacklistButton />;
    } else if (type === "inactive") {
      return <InactiveButton />;
    } else if (type === "pending") {
      return <PendingButton />;
    }
  };

  // JSX structure for displaying the chosen status button
  return <>{chooseStatusButton(type)}</>;
};

// Component for the "Inactive" status button
const InactiveButton = () => {
  return <button className="button inactive">Inactive</button>;
};

// Component for the "Active" status button
const ActiveButton = () => {
  return <button className="button active">Active</button>;
};

// Component for the "Blacklisted" status button
const BlacklistButton = () => {
  return <button className="button blacklist">Blacklisted</button>;
};

// Component for the "Pending" status button
const PendingButton = () => {
  return <button className="button pending">Pending</button>;
};

// Exporting the Status component as the default export
export default Status;
