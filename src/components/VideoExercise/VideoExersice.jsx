import { useContext } from "react"
import "./VideoExersice.scss"
import VideoCard from "../VideoCard/VideoCard"
import {BodyPartsContext} from '../context/BodypartsContext'
import { ReactComponent as ArrowDown } from "../../assets/arraow-down.svg"
import SelectBodyPart from "../SelectBodyPart/SelectBodyPart"


const VideoExersice = () => {

  const {bodyPartsList,videos,setBodyPart,bodyPart,setSingleVideoId,setPrimaryVideo} = useContext(BodyPartsContext)

  return (
    <div className="container video-exercise">
      <h1 className="video-exercise--title title-up">video exercises</h1>

    <SelectBodyPart bodyPartsList={bodyPartsList} setBodyPart={setBodyPart} bodyPart={bodyPart} />

      <div className="videos-container">{
        videos && videos.map(video => <VideoCard 
          key={video.id.videoId}
          video={video}
          setSingleVideoId={setSingleVideoId}
          setPrimaryVideo={setPrimaryVideo}
          />)
      }</div>
    </div>
  )
}

export default VideoExersice