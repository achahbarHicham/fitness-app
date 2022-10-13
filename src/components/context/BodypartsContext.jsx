import axios from "axios";
import { createContext,useEffect,useState } from "react";
import { headers } from "../../headerApi";

export const BodyPartsContext = createContext({
    bodyParts:[],
    bodyPartsList:[],
    videos:[],
    bodyPart:'',
    setBodyPart:() => null,
    bodyPartsExercises:[],
    signleVideoId:'',
    setSingleVideoId:() => {},
    primaryVideo:{},
    setPrimaryVideo:() => {}
})

export const BodyPartsProvider = ({children}) => {

    const [videos,setVideos] = useState([])
    const [bodyPartsList,setBodyPartsList] = useState([])
    const [bodyPart,setBodyPart] = useState('back')
    const [bodyPartsExercises,setBodyPartsExercises] = useState([])
    const [signleVideoId,setSingleVideoId] = useState('')
    const [primaryVideo,setPrimaryVideo] = useState(null)




    useEffect(() => {

        const termInLocalStorage = 'bodyPartsExersiceList'

        
        const getBodyPartsListData = async () => {


        if(localStorage.getItem(termInLocalStorage)){
            setBodyPartsList(JSON.parse(localStorage.getItem(termInLocalStorage)))
        }else{ 
            const data = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',{
                headers
            })
            localStorage.setItem(termInLocalStorage, JSON.stringify(data.data));
            setBodyPartsList(data.data)
        }}

        getBodyPartsListData()
    },[])


    useEffect(() => {

        const getVideos = async () => {
        const data = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                part:'snippet',
                q:`fitness ${bodyPart}`,
                order:'viewCount',
                maxResults:9,
                videoDefinition:'high',
                safeSearch:'moderate',
                type:'video',
                key:process.env.REACT_APP_YOUTUBE_API_KEY
            }
        })

        setPrimaryVideo(data.data.items[0])
        setSingleVideoId(data.data.items[0].id.videoId)
        setVideos(data.data.items)

        }
        getVideos()
    },[bodyPart])


    useEffect(() => {

        const getBodyPartsExersices = async () => {
                const data = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,{
                    headers
                })
                setBodyPartsExercises(data.data)
            
        }

        getBodyPartsExersices()
    },[bodyPart])



    const value = {
        bodyPartsList,
        videos,
        bodyPart,
        setBodyPart,
        bodyPartsExercises,
        signleVideoId,
        setSingleVideoId,
        primaryVideo,
        setPrimaryVideo
    }

    return(
        <BodyPartsContext.Provider value={value}>{children}</BodyPartsContext.Provider>
    )
}

