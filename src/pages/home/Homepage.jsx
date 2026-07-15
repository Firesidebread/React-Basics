import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

function Homepage({ cart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Home</title>
      <Header cart={cart}></Header>

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default Homepage;
