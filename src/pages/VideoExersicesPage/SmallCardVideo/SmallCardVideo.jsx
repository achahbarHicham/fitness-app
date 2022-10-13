import "./SmallCardVideo.scss"

const SmallCardVideo = ({video,setSingleVideoId,videoCardRef,setPrimaryVideo}) => {
    const videoThambnail = video.snippet.thumbnails.medium.url
    const videoTitle = video.snippet.title
    const videoId = video.id.videoId


    const handlePrimaryVideo = () => {
        setSingleVideoId(() => videoId)

        setPrimaryVideo(video)

      if(window.matchMedia("(max-width: 992px)").matches){
        videoCardRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }

      
    }


  return (
    <div className="small-card">
        <img src={videoThambnail} alt={videoTitle}  />
        <div className="video-description">
            <h5 onClick={handlePrimaryVideo}>{videoTitle}</h5>
        </div>
    </div>
  )
}

export default SmallCardVideo