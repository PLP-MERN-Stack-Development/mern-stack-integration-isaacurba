// client/src/pages/SinglePost.jsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { postService } from "../services/api";

const SinglePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // Hook to redirect after delete

  const {
    data: post,
    loading,
    error,
  } = useFetchData(() => postService.getPost(slug), [slug]);

  // --- Handle Delete ---
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await postService.deletePost(post._id);
        alert("Post deleted successfully");
        navigate("/"); // Redirect to home page
      } catch (err) {
        alert("Failed to delete post: " + (err.response?.data?.error || err.message));
      }
    }
  };

  if (loading) return <div className="text-center py-12 text-2xl text-gray-600">Loading Article...</div>;
  
  if (error) return (
    <div className="text-center py-12 text-red-600 text-xl">
      Error loading post: {error}
    </div>
  );

  if (!post) return <div className="text-center py-12 text-2xl">Post Not Found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg border-t-4 border-blue-500">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {post.title}
      </h1>

      <div className="text-sm text-gray-500 mb-6 border-b pb-4">
        <span className="font-semibold">Author:</span> {post.author?.username || "Unknown"}
        <span className="mx-2">|</span>
        <span className="font-semibold">Category:</span> {post.category?.name || "Uncategorized"}
        <span className="mx-2">|</span>
        <span className="font-semibold">Views:</span> {post.viewCount}
      </div>

      <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap mb-8">
        {post.content}
      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t flex justify-end space-x-4">
        <Link
          to={`/edit/${post._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Edit Post
        </Link>
        
        {/* NEW: Delete Button */}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default SinglePost;