import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  Pencil,
  Trash2,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function PostCard({ post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  const handleDelete = async () => {
    Swal.fire({
      title: "Do You Sure ?",
      text: "We will delete this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/posts/${post.id}`);
        Swal.fire("Deleted!", "Post has been deleted.", "success").then(() => {
          window.location.reload();
        });
      }
    });
  };

  const handleUpdate = async () => {
    try {
      // 1. Fetch existing post to preserve createdAt
      const res = await axios.get(`http://localhost:3000/posts/${post.id}`);
      const existingPost = res.data;
      // 2. Update with new title/body but keep createdAt
      await axios.put(`http://localhost:3000/posts/${post.id}`, {
        ...existingPost, // includes createdAt, id, etc.
        title: editedTitle,
        body: editedBody,
      });
      setIsEditing(false);
      Swal.fire({
        icon: "success",
        title: "Edit is done",
        text: "Post Edited Successfully",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  return (
    <div className="card mb-4 shadow-sm rounded-2 border-0 position-relative">
      <div className="card-body">
        {/* Dropdown Menu*/}
        <div className="dropdown position-absolute top-0 end-0 m-2">
          <button
            className="btn btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MoreHorizontal size={18} />
          </button>
          <ul className="dropdown-menu dropdown-menu-end fade">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setIsEditing(true)}
              >
                <Pencil size={14} className="me-2" />
                Edit
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-danger"
                onClick={handleDelete}
              >
                <Trash2 size={14} className="me-2" />
                Delete
              </button>
            </li>
          </ul>
        </div>

        {/* Post Header */}
        <div className="d-flex align-items-center mb-3">
          <img
            src="/public/avatar.png"
            className="rounded-circle border me-3"
            alt="avatar"
            style={{ width: "55px", height: "55px", objectFit: "cover" }}
          />
          <div>
            <strong className="d-block fs-5">Mohamed Gad</strong>
            <small className="text-muted">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
              })}
            </small>
          </div>
        </div>

        {/* Editable or View Mode */}
        {isEditing ? (
          <>
            <input
              className="form-control mb-2"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Title"
            />
            <textarea
              className="form-control mb-3"
              rows="3"
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              placeholder="Body"
              style={{ resize: "none" }}
            />
            <button className="btn btn-success me-2" onClick={handleUpdate}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5 className="fw-semibold">{post.title}</h5>
            <p className="text-break">{post.body}</p>
            <div className="d-flex justify-content-around mt-3 border-top pt-3">
              <button className="btn btn-light d-flex align-items-center gap-2">
                <ThumbsUp size={18} /> Like
              </button>
              <button className="btn btn-light d-flex align-items-center gap-2">
                <MessageSquare size={18} /> Comment
              </button>
              <button className="btn btn-light d-flex align-items-center gap-2">
                <Share2 size={18} /> Share
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
