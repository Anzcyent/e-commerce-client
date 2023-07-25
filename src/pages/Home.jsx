import React from "react";
import { Announcement, Footer, Navbar, Newsletter } from "../components";
import { HomeContainer } from "../containers";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Announcement />
      <HomeContainer />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
