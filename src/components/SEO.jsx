import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, imageUrl }) => {
  const siteTitle = 'Techcyfy - IT Certification Vouchers';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Get genuine IT certification exam vouchers for AWS, Microsoft, Google Cloud, CompTIA, Cisco, Red Hat and more. Save up to 70% with instant delivery.';
  const defaultImage = 'https://techcyfy.com/og-image.jpg'; // আপনার OG ইমেজ URL বসান

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl || window.location.href} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl || defaultImage} />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Techcyfy" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={imageUrl || defaultImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;