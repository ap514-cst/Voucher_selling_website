// src/components/BreadcrumbSchema.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const BreadcrumbSchema = ({ items }) => {
  // ✅ items চেক করুন
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name || "Home",
      "item": `https://techcyfy.com${item.url || "/"}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;