import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./user-icon.scss";

const UserIcon = ({ logged }) => {
  return (
    <div className={`user-icon-container ${logged}`}>
      <FontAwesomeIcon icon={solid("crown")} className="crown-icon" />
      <FontAwesomeIcon icon={solid("user")} className="user-icon" />
    </div>
  );
};

export default UserIcon;
