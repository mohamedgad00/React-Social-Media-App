import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ActiveFriends from "../components/ActiveFriends";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top Navbar */}
      <Navbar onSearch={setSearchTerm} />

      {/* Main content */}
      <div className="container-fluid mt-3 flex-grow-1">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 d-none d-md-block">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-6">
            <PostForm />
            <PostsList searchTerm={searchTerm} />
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3 d-none d-md-block">
            <ActiveFriends />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
