import React from "react";
// import Featured from "./featured/Featured"
import Hero from "./hero/Hero";
// import Location from "./location/Location"
import Recent from "./recent/Recent";
import Info from "./info/Info";
// import Price from "./price/Price"
// import Awards from "./awards/Awards"
// import Team from "./team/Team"
import Seo from "../../customHelperComponents/SeoComponent";
import ScrollToTop from "../../customHelperComponents/ScrollToTop";

const Home = () => {
  return (
    <>
      <Seo title={"Domus Alba"} description={"Domus Alba Αγορά Σπιτίου και Διαμερίσματος και παροχή υπηρεσιών ενοικίου"} keywords={["domus alba projects", "project", "Αγορά Κατοικιών", "Ενοίκιο διαμέρισμα σπίτι", "Apartment house for rent", "Apartment for sale", "Αγορά Σπιτίου", "Αγορά διαμερίσματος"]} />
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
