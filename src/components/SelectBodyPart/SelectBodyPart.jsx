import './SelectBodyPart.scss'
import { ReactComponent as ArrowDown } from "../../assets/arraow-down.svg"

const SelectBodyPart = ({bodyPartsList,setBodyPart,bodyPart}) => {
  return (
    <div className="select-body-part-video">
        <select onChange={(e) => setBodyPart(e.target.value)} value={bodyPart}>
            <option value='abs'>Abs</option>
            <option value='stretch'>Stretch</option>
            {bodyPartsList && bodyPartsList.map(bodypart => <option key={bodypart} value={bodypart.toLowerCase()}>{bodypart}</option>)}
        </select>
      <div className="icon-container">
      <ArrowDown />
      </div>
  </div>
  )
}

export default SelectBodyPart