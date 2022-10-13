import { useNavigate,useLocation } from "react-router-dom"
import "./VideoCard.scss"


const VideoCard = ({video,setSingleVideoId,setPrimaryVideo}) => {
  const Navigate = useNavigate()
  
  const {videoId} = video.id 

  const handleSingleVideo = () => {

    setSingleVideoId(videoId)
    setPrimaryVideo(video)
    Navigate('/videoExersice')

    window.scrollTo(0,0)

  }

  const title = video.snippet.title
  const imageThambnail = video.snippet.thumbnails.high.url



  return (
    <div className='video-card'
    style={{backgroundImage:`
    linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(8,1,13,1) 20%, rgba(8,1,13,0) 100%),
    url(${imageThambnail})`}}
    onClick={handleSingleVideo}
    >
      <h5>{title}</h5>


    </div>
  )

}

export default VideoCard


