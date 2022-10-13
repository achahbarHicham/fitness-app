import "./ListVideosCard.scss"
import SmallCardVideo from "../SmallCardVideo/SmallCardVideo"
const ListVideoCard = ({videos,setPrimaryVideo,setSingleVideoId,videoId,videoCardRef}) => {



  const handlePrimaryVideo = (id,video) => {
    setPrimaryVideo(video)
    setSingleVideoId(id)
  }

  return (
    <div className='list-videos'>
      {videos && videos.map(video => {
        if(video.id.videoId !== videoId){
          return <SmallCardVideo 
          key={video.id.videoId}
          video={video}
          setPrimaryVideo={setPrimaryVideo}
          setSingleVideoId={setSingleVideoId}
          videoId={videoId}
          videoCardRef={videoCardRef} 
          />
        }})}
    </div>
  )
}

export default ListVideoCard