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

        <meta content={ metaContentDescription } name="description" />
        <meta content={ metaContentDescription } property="og:description" />
        <meta content={ metaContentDescription } property="twitter:description"></meta>

      </Head>
      { children }
  </Fragment>
);
