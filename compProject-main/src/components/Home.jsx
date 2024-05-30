import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import MainLinks from "./MainLinks";
import CallNow from "./CallNow";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <Images/> */}
      <ImageSlider />
      <MainLinks />
      <CallNow />
      <Footer />
    </div>
  );
};

export default Home;
