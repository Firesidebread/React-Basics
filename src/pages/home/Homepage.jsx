import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

function Homepage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getApiProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getApiProducts();
  }, []);

  return (
    <>
      <title>Home</title>
      <Header cart={cart}></Header>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default Homepage;
