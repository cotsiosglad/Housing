import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Property types' subtitle='Explore All Types of Properties' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
