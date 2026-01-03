import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-2 shadow">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#">
          Facebook
        </a>

        {/* Search Input */}
        <form className="d-none d-lg-flex mx-auto" style={{ width: "300px" }}>
          <div className="position-relative w-100">
            <i
              className="fa-solid fa-magnifying-glass position-absolute"
              style={{
                top: "50%",
                left: "15px",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            ></i>
            <input
              type="text"
              className="form-control rounded-pill ps-5"
              placeholder="Search on Facebook"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </form>

        {/* Icons and Profile */}
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="text-white fs-5">
            <i className="fas fa-home"></i>
          </a>
          <a href="#" className="text-white fs-5">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#" className="text-white fs-5">
            <i class="fa-solid fa-user"></i>
          </a>
          <img
            src="/public/avatar.png"
            className="rounded-circle"
            alt="Profile"
            style={{ width: "32px", height: "32px", objectFit: "cover" }}
          />
        </div>
      </div>
    </nav>
  );
}
