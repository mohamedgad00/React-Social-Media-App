import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Swal from "sweetalert2";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === "mohamed-gad@gmail.com" &&
      credentials.password === "admin"
    ) {
      Swal.fire({
        title: "Success!",
        text: "Login is done successfully ✅",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      localStorage.setItem("auth", "true");

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid Login Data ❌",
        icon: "error",
      });
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-3">
          <div className="circle-avatar mx-auto mb-2">
            <span className="avatar-text">F</span>
          </div>
          <h4 className="mb-1">Login</h4>
          <p className="text-muted">Welcome back! Log in to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3 position-relative">
            <label className="form-label">Email :</label>
            <input
              type="email"
              name="username"
              className="form-control pe-5"
              placeholder="Enter your email"
              value={credentials.username}
              onChange={handleChange}
            />
            <i
              className="fas fa-envelope input-icon"
              style={{ top: "43px" }}
            ></i>
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <label className="form-label">Password :</label>
            <input
              type="password"
              name="password"
              className="form-control pe-5"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
            />
            <i className="fas fa-lock input-icon" style={{ top: "43px" }}></i>
          </div>

          <div className="d-grid mb-3">
            {error && (
              <div className="text-danger mb-2 text-center">{error}</div>
            )}
            <button type="submit" className="btn btn-primary gradient-button">
              Log In
            </button>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="d-block mb-2 text-decoration-none text-primary"
            >
              Forgot Password?
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              Create an account if you don't have one?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
