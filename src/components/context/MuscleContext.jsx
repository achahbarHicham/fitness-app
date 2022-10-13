import axios from "axios";
import { headers } from "../../headerApi";
import { createContext,useState,useEffect } from "react";


export const MuscleContext = createContext({
    targetMusclesList:[],
    targetMuscle:'',
    setTargetMuscle:() => null,
    tagerMusclesExersices:[]
})


export const MuscleProvider = ({children}) => {

    const [targetMusclesList,setTargetMusclesList] = useState([])
    const [tagerMusclesExersices,setTargetMusclesExercies] = useState([])
    const [targetMuscle,setTargetMuscle] = useState('abs')


    // get target list
    useEffect(() => {
      const getTargetMuscles = async () => {
        const data = await axios.get('https://exercisedb.p.rapidapi.com/exercises/targetList',{
            headers
        })
        setTargetMusclesList(data.data)
      }  

        getTargetMuscles()
    },[])

    // get Target Exersices
    useEffect(() => {
        const getTargetExercies = async () => {
            const data = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/target/${targetMuscle}`,{
                headers
            })
            setTargetMusclesExercies(data.data)
        }

        getTargetExercies()
    },[targetMuscle])


    const value = {
        targetMusclesList,
        targetMuscle,
        setTargetMuscle,
        tagerMusclesExersices
    }


    return (
        <MuscleContext.Provider value={value}>{children}</MuscleContext.Provider>
    )
}

