import './CardExersice.scss'

const CardExersice = ({id,bodyPart,gifUrl,name,target}) => {
  return (
    <div className='card-exersice'>
        <div className="card-exersice--titles">
            <h3>{name}</h3>
            <p><span>Target: <strong>{target}</strong></span> <span>Bodypart: <strong>{bodyPart}</strong></span></p>
        </div>
        <div className="card-exersice--image">
            <img src={gifUrl} alt={name} />
        </div>
    </div>
  )
}

export default CardExersice