import "./VideoExersiceHero.scss"
import { useState,useEffect,Fragment,useRef } from "react"
import PrimaryCard from '../PrimaryCard/PrimaryCard'
import ListVideoCard from "../ListVideoCard/ListVideoCard"
import SelectBodyPart from "../../../components/SelectBodyPart/SelectBodyPart"
import RelatedExercise from "../../../components/RelatedExercise/RelatedExercise"


const VideoExersiceHero = ({
  videoId,
  videos,
  primaryVideo,
  setSingleVideoId,
  setPrimaryVideo,
  bodyPart,
  bodyPartsList,
  setBodyPart,
}) => {


  const videoCardRef = useRef()

  return (
    <Fragment>
      <SelectBodyPart 
      bodyPart={bodyPart} 
      bodyPartsList={bodyPartsList} 
      setBodyPart={setBodyPart}
      />
    <div className='hero-video-exersice' id="video-card" ref={videoCardRef}>
        {primaryVideo && videoId && <PrimaryCard videoId={videoId} videoInfo={primaryVideo} />}
        
        {videos && 
        <ListVideoCard 
        videoId={videoId} 
        videos={videos} 
        setSingleVideoId={setSingleVideoId} 
        setPrimaryVideo={setPrimaryVideo}
        videoCardRef={videoCardRef} 
        />
        }
    </div>
    </Fragment>
  )
}

export default VideoExersiceHero