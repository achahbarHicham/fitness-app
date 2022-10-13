import "./RelatedExercise.scss";
import ExCard from "../../../components/ExCard/ExCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const RelatedExercise = ({bodyPartsExercises}) => {

    bodyPartsExercises = bodyPartsExercises.slice(0,20)

  return (
    <div className="related">
        <h2 className="title-up">Related Exersice</h2>
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
            className="mySwiper"
          >
          {bodyPartsExercises && bodyPartsExercises.map(bodyPartName => 
          <SwiperSlide key={bodyPartName.id}>
            <ExCard {...bodyPartName} />
          </SwiperSlide>
          )}
          </Swiper>
    </div>
  )
}

export default RelatedExercise