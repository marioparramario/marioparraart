import { Fragment } from 'react';
import Head from "next/head";

export const SEOLayout = ({
  title = 'Mario Parra Portfolio | Illustrator',
  metaContentDescription = 'I’m Mario Parra, a Chilean illustrator based in Berlin. I create digital illustrations with a focus on stylized characters built through simple and carefully crafted shapes',
  children,
})  => (
  <Fragment>
    <Head>
        <title>{ title }</title>
        <meta content={ title } key="title" property="og:title"/>
        <meta content={ title } property="twitter:title" />


        <meta key="robots" name="robots" content="index" />
          <meta key="googlebot" name="googlebot" content="index" />
          <link rel="shortcut icon" href="https://res.cloudinary.com/oqdesign/image/upload/v1602526845/Ultimate%20Portfolio/General/favicon_mlk4ns.ico" /> 
          <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/oqdesign/image/upload/v1602526845/Ultimate%20Portfolio/General/apple-touch-icon_bkc6ny.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/oqdesign/image/upload/v1602526845/Ultimate%20Portfolio/General/favicon-32x32_kza9vh.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/oqdesign/image/upload/v1602526845/Ultimate%20Portfolio/General/favicon-16x16_ounla0.png" />
          <link rel="mask-icon" href="https://res.cloudinary.com/oqdesign/image/upload/v1602526846/Ultimate%20Portfolio/General/safari-pinned-tab_ltq4k8.svg" />

          <meta property="og:image" content="https://res.cloudinary.com/oqdesign/image/upload/v1602526846/Ultimate%20Portfolio/General/share-image_fbzui0.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />

        <meta content={ metaContentDescription } name="description" />
        <meta content={ metaContentDescription } property="og:description" />
        <meta content={ metaContentDescription } property="twitter:description"></meta>




      </Head>
      { children }
  </Fragment>
);
