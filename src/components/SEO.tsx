import { Helmet } from "react-helmet-async"

type SEOProps = {
    title: string,
    description: string,
    image?: string,
    url?: string,
};

const SEO = ({ title, description, 
image = 'https://samuel-vincent-alac.vercel.app/thumbnail.png', 
url = 'https://samuel-vincent-alac.vercel.app/' }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Samuel Vincent Alac Portfolio" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO