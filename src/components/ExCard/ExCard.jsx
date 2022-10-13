import { useContext } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./ExCard.scss";
import {FindExerciseContext} from '../context/FindExerciseContext'

const ExCard = ({id,name,gifUrl}) => {

   const {setSingleId} = useContext(FindExerciseContext)

  const Navigate = useNavigate()
  const Location = useLocation()

  const handleClick = () => {
    setSingleId(id)

    let ToSinglePage = '' 
    // Location.pathname === '/bodyparts' ? 
    // `/bodyparts/singleExercise` :
    //  null

    // if(Location.pathname === '/bodyparts'){
    //   ToSinglePage = `/bodyparts/singleExercise`
    // }else if(){

    // }

    switch(Location.pathname){
      case '/bodyparts':
        ToSinglePage = "/bodyparts/singleExercise"
        break;
      case "/videoExersice":
        ToSinglePage = '../bodyparts/singleExercise'
        break;
      default:
        ToSinglePage = "/bodyparts/singleExercise"
    }

    
    

    Navigate(ToSinglePage)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  

    


  }

  return (
    <div className="ex-image"
        style={{backgroundImage:`url(${gifUrl})`}}
        onClick={handleClick}
    >
    </div>
  )
}

export default ExCard