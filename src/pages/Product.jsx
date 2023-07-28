import React from "react";
import { Announcement, Footer, Navbar, Newsletter } from "../components";
import ProductContainer from "../containers/ProductContainer";

const Product = () => {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <Navbar />
      <Announcement/>
      <ProductContainer />
      <Newsletter/>
      <Footer />
    </main>
  );
};

export default Product;
