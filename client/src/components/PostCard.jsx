import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
        {/* Link uses the slug for a cleaner URL */}
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        By {post.author.username} | Category: {post.category.name}
      </p>
      <p className="text-gray-700 mt-3 line-clamp-2">
        {post.excerpt || post.content.substring(0, 100) + "..."}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/posts/${post.slug}`}
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          Read More &rarr;
        </Link>
        <span className="text-xs text-gray-500">
          Views: {post.viewCount} | Comments: {post.comments.length}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
