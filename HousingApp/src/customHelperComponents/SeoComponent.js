import { Helmet } from 'react-helmet';
import React from 'react';
const Seo = ({ title, description, pathSlug, keywords }) => {
  const url = `https://domusalba.eu/${pathSlug}`
	return (
<Helmet htmlAttributes={{ lang: 'en' }} title={title} meta={[
        {
          name: 'description',
          content: description,
        },
        {
            name: 'og_image',
            property: 'og:image',
            content: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
          },
        // {
        //   name: 'keywords',
        //   content: keywords.join(),
        // },
		]}
    links={[
     {
          rel: 'canonical',
          href: url,
      },
    ]}
    />
 );
}
export default Seo;