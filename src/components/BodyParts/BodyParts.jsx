import { Link } from "react-router-dom";
import "./BodyParts.scss";
import Button from "../Button/Button";
import BodyCard from "../card/body-card";
import backImage from '../../assets/back-body-part.jpeg'
import cardioImage from '../../assets/cardio-image.jpeg'
import armsImage from '../../assets/arms-image.jpeg'

const BodyParts = () => {

    const bodyPartsData = [
        {
            id:1,
            imageUrl:backImage,
            title:"Back"
        },
        {
            id:2,
            imageUrl:cardioImage,
            title:"Cardio"
        },
        {
            id:3,
            imageUrl:armsImage,
            title:"Upper Arms"
        }
    ]

  return (
    <div className="body-parts" id="bodyparts">
        <div className="container">
            <h2 className="body-parts--title title title-up">Body Parts</h2>
            <div className="body-parts--cards">
            {bodyPartsData.map(bodyPart => <BodyCard key={bodyPart.id} {...bodyPart} /> )}
            </div>
            <div className="btn-container">
                <Link to='bodyParts'>
                    <Button text='All Body Parts' className='btn btn-primary' />
                </Link>
            </div>
        </div>   
    </div>
  )
}

export default BodyParts