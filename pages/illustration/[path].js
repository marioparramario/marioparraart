import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { SEOLayout } from "../../components/SEOLayout";
import { Item } from "../../components/Item";
import { getProducts } from "../../services/products";

const Page = ({ item }) => {
  return (
    <SEOLayout
    title={item.title}
    metaContentDescription={item.description}>
      <main>
        <Item item={item}/>
      </main>
    </SEOLayout>
  );
};

Page.getInitialProps = async ({ query }) => {
  const products = await getProducts();
  const item = products
    .find((item) => item.path === query.path)
  return { item };
};

export default Page;
