import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

export default function PostsList({ searchTerm }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPosts(res.data.reverse()));
  }, []);

  const filteredPosts = posts.filter((p) =>
    p.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column gap-3">
      {filteredPosts.length === 0 ? (
        <p className="text-muted">No posts found.</p>
      ) : (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
