import "./PrimaryCard.scss"

const PrimaryCard = ({videoId,videoInfo}) => {

  const handleTitle = () => {
    return <h3>{videoInfo.snippet.title}</h3>
  }

  return (
    <div className='primary-card'>
        <iframe className='primary-card--video' src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&color=#9927F3`} title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>    
        <div>
          {videoInfo && handleTitle()}
        </div>
    </div>
  )
}

export default PrimaryCard