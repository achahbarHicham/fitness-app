import { useState,useEffect,useContext } from "react"
import "./SinglePageExercise.scss"
import { Link, useParams,useNavigate } from "react-router-dom"
import CardExersice from "../../components/CardExersice/CardExersice"
import { BodyPartsContext } from "../../components/context/BodypartsContext"
// import RelatedExercise from "../bodyPartsPage/RelatedExercise/RelatedExercise"
import RelatedExercise from "../../components/RelatedExercise/RelatedExercise"
import {ReactComponent as UndoIcon} from '../../assets/undo-icon.svg'
import { FindExerciseContext } from "../../components/context/FindExerciseContext"


const SinglePageExercise = () => {
  const {bodyPartsExercises} = useContext(BodyPartsContext)

  const Navigate = useNavigate()




  const {singleExersice} = useContext(FindExerciseContext)


  const handleBackClick = () => {
    Navigate('..')
  }

  return (
    <div className="container">
      <div className="back-body-parts">
        <span className="icon" onClick={handleBackClick}><UndoIcon /></span>
      </div>
      <div className="single-ex-card">
        {singleExersice.length ? <CardExersice {...singleExersice[0]} /> : Navigate('..') }
        
        <RelatedExercise bodyPartsExercises={bodyPartsExercises} />
      </div>
      
    </div>
  )
}

export default SinglePageExercise