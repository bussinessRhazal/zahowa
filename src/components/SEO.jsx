import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../data/siteConfig';

export default function SEO({ title, description }) {
  const t = title || SITE_CONFIG.title;
  const d = description || SITE_CONFIG.description;
  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
    </Helmet>
  );
}
