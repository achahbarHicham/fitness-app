import "./BodyPartsExercises.scss";
import AllExersices from "../../../components/AllExersices/AllExersices";


const BodyPartsExercises = ({bodypart,bodyPartsExercises}) => {
  return (
    <div className="container bodyparts-exersices-section">
        <h2 className="title-up exersice-title">{bodypart} Exercises</h2>
        <AllExersices data={bodyPartsExercises} />
    </div>
  )
}

export default BodyPartsExercises