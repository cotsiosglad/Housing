import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Development' title='Investment Projects' cover={img} />
        <div className='container projects mtop'>
          <div className="row">
            <RecentCard />

          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
