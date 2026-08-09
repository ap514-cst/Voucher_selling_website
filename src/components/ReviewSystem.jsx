// src/components/ReviewSystem.jsx (আপডেটেড)
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaTrash, FaEdit } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const ReviewSystem = () => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({ total: 0, average: 0, distribution: {} });
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);

  // ✅ ইউজার আইডি তৈরি/লোড করা
  useEffect(() => {
    const getUserId = () => {
      let userId = localStorage.getItem('techcyfy_user_id');
      if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('techcyfy_user_id', userId);
      }
      return userId;
    };
    setCurrentUserId(getUserId());
  }, []);

  // ✅ Load reviews
  useEffect(() => {
    if (currentUserId) {
      fetchReviews();
      fetchStats();
    }
  }, [currentUserId]);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/reviews`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: Failed to fetch reviews`);
      }
      
      const data = await response.json();
      setReviews(data.data || []);
    } catch (err) {
      console.error('Fetch reviews error:', err);
      setError(err.message || 'Failed to load reviews. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/reviews/stats/all`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }
      
      const data = await response.json();
      setStats({
        total: data?.data?.total || 0,
        average: data?.data?.average || 0,
        distribution: data?.data?.distribution || {}
      });
    } catch (err) {
      console.error('Stats error:', err);
      setStats({ total: 0, average: 0, distribution: {} });
    }
  };

  // ✅ Submit new review (userId সহ)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setError("Please fill in all fields");
      return;
    }

    // ✅ userId চেক করুন
    if (!currentUserId) {
      setError("User ID not found. Please refresh the page.");
      return;
    }

    try {
      setError(null);
      const url = editingId 
        ? `${API_URL}/reviews/${editingId}`
        : `${API_URL}/reviews`;
      
      const method = editingId ? 'PUT' : 'POST';
      
      // ✅ userId সহ ডেটা পাঠান
      const requestBody = {
        name: name.trim(),
        rating: Number(rating),
        comment: comment.trim(),
        userId: currentUserId // ✅ ইউজার আইডি পাঠানো হচ্ছে
      };

      console.log('Sending review data:', requestBody); // ডিবাগিং

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to save review');
      }
      
      const data = await response.json();
      
      if (editingId) {
        setReviews(reviews.map(r => r._id === editingId ? data.data : r));
        setEditingId(null);
      } else {
        setReviews([data.data, ...reviews]);
        fetchStats();
      }

      setName("");
      setRating(5);
      setComment("");
      setError(null);
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.message || 'Failed to submit review. Please try again.');
    }
  };

  // ✅ Delete review
  const handleDelete = async (id) => {
    const reviewToDelete = reviews.find(r => r._id === id);
    
    if (reviewToDelete && reviewToDelete.userId !== currentUserId) {
      setError("You can only delete your own reviews!");
      return;
    }
    
    if (!window.confirm("Are you sure you want to delete your review?")) return;
    
    try {
      setError(null);
      const response = await fetch(`${API_URL}/reviews/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to delete review');
      }
      
      setReviews(reviews.filter(r => r._id !== id));
      fetchStats();
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.message || 'Failed to delete review. Please try again.');
    }
  };

  // ✅ Edit review
  const handleEdit = (review) => {
    if (review.userId !== currentUserId) {
      setError("You can only edit your own reviews!");
      return;
    }
    
    setEditingId(review._id);
    setName(review.name);
    setRating(review.rating);
    setComment(review.comment);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName("");
    setRating(5);
    setComment("");
    setError(null);
  };

  // Filter reviews
  const filteredReviews = reviews.filter((review) => {
    if (filter === "all") return true;
    return review.rating === parseInt(filter);
  });

  const averageRating = stats.average || 0;
  const totalReviews = stats.total || 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => {
    const count = stats.distribution?.[star] || 0;
    return { 
      star, 
      count, 
      percentage: totalReviews > 0 ? (count / totalReviews) * 100 : 0 
    };
  });

  // Star component
  const StarRating = ({ rating, onRatingChange, onHover, size = "text-2xl" }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onRatingChange(star)}
            onMouseEnter={() => onHover(star)}
            onMouseLeave={() => onHover(0)}
            className={`${size} ${
              star <= (hoverRating || rating)
                ? "text-amber-400"
                : "text-slate-600"
            } transition-colors duration-150`}
          >
            <FaStar />
          </motion.button>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return 'Recently';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Customer <span className="text-amber-400">Reviews</span>
          </h2>
          <p className="text-slate-400">Share your experience with Techcyfy</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl mb-6">
            <p className="text-red-400 text-sm">{error}</p>
            <button 
              onClick={() => setError(null)}
              className="text-red-400/70 text-xs hover:text-red-400 mt-1"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            {/* Stats Card */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-1">
                  {averageRating ? averageRating.toFixed(1) : '0.0'}
                </div>
                <StarRating
                  rating={parseFloat(averageRating) || 0}
                  onRatingChange={() => {}}
                  onHover={() => {}}
                  size="text-lg"
                />
                <p className="text-sm text-slate-400 mt-1">
                  {totalReviews} reviews
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {ratingDistribution.map((item) => (
                  <button
                    key={item.star}
                    onClick={() => setFilter(filter === String(item.star) ? "all" : String(item.star))}
                    className={`w-full flex items-center gap-2 px-2 py-1 rounded-lg transition-all ${
                      filter === String(item.star)
                        ? "bg-amber-500/20 border border-amber-500/30"
                        : "hover:bg-slate-700/30"
                    }`}
                  >
                    <span className="text-sm font-medium text-white w-6">{item.star}</span>
                    <FaStar className="text-amber-400 text-sm" />
                    <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-400 w-8 text-right">{item.count}</span>
                  </button>
                ))}
              </div>

              {filter !== "all" && (
                <button
                  onClick={() => setFilter("all")}
                  className="mt-3 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Clear filter
                </button>
              )}
            </div>

            {/* Review Form */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">
                {editingId ? "Edit Your Review" : "Write a Review"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Rating
                  </label>
                  <StarRating
                    rating={rating}
                    onRatingChange={setRating}
                    onHover={setHoverRating}
                    size="text-2xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Your Review
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience..."
                    rows="3"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    {editingId ? "Update Review" : "Submit Review"}
                  </motion.button>

                  {editingId && (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={cancelEdit}
                      className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      Cancel
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: Reviews List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-400">
                Showing {filteredReviews.length} of {reviews.length} reviews
              </p>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {filteredReviews.length === 0 ? (
                  <div className="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                    <p className="text-slate-400">No reviews yet. Be the first!</p>
                  </div>
                ) : (
                  filteredReviews.map((review, index) => {
                    const isOwnReview = review.userId === currentUserId;
                    
                    return (
                      <motion.div
                        key={review._id || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border transition-all duration-300 ${
                          isOwnReview 
                            ? 'border-emerald-500/40 hover:border-emerald-400/60' 
                            : 'border-slate-700/50 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                                isOwnReview 
                                  ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                                  : 'bg-gradient-to-br from-sky-500 to-blue-600'
                              }`}>
                                {review.name?.charAt(0) || 'U'}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-bold text-white">{review.name}</h4>
                                  {isOwnReview && (
                                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                                      You
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <StarRating
                                    rating={review.rating || 0}
                                    onRatingChange={() => {}}
                                    onHover={() => {}}
                                    size="text-sm"
                                  />
                                  <span className="text-xs text-slate-500">
                                    {formatDate(review.date || review.createdAt)}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              "{review.comment}"
                            </p>
                          </div>

                          {isOwnReview && (
                            <div className="flex gap-2 ml-4">
                              <button
                                onClick={() => handleEdit(review)}
                                className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-700/50 transition-all"
                                aria-label="Edit review"
                              >
                                <FaEdit className="text-sm" />
                              </button>
                              <button
                                onClick={() => handleDelete(review._id)}
                                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-700/50 transition-all"
                                aria-label="Delete review"
                              >
                                <FaTrash className="text-sm" />
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSystem;