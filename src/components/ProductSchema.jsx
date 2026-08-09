// src/components/ProductSchema.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const ProductSchema = ({ voucher }) => {
  // ✅ যদি voucher না থাকে, কিছু রেন্ডার করবে না
  if (!voucher) {
    return null;
  }

  const {
    name = "Techcyfy Voucher",
    shortName = "Exam Voucher",
    code = "",
    officialPrice = 0,
    youPay = 0,
    discount = 0,
    category = "Certification",
    rating = 4.9,
    reviewCount = 1200,
  } = voucher;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": shortName || name,
    "description": `Get genuine ${shortName || name} exam voucher with ${discount}% discount. Instant delivery guaranteed.`,
    "sku": code,
    "category": category || "IT Certification",
    "brand": {
      "@type": "Brand",
      "name": "Techcyfy"
    },
    "offers": {
      "@type": "Offer",
      "price": youPay,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://your-domain.com/vouchers/${code}`,
      "seller": {
        "@type": "Organization",
        "name": "Techcyfy"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating || 4.9,
      "reviewCount": reviewCount || 1200
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ProductSchema;