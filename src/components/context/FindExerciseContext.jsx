import { createContext,useEffect,useState } from "react";
import { headers } from "../../headerApi";
import axios from "axios";


export const FindExerciseContext = createContext({
    allExercisesData : [],
    singleExersice:{},
    singleId:0,
    setSingleId:() => {}
})


export const FindExercisePrivider = ({children}) => {

    const [allExercisesData,setAllExersicesData] = useState([])
    const [singleExersice,setSingleExercise] = useState({})
    const [singleId,setSingleId] = useState(0)

    useEffect(() => {

        const getAllExercises = async () => {

            if(!localStorage.getItem('exersices')){

                const data = await axios.get('https://exercisedb.p.rapidapi.com/exercises',{
                    headers
                })
                localStorage.setItem('exersices', JSON.stringify(data.data));

                setAllExersicesData(data.data)

            }else{

                const exes = JSON.parse(localStorage.getItem('exersices'))

                setAllExersicesData(exes)

            }

           
        }

        getAllExercises()

    },[])
    


    useEffect(() => {

        const mainExercise = allExercisesData.filter(ex => ex.id == singleId)
        setSingleExercise(mainExercise)

    },[singleId])


    const value = {
        allExercisesData,
        singleExersice,
        setSingleId,
        setAllExersicesData
    }

    return (
        <FindExerciseContext.Provider value={value}>{children}</FindExerciseContext.Provider>
    )
}

