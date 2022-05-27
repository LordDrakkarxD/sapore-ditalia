import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import "./user-icon.scss";

const UserIcon = () => {
  return (
    <div className="user-icon-container">
      <FontAwesomeIcon
        icon={regular("user")}
        className="user-icon"
      ></FontAwesomeIcon>
    </div>
  );
};

export default UserIcon;
