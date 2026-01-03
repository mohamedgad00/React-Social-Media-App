
import Navbar from "../components/sharedLayout/Navbar";
import Footer from "../components/sharedLayout/Footer";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
