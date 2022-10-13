import { useState } from "react"
import "./TargetMuscleList.scss"
import {ReactComponent as ArrowDown} from '../../assets/arraow-down.svg'

const TargetMuscleList = ({targetMuscles,targetMuscle,setTargetMuscle}) => {

    const [isOpenList,setIsOpenList] = useState(false)

    const handleMuscle = (e) => {
      setIsOpenList(false)
      setTargetMuscle(e.target.textContent)
    }

  return (
    <div className="target-muscle-list">
        <button className="target-muscle-list--btn" onClick={() => setIsOpenList(!isOpenList)}>Selected Muscle <ArrowDown /></button>
        <div className={`muscles-list ${isOpenList && 'show'}`}>{targetMuscles && targetMuscles.map(target => 
        <p 
        className={`${target === targetMuscle ? 'active' : ''}`} 
        key={target} onClick={handleMuscle}
        >{target}</p>)}</div>
    </div>
  )
}

export default TargetMuscleList