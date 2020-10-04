import { Fragment } from 'react';
import Head from "next/head";

const metaContentDescription = 'Illustration porfolio of a Mario Parra, berlin-based freelancer with a focus on graphic design, digital illustrations, and UI/UX';
export const SEOLayout = ({
  title = 'Mario Parra | Freelance Designer / Illustrator',
  children,
})  => (
  <Fragment>
    <Head>
        <title>{ title }</title>
        <meta content={ title } key="title" property="og:title"/>
        <meta content={ title } property="twitter:title" />

        <meta content={ metaContentDescription } name="description" />
        <meta content={ metaContentDescription } property="og:description" />
        <meta content={ metaContentDescription } property="twitter:description"></meta>

      </Head>
      { children }
  </Fragment>
);
