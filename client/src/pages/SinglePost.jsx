// client/src/pages/SinglePost.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { postService } from "../services/api";

const SinglePost = () => {
  // 1. Get the slug from the URL parameters
  const { slug } = useParams();

  // 2. Use the custom hook to fetch data using the postService
  const {
    data: post,
    loading,
    error,
  } = useFetchData(() => postService.getPost(slug), [slug]); // Depend on slug change

  // --- Handle loading and error states ---

  if (loading) {
    return (
      <div className="text-center py-12 text-2xl font-medium text-gray-700">
        Loading Article...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-2xl font-bold text-red-600">
        Error loading post: {error}
        <p className="text-sm font-normal mt-2">
          Check console for API details.
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12 text-2xl font-bold text-orange-600">
        Post Not Found
      </div>
    );
  }

  // --- Display the full post content ---

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg border-t-4 border-blue-500">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {post.title}
      </h1>

      {/* Post Metadata */}
      <div className="text-sm text-gray-500 mb-6 border-b pb-4">
        <span className="font-semibold">Author:</span> {post.author.username}
        <span className="mx-2">|</span>
        <span className="font-semibold">Category:</span> {post.category.name}
        <span className="mx-2">|</span>
        <span className="font-semibold">Published:</span>{" "}
        {new Date(post.createdAt).toLocaleDateString()}
        <span className="mx-2">|</span>
        <span className="font-semibold">Views:</span> {post.viewCount}
      </div>

      {/* Post Content */}
      <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
        <p>{post.content}</p>
      </div>

      {/* Post Actions (for editing/deleting in Task 4) */}
      <div className="mt-8 pt-4 border-t flex justify-end space-x-4">
        {/* We use a placeholder ID for now; later we'll use post._id */}
        <Link
          to={`/edit/${post._id}`}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Edit Post
        </Link>
        {/* Delete button logic will be added in Task 4 */}
      </div>

      {/* Comments section will go here (Task 5) */}
      <div className="mt-10 pt-6 border-t">
        <h3 className="text-2xl font-semibold mb-4">
          Comments ({post.comments.length})
        </h3>
        {post.comments.length > 0 ? (
          // Render comments (will be done in Task 5)
          <p className="text-gray-600">Comments coming soon in Task 5...</p>
        ) : (
          <p className="text-gray-500">Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
