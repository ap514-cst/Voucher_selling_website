// src/pages/ExamList.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaFileAlt,
  FaTag,
  FaLayerGroup,
  FaShieldAlt,
  FaCloud,
  FaLock,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { vouchersData } from "../data/vouchers";
import { getExamGuide } from "../data/examData";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const ExamList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [voucher, setVoucher] = useState(null);
  const [examGuide, setExamGuide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = vouchersData.find(
      (v) =>
        String(v._id) === String(id) ||
        String(v.code) === String(id) ||
        String(v.id) === String(id)
    );

    setVoucher(found);

    if (found) {
      const guide = getExamGuide(found.guideId);
      setExamGuide(guide);
    } else {
      setExamGuide(null);
    }

    setLoading(false);
  }, [id]);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Vouchers", url: "/vouchers" },
    { name: voucher?.shortName || "Details", url: `/vouchers/${id}` },
    { name: "Exam Guide", url: `/vouchers/${id}/exams` },
  ];

  const getIconForLevel = (levelName) => {
    const icons = {
      "Fundamentals": <FaCloud className="text-sky-400" />,
      "Core": <FaCloud className="text-sky-400" />,
      "Associate & Professional": <FaLayerGroup className="text-purple-400" />,
      "Associate": <FaLayerGroup className="text-purple-400" />,
      "Professional": <FaLayerGroup className="text-purple-400" />,
      "Professional & Specialty": <FaLayerGroup className="text-purple-400" />,
      "Security, Compliance & Identity": <FaLock className="text-emerald-400" />,
    };
    return icons[levelName] || <FaFileAlt className="text-slate-400" />;
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${voucher?.shortName || "Exam"} (${voucher?.code || ""}) voucher. Can you please share more details?`
  );
  const whatsappUrl = `https://wa.me/+8801982188224?text=${whatsappMessage}`;
  const telegramUrl = `https://t.me/techcyfy`;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!voucher) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Voucher Not Found</h2>
        <Link
          to="/vouchers"
          className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition-colors"
        >
          Browse All Vouchers
        </Link>
      </div>
    );
  }

  const { shortName, code, category } = voucher;

  const displayGuide = examGuide || {
    title: `${shortName} - Complete Exam Guide`,
    description: `Comprehensive guide for ${shortName} certification exams.`,
    levels: [
      {
        name: "Core Exams",
        exams: [
          { code: code, name: shortName, description: `Complete ${shortName} certification exam guide.` }
        ]
      }
    ],
    whyCertify: [
      "Validate your cloud computing skills",
      "Build a successful career in IT",
      "Get recognized by top employers",
      "Stay competitive in the job market"
    ],
    careerPaths: {
      "Cloud Professional": [code],
      "System Administrator": [code],
      "Cloud Architect": [code]
    }
  };

  return (
    <>
      <Helmet>
        <title>Exam Guide - {shortName} | Techcyfy</title>
        <meta
          name="description"
          content={`Complete exam guide for ${shortName} certification. All exam topics, career paths, and certification details covered.`}
        />
        <link
          rel="canonical"
          href={`https://your-domain.com/vouchers/${id}/exams`}
        />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="py-12 md:py-16 px-4 bg-black text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Details</span>
          </button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                Exam Guide
              </span>
              <span className="text-xs text-slate-500">{category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {displayGuide.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              {displayGuide.description}
            </p>
            <p className="text-sm text-slate-500 font-mono mt-2">
              Voucher: {shortName} ({code})
            </p>
          </motion.div>

          {/* Certification Levels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaLayerGroup className="text-sky-400" />
              Certification Levels
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Certifications are organized into different levels based on experience and expertise.
            </p>

            <div className="space-y-6">
              {displayGuide.levels.map((level, levelIndex) => (
                <motion.div
                  key={levelIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: levelIndex * 0.15 }}
                  className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">{getIconForLevel(level.name)}</span>
                    <h3 className="text-lg font-bold text-white">{level.name}</h3>
                    <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-0.5 rounded-full">
                      {level.exams.length} exams
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {level.exams.map((exam, examIndex) => (
                      <div
                        key={examIndex}
                        className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 hover:border-sky-500/30 transition-all duration-200"
                      >
                        <div className="flex items-start gap-3">
                          <FaCheckCircle className="text-emerald-400 text-sm mt-1 flex-shrink-0" />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-bold text-white">{exam.name}</span>
                              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">
                                {exam.code}
                              </span>
                            </div>
                            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                              {exam.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Certify Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-emerald-400" />
              Why Get Certified?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayGuide.whyCertify.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50"
                >
                  <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaTag className="text-amber-400" />
              Career Paths
            </h2>
            <p className="text-sm text-slate-400 mb-4">
              Choose the certification path that matches your career goals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(displayGuide.careerPaths).map(([path, exams], index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50"
                >
                  <h4 className="text-sm font-bold text-white mb-2">{path}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exams.map((examCode, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-1 rounded-full"
                      >
                        {examCode}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ✅ CTA Section - Updated: WhatsApp & Telegram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-sky-600/20 to-blue-600/20 rounded-2xl p-8 border border-sky-500/30 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to Start Your Certification Journey?
            </h3>
            <p className="text-slate-400 mb-4">
              Get your exam voucher today. Contact us on WhatsApp or Telegram.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* ✅ WhatsApp Button - Order Now */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200"
              >
                <FaWhatsapp className="text-lg" />
                <span>Order Now</span>
              </motion.a>

              {/* ✅ Telegram Button */}
              <motion.a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-600/25 transition-all duration-200"
              >
                <FaTelegramPlane className="text-lg" />
                <span>Join Telegram</span>
              </motion.a>

              {/* ✅ Browse All Vouchers Button */}
             
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ExamList;