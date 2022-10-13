import "./BodyPartsCardHero.scss"

const BodyPartsHeroCard = ({bodyPartName,bodyPart,setBodyPart}) => {

  const activeCard = bodyPartName == bodyPart ? 'active' : ''
  const btnText = bodyPartName == bodyPart ? 'Selected' : 'Select'

  return (
    <div className={`bodyparts-hero-card ${activeCard}`}>
        <h2>{bodyPartName}</h2>
        <button onClick={() => setBodyPart(bodyPartName)}>{btnText}</button>
    </div>
  )
}

export default BodyPartsHeroCard;