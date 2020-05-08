import React from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log(products);
  //   React.useEffect(() => {
  //     getProducts();
  //   }, []);

  //   const getProducts = async () => {
  //     const response = await axios('http://localhost:3000/api/products');
  //     console.log(response.data);
  //   };
  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios(url);
  return { products: response.data };
};

export default Home;
