import { Helmet } from 'react-helmet-async';

const ProductSchema = ({ vouchers }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": vouchers.map((voucher, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": voucher.shortName,
        "description": `${voucher.shortName} certification exam voucher - Save ${voucher.discount}%`,
        "sku": voucher.code,
        "offers": {
          "@type": "Offer",
          "price": voucher.youPay,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      },
    })),
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