

import InfoText from "../../common/InfoText"
import "./info.css"
import { homeDescription } from "../../data/Data"
import image from "../../images/vision-fotor-bg-remover-20230903171531.png"

export default ()=>{
    return(
        <section className="info padding">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <InfoText title={homeDescription.title} text={homeDescription.text}/>
                    </div>
                    <div className="col-6 info-text-img text-center">
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

