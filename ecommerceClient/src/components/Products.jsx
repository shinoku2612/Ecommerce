import { useEffect, useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive";
import Product from "./Product";
import axios from "axios";
import '../assets/custom.css';

const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-evenly;
    ${mobile({ padding: "0 0 0 2%" })};
`;
const NotFound = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Notification = styled.h2`
    text-align: center;
    letter-spacing: 1px;
    color: #d3d3d3;
`;

const Products = ({ cat, filters, sort, query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?categories=${cat}`
            : query
              ? `http://localhost:5000/api/products${query}`
              : "http://localhost:5000/api/products"

        );
        setProducts(res.data);
      } catch (err) {

      }
    };
    getProducts();
  }, [cat, query]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    products.length === 0
      ? <NotFound>
          <Notification>Products not found...</Notification>
        </NotFound>
      : <Container>
        {cat
          ? filteredProducts.map(item => (<Product item={item} key={item._id} />))
          : products.slice(0, 8).map(item => (<Product item={item} key={item._id} />))
        }
      </Container>
  )
}

export default Products
