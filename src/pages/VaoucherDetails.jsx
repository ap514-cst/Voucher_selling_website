// src/pages/VoucherDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaBolt,
  FaCloud,
  FaGlobe,
  FaTags,
  FaArrowLeft,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaListUl,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { vouchersData } from "../data/vouchers";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ProductSchema from "../components/ProductSchema";

// Local image imports
import aws from "../assets/aws2.png";
import google from "../assets/google.png";
import microsoft from "../assets/mic.png";
import redhat from "../assets/red.png";
import cisco from "../assets/cisco.png";
import comptia from "../assets/comptia.png";
import databricks from "../assets/databricks.png";
import fortinet from "../assets/Fortinet2.png";
import kubernetes from "../assets/kubernetes.png";
import vmware from "../assets/Vmware.png";
import juniper from "../assets/juniper.png";
import snowflake from "../assets/snowflake.png";
import salesforce from "../assets/salesforcs.png";
import oracle from "../assets/oracle.png";
import servicenow from "../assets/service.png";

const VoucherDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [voucher, setVoucher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔍 Looking for voucher with ID:", id);
    
    // ✅ সঠিকভাবে ভাউচার খুঁজুন - সব ধরনের ID চেক করুন
    const found = vouchersData.find((v) => {
      // _id দিয়ে চেক (স্ট্রিং)
      if (v._id && v._id === id) {
        console.log("✅ Found by _id:", v.shortName);
        return true;
      }
      // id দিয়ে চেক (নাম্বার)
      if (v.id !== undefined && String(v.id) === id) {
        console.log("✅ Found by id:", v.shortName);
        return true;
      }
      // code দিয়ে চেক (স্ট্রিং)
      if (v.code && v.code === id) {
        console.log("✅ Found by code:", v.shortName);
        return true;
      }
      return false;
    });

    if (found) {
      console.log("✅ Voucher found:", found.shortName);
    } else {
      console.log("❌ No voucher found for ID:", id);
      console.log("📋 Available IDs:", vouchersData.map(v => ({ _id: v._id, id: v.id, code: v.code, name: v.shortName })));
    }

    setVoucher(found);
    setLoading(false);
  }, [id]);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Vouchers", url: "/vouchers" },
    { name: voucher?.shortName || "Details", url: `/vouchers/${id}` },
  ];

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
        <p className="text-slate-400 mb-6">
          The voucher you're looking for doesn't exist. (ID: {id})
        </p>
        <Link
          to="/vouchers"
          className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition-colors"
        >
          Browse All Vouchers
        </Link>
      </div>
    );
  }

  const {
    _id,
    shortName,
    name,
    code,
    logo,
    officialPrice,
    youPay,
    discount,
    popular,
    instantDelivery,
    category,
    description,
    examList = [],
  } = voucher;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in buying the ${shortName} (${code}) voucher.`
  );
  const whatsappUrl = `https://wa.me/+8801982188224?text=${whatsappMessage}`;

  const logoMap = {
    aws,
    amazon: aws,
    google,
    gcp: google,
    microsoft,
    azure: microsoft,
    redhat,
    cisco,
    comptia,
    databricks,
    fortinet,
    kubernetes,
    cncf: kubernetes,
    vmware,
    juniper,
    snowflake,
    salesforce,
    oracle,
    servicenow,
  };

  const features = [
    { icon: FaShieldAlt, label: "100% Genuine", color: "text-emerald-400" },
    { icon: FaClock, label: "Instant Delivery", color: "text-sky-400" },
    { icon: FaGlobe, label: "Worldwide Available", color: "text-purple-400" },
    { icon: FaCheckCircle, label: "Secure Payment", color: "text-green-400" },
  ];

  return (
    <>
      <Helmet>
        <title>{shortName} - Exam Voucher | Techcyfy</title>
        <meta
          name="description"
          content={`Get ${shortName} exam voucher at ${discount}% discount. Pay $${youPay} instead of $${officialPrice}. Instant delivery, worldwide availability.`}
        />
        <link
          rel="canonical"
          href={`https://your-domain.com/vouchers/${_id || code}`}
        />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ProductSchema voucher={voucher} />

      <section className="py-12 md:py-16 px-4 bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Vouchers</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-300 bg-sky-500/10 border border-sky-500/30 rounded-full">
                  <FaCloud className="text-[10px]" />
                  {category}
                </span>
                {popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    <FaBolt className="text-amber-400 text-xs" />
                    Popular
                  </span>
                )}
                {instantDelivery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                    <FaBolt className="text-emerald-400 text-[10px]" />
                    Instant Delivery
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {shortName}
              </h1>
              <p className="text-lg text-slate-400 mb-4">{name || shortName}</p>
              <p className="text-sm text-slate-500 font-mono mb-6">{code}</p>

              <p className="text-slate-300 leading-relaxed mb-6">
                {description ||
                  `Get genuine ${shortName} certification exam voucher at a discounted price. Official voucher with instant delivery and worldwide support.`}
              </p>

              <div className="mb-6">
                <Link
                  to={`/vouchers/${_id || code}/exams`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-sky-900/30 hover:shadow-sky-600/30 transition-all duration-200 group"
                >
                  <FaListUl className="text-base group-hover:rotate-12 transition-transform duration-300" />
                  <span>View Covered Exam List</span>
                  <FaExternalLinkAlt className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-800/40 rounded-xl p-3 border border-slate-700/50"
                  >
                    <feature.icon className={`${feature.color} text-lg`} />
                    <span className="text-sm text-slate-300">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/30 transition-all duration-200"
              >
                <FaWhatsapp className="text-2xl" />
                Order on WhatsApp Now
              </motion.a>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-md bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 border border-slate-700/50 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-slate-900/80 p-4 border border-slate-700/80 flex items-center justify-center">
                  <img
                    src={logoMap[logo?.toLowerCase()] || logoMap.aws}
                    alt={shortName}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {shortName}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{code}</p>

                <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FaGlobe className="text-sky-400" />
                    Worldwide
                  </span>
                  <span className="w-px h-4 bg-slate-700"></span>
                  <span className="flex items-center gap-1">
                    <FaBolt className="text-emerald-400" />
                    Instant
                  </span>
                  <span className="w-px h-4 bg-slate-700"></span>
                  <span className="flex items-center gap-1">
                    <FaShieldAlt className="text-emerald-400" />
                    Genuine
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 bg-slate-800/40 rounded-xl px-4 py-2 border border-slate-700/50">
                <div className="flex text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm text-slate-300">
                  4.9/5 (1200+ Reviews)
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoucherDetails;