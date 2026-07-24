import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../utils';

const SEO = ({ 
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  image = SEO_CONFIG.defaultImage,
  url = SEO_CONFIG.siteUrl,
  type = "profile",
  keywords = SEO_CONFIG.keywords.join(", ")
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl.replace(/\/$/, '')}${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SEO_CONFIG.author} />
      <link rel="canonical" href={url} />
      
      {/* Language and Locale */}
      <html lang={SEO_CONFIG.language} />
      <meta name="language" content={SEO_CONFIG.language} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="312" />
      <meta property="og:image:alt" content="Foto de perfil de Gastón Langellotti" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Foto de perfil de Gastón Langellotti" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile and App Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={SEO_CONFIG.siteName} />
    </Helmet>
  );
};

export default SEO;
