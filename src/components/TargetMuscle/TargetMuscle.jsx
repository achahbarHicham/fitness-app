import { useContext } from "react"
import "./TargetMuscle.scss"
import {MuscleContext} from '../context/MuscleContext'
import TargetMuscleList from "../TargetMuscleList/TargetMuscleList"
import TargetMuscleExercies from "../TargetMuscleExersice/TargetMuscleExercies"

const TargetMuscle = () => {

    const {targetMusclesList,setTargetMuscle,targetMuscle,tagerMusclesExersices} = useContext(MuscleContext)

    
  return (
    <div className="target-muscle-container">
        <div className="container">
          <h2 className="target-muscle-container--title title-up">Select Target Muscle</h2>
            <div className="target-muscles">
                <TargetMuscleList 
                targetMuscles={targetMusclesList} 
                setTargetMuscle={setTargetMuscle} 
                targetMuscle={targetMuscle}
                />
                <TargetMuscleExercies Exersices={tagerMusclesExersices} />
            </div>
        </div>
    </div>
  )
}

export default TargetMuscle