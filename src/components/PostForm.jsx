import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePublish = async () => {
    if (title.trim() && body.trim()) {
      await axios.post("http://localhost:3000/posts", {
        title,
        body,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
      Swal.fire({
        icon: "success",
        title: "Published Successfully",
        text: "Post Has Been Added Successfully",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="What do you think?"
          rows="6"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ resize: "none" }}
        ></textarea>
        <div className="text-end">
          <button className="btn btn-primary" onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
