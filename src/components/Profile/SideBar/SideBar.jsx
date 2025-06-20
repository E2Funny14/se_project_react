// import "./SideBar.css";
// import avatar from "../../../assets/avatar.svg";

// function SideBar() {
//   return (
//     <div className="sidebar">
//       <img src={avatar} alt="User Avatar" className="sidebar__avatar" />
//       <p className="sidebar__username">Terrence Tegegne</p>
//     </div>
//   );
// }

// export default SideBar;
import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function SideBar({ onEditProfileClick, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  const getAvatarDisplay = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name || "User"}
          className="sidebar__avatar"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
        />
      );
    } else if (currentUser?.name) {
      return (
        <div className="sidebar__avatar-placeholder">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
      );
    }
    return <div className="sidebar__avatar-placeholder">U</div>;
  };

  return (
    <div className="sidebar">
      {getAvatarDisplay()}
      <div className="sidebar__info">
        <p className="sidebar__username">{currentUser?.name || "User"}</p>
        <div className="sidebar__buttons">
          <button
            type="button"
            className="sidebar__edit-btn"
            onClick={onEditProfileClick}
          >
            Change Profile Data
          </button>
          <button
            type="button"
            className="sidebar__logout-btn"
            onClick={onLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
