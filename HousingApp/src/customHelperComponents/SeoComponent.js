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
          property: 'og:title',
          content: description,
        },
        {
          name:"og_url",
          property: 'og:url',
          content: url,
        },
        {
          name:"og_type",
          property: 'og:type',
          content: "project",
        },
        {
          name: 'og_image',
          property: 'og:image',
          content: "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/images%2FDA_final%20logo-black.png?alt=media&token=81dcc63e-3448-4bd4-876b-6f792e338871",
        },
        {
          name:"og_image_width",
          property: 'og:image:width',
          content: "1000",
        },
        {
          property: 'og:image',
          content: "https://firebasestorage.googleapis.com/v0/b/housing-app-628b7.appspot.com/o/images%2FDA_final%20logo-black.png?alt=media&token=81dcc63e-3448-4bd4-876b-6f792e338871",
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