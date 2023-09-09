import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        {/* <div className='container d-flex flex-row justify-content-center flex-wrap'> */}
        <div className='container'>
          <Heading title='Latest Projects' subtitle='Recently Active or Completed Projects' />
          <div className="row">
            <RecentCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Recent
