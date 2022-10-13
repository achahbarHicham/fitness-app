import "./BodyPartsHero.scss";
import {ReactComponent as ArrowDownIcon} from '../../../assets/arrow-down-icon.svg'
import BodyPartsHeroCard from "../bodyparts-card/BodyPartsHeroCard";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const BodyPartsHero = ({bodyPartsList,bodyPart,setBodyPart}) => {

    
  return (
    <div className='bodyparts-hero'>
        <div className="container bodyparts-hero--hero">
          <h3><span>Selected {bodyPart}</span></h3>
          <Swiper
           breakpoints={{
            // when window width is >= 640px
            576: {
              width: 576,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
              spaceBetween:30
            },
          }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
          {bodyPartsList && bodyPartsList.map(bodyPartName => 
          <SwiperSlide key={bodyPartName}>
            <BodyPartsHeroCard 
            bodyPartName={bodyPartName}
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}
            />
          </SwiperSlide>
          )}
          </Swiper>
          <div className="icon-down">
            <div className="icon">
            <ArrowDownIcon />
            </div>   
          </div>
        </div>
    </div>
  )
}

export default BodyPartsHero