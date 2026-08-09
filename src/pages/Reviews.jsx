import React from 'react'
import { motion } from "framer-motion";
import { FaSearch, FaWhatsapp, FaEnvelope, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReviewSystem from '../components/ReviewSystem';
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import {Helmet} from "react-helmet-async"
const Reviews = () => {

    const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" }
  ];

  const reviews = [
    {
      name: "Michael Anderson",
      rating: 5,
      text: "Got my AWS SAA-C03 voucher instantly. Smooth process and great support!",
      delay: 0,
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "Best prices for Azure exams. Highly recommended Techcyfy!",
      delay: 0.1,
    },
    {
      name: "David Wilson",
      rating: 5,
      text: "Quick delivery and genuine voucher. Will buy again for sure.",
      delay: 0.2,
    },
    {
      name: "James Parker",
      rating: 5,
      text: "Great experience! Saved a lot of money on my exam.",
      delay: 0.3,
    },
  ];

  const StarRating = ({ rating }) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      }
    }
    return <div className="flex">{stars}</div>;
  }


  return (
    <>

      <Helmet>
        <title>Customer Reviews - Techcyfy</title>
        <meta name="description" content="Read what our customers say about Techcyfy. Share your experience and help others choose the best IT certification vouchers." />
        <link rel="canonical" href="http://localhost:5173/reviews" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ReviewSystem />


      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3">
            What Our <span className="text-amber-400">Customers Say</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Trusted by Thousands of Happy Customers
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: review.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Name & Rating */}
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-sm md:text-base font-bold text-white">
                  {review.name}
                </h4>
                <StarRating rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="text-sm text-slate-400 leading-relaxed">
                "{review.text}"
              </p>

              {/* Quote Icon */}
              <div className="mt-3 text-amber-400/20 text-2xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>


    </>
  )
}

export default Reviews
