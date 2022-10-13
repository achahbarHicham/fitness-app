import {useContext,useEffect} from 'react'
import { BodyPartsContext } from '../../components/context/BodypartsContext'
import VideoExersiceHero from './VideoExersiceHero/VideoExersiceHero'
import RelatedExercise from '../../components/RelatedExercise/RelatedExercise'

const VideoExersicesPage = () => {

    const {
      signleVideoId,
      videos,
      primaryVideo,
      setPrimaryVideo,
      bodyPart,
      setSingleVideoId,
      bodyPartsList,
      setBodyPart,
      bodyPartsExercises
    } = useContext(BodyPartsContext)


    

  return (
    <div className='container videos-hero'>
        {/* <h2>{bodyPart} Bodypart Videos</h2> */}
         <VideoExersiceHero 
         videoId={signleVideoId} 
         videos={videos} 
         primaryVideo={primaryVideo} 
         setPrimaryVideo={setPrimaryVideo} 
         setSingleVideoId={setSingleVideoId}
         bodyPart={bodyPart}
         bodyPartsList={bodyPartsList}
         setBodyPart={setBodyPart}
         />
         <RelatedExercise bodyPartsExercises={bodyPartsExercises} />
    </div>
  )
}

export default VideoExersicesPage