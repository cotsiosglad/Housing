import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
// import Price from "./price/Price"
// import Awards from "./awards/Awards"
// import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      {/* <Awards /> */}
      <Location />
      {/* <Team />
      <Price /> */}
    </>
  )
}

export default Home
