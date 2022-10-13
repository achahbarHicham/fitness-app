import "./Home.scss"
import BodyParts from "../components/BodyParts/BodyParts"
import VideoExersice from "../components/VideoExercise/VideoExersice"
import TargetMuscle from "../components/TargetMuscle/TargetMuscle"
import FindExercise from "../components/FindExercise/FindExercise"
import { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
        <BodyParts />
        <VideoExersice />
        <TargetMuscle />
        <FindExercise />
    </Fragment>
  )
}

export default Home