import React from "react";
// import Featured from "./featured/Featured"
import Hero from "./hero/Hero";
// import Location from "./location/Location"
import Recent from "./recent/Recent";
import Info from "./info/Info";
// import Price from "./price/Price"
// import Awards from "./awards/Awards"
// import Team from "./team/Team"
import ScrollToTop from "../../customHelperComponents/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Info />
      {/* <Featured /> */}
      <Recent />
      {/* <Awards /> */}
      {/* <Location /> */}

      {/* <Team />
      <Price /> */}
    </>
  );
};

export default Home;
