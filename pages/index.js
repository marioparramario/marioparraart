import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Item } from "../components/Item";
import { List } from "../components/List";
import { getProducts } from "../services/products";

const Index = ({ products }) => {
  const router = useRouter();
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    console.log(router.query);
    if (itemSelected) {
    }
  }, [itemSelected]);

  return (
    <>
      <main>
        <section>
          <List products={products} item={itemSelected} setItemSelected={setItemSelected} />
          {itemSelected && <Item item={itemSelected} setItemSelected={setItemSelected} />}
        </section>
      </main>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  const products = await getProducts();
  return { products };
};

export default Index;
