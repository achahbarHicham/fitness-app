import { useEffect,useState } from "react"
import { EquipmentList } from "../../equipmentList"
import {ReactComponent as ArrowDown} from '../../assets/arraow-down.svg'
import AllExersices from "../../components/AllExersices/AllExersices"
import "./Equipment.scss"



const Equipment = () => {

    const DATA = localStorage.getItem('exersices') && JSON.parse(localStorage.getItem('exersices'))

    const [equipment,setEquipment] = useState('all')
    const [filteredEquipment,setFilteredEquipment] = useState(DATA)


    useEffect(() => {

        const getFilteredEquipment = () => {
            if(equipment === 'all'){
                setFilteredEquipment(DATA)
                
            }else{
                const filteredEquipmentByName = DATA.filter(d => d.equipment.includes(equipment))
                setFilteredEquipment(filteredEquipmentByName)
            }
        }

        getFilteredEquipment()

    },[equipment])

    const handleEquipment = (e) => {
        setEquipment(e.target.value)
    }




  return (
    <div className='container equipment'>
        <div className="equipment--header">
            <h2>Find Exercise By Equipment</h2>
            <div className="select">
                <select onChange={handleEquipment} value={equipment}>
                    <option value="all">All</option>
                    {EquipmentList.map(equipment => <option 
                    key={equipment.name}
                    value={equipment.name}
                    >{equipment.name}</option>)}
                </select>
                <div className="icon">
                    <ArrowDown />
                </div>
            </div>
        </div>
        {filteredEquipment && <AllExersices data={filteredEquipment} />}
    </div>
  )
}

export default Equipment