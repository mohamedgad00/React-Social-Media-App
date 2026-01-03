import {
  FaUserFriends,
  FaClock,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      {/* Profile Card */}
      <div className="card p-3 mb-3">
        <div className="d-flex align-items-center">
          <img
            src="/public/avatar.png"
            alt="Avatar"
            className="rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <p className="mb-1 fw-bold">Mohamed Gad</p>
            <small className="text-muted" style={{ cursor: "pointer" }}>
              View Profile
            </small>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="card p-3 mb-3">
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <FaUserFriends className="me-2" />
              <span>Friends</span>
            </div>
            <span className="badge bg-secondary rounded-pill">12</span>
          </li>

          <li className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <FaClock className="me-2" />
              <span>Latest</span>
            </div>
            <span className="badge bg-secondary  rounded-pill">5</span>
          </li>

          <li className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <FaBookmark className="me-2" />
              <span>Saved</span>
            </div>
            <span className="badge bg-secondary rounded-pill">8</span>
          </li>

          <li className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <FaCog className="me-2" />
              <span>Settings</span>
            </div>
            {/* No number for settings, optional */}
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="card p-3">
        <button
          className="btn btn-outline-danger d-flex align-items-center"
          onClick={() => {
            localStorage.removeItem("auth");
            window.location.href = "/login";
          }}
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>
      </div>
    </>
  );
}
