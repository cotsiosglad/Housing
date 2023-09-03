import React from "react"

const InfoText = ({title,text}) => {
  return (
    <>
    <div className="row">
        <div className="col-12">
            <h3>{title}</h3>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
            <p>{text}</p>
        </div>
    </div>
    </>
  )
}

export default InfoText
