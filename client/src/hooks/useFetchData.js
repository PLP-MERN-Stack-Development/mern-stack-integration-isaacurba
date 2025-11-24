// client/src/hooks/useFetchData.js

import { useState, useEffect } from 'react';
import api from '../services/api'; 

/**
 * Custom hook for fetching data from the API on component mount/dependency change.
 * @param {function} fetchFunction - The specific API service function to call (e.g., postService.getAllPosts).
 * @param {Array} dependencies - Dependencies array to re-run the effect (like a page number).
 */
const useFetchData = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // We use an inner async function to manage the promise chain
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // The fetchFunction should be a wrapper around axios (like postService.getAllPosts)
        const response = await fetchFunction();
        
        // Assuming the API wrapper returns the data from response.data
        // The backend response format is { success: true, data: [...] }
        setData(response.data || response); 

      } catch (err) {
        console.error('API Fetch Error:', err);
        // Extract a clean error message from the response if available
        setError(err.response?.data?.error || err.message || 'An unknown error occurred');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies); 

  // The return value includes data, loading state, and any error encountered.
  return { data, loading, error };
};

export default useFetchData;