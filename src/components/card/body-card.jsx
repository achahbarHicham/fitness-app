import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import {BodyPartsContext} from '../context/BodypartsContext'

import "./bodyCard.scss"

const BodyCard = ({title,imageUrl}) => {

  const {setBodyPart} = useContext(BodyPartsContext)
  const Navigate = useNavigate()

  const navigateToBodyPart = () => {

    setBodyPart(title.toLowerCase())
    Navigate("/bodyParts")
  }

  return (
    <div className="body-card"
    style={{backgroundImage:`url(${imageUrl})`}}
    onClick={navigateToBodyPart}
    >
        <h3>{title}</h3>
    </div>
  )
}

export default BodyCard