import "../../styles/Status/Status.styles.scss";
import { StatusProps } from "../../types";

const Status: React.FC<StatusProps> = ({ type }) => {
  const typeChooser = (type: string) => {
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
  return <>{typeChooser(type)}</>;
};

const InactiveButton = () => {
  return <button className="button inactive">Inactive</button>;
};

const ActiveButton = () => {
  return <button className="button active">Active</button>;
};

const BlacklistButton = () => {
  return <button className="button blacklist">Blacklisted</button>;
};

const PendingButton = () => {
  return <button className="button pending">Pending</button>;
};

export default Status;
