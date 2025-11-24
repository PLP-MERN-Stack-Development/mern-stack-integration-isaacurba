import React from 'react';
import useFetchData from '../hooks/useFetchData';
import { postService } from '../services/api'; 
import PostCard from '../components/PostCard'; 

const Home = () => {
  // Task 3: Use the custom hook for state management (loading, error) and API calls
  const { 
    data: posts, 
    loading, 
    error 
  } = useFetchData(postService.getAllPosts); // Calls GET /api/posts

  // --- Task 4: Handle loading and error states ---

  if (loading) {
    return <div className="text-center py-10 text-xl font-semibold text-gray-600">Loading posts...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-xl font-bold text-red-600 border border-red-300 bg-red-50 p-6 rounded">
        Error fetching posts: {error}
      </div>
    );
  }

  // --- Task 3: Post list view ---

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Latest Blog Posts</h1>
      <div className="post-list space-y-4">
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post._id} post={post} /> 
          ))
        ) : (
          <p className="text-lg text-gray-500 text-center py-10">
            No published posts found. Create one via the API or frontend form!
          </p>
        )}
      </div>
      {/* Pagination will go here later (Task 5) */}
    </div>
  );
};

export default Home;