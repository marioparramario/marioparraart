import { SEOLayout } from "../components/SEOLayout";

import { List } from "../components/List";
import { getProducts } from "../services/products";

const Index = ({ products }) => {
  return (
    <SEOLayout>
      <main>
        <section>
          <List
            products={products}
          />
        </section>
      </main>
    </SEOLayout>
  );
};

Index.getInitialProps = async (ctx) => {
  const products = await getProducts();
  return { products };
};

export default Index;
