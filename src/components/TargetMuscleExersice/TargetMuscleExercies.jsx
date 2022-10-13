import "./TargetMuscleExercies.scss"
import CardExersice from "../CardExersice/CardExersice"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const TargetMuscleExercies = ({Exersices}) => {
  return (
    <div className="slides-container">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {Exersices && Exersices.map((exersice,index) => index < 20 && <SwiperSlide key={exersice.id}><CardExersice  {...exersice} /></SwiperSlide>
        )
        }
      </Swiper>

    </div>
  )
}

export default TargetMuscleExercies