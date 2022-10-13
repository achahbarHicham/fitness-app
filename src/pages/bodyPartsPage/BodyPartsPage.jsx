import { Outlet,useOutlet } from "react-router-dom"
import { Fragment,useContext } from "react"
import BodyPartsHero from "./bodyPartsHero/BodyPartsHero"
import {BodyPartsContext} from '../../components/context/BodypartsContext'
import BodyPartsExercises from "./BodyPartsExercises/BodyPartsExercises"



const BodyPartsPage = () => {
  const {bodyPartsList,bodyPart,setBodyPart,bodyPartsExercises} = useContext(BodyPartsContext)


  const outlet = useOutlet()


  if(!outlet){
    return (
      <Fragment> 
        <BodyPartsHero 
        bodyPartsList={bodyPartsList} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
        />
        <BodyPartsExercises bodypart={bodyPart} bodyPartsExercises={bodyPartsExercises} />
      </Fragment>
    )
  }else{
    return <Outlet />
  }

  
}

export default BodyPartsPage