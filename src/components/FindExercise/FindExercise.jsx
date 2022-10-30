import { useContext,useState,useRef,useEffect,useMemo } from 'react'
import debounce from 'lodash.debounce';
import Button from '../Button/Button'
import { FindExerciseContext } from '../context/FindExerciseContext'
import "./FindExercise.scss"
import AllExersices from '../AllExersices/AllExersices'




const FindExercise = () => {

  const {allExercisesData,setAllExersicesData} = useContext(FindExerciseContext)
  const [inputText,setInputText] = useState('')
  const [exercise,setExersice] = useState('');

  const inputRef = useRef()

  const DATA = localStorage.getItem('exersices') && JSON.parse(localStorage.getItem('exersices'))

  useEffect(() => {

    if(inputRef.current.value === ''){
      setAllExersicesData(DATA)
    }

  },[exercise])




  const findExersice = () => {

    setExersice(inputRef.current.value)

      const filterdExersice = DATA.filter(ex => 
        ex.bodyPart.includes(inputRef.current.value.toLowerCase()) || 
        ex.name.includes(inputRef.current.value.toLowerCase()) ||
        ex.target.includes(inputRef.current.value.toLowerCase())
        )
    setAllExersicesData(filterdExersice)

  }


  const debouncedChangeHandler = useMemo(
    () => debounce(findExersice, 300)
  , []);


  return (
    <div className='find-exercise'>
        <div className="container">
            <h2 className='title-up'>Find Exersice</h2>
            <div className="form-group">
              <label htmlFor="input-text">Search</label>
                <input
                type="text" 
                className="form-group--input-text"
                id='input-text'
                placeholder='Search For Exercise'
                onChange={debouncedChangeHandler}
                ref={inputRef}
                 />

        {
         <div className="resutl">Exersices : <strong>{allExercisesData ? allExercisesData.length : 0}</strong></div> 
        }
            </div>

          <div className="find-exercies-container"> 
          {allExercisesData ? <AllExersices data={allExercisesData} /> : <h2>Please Try Again</h2>}    
          </div>
        </div>
    </div>
  )
}

export default FindExercise