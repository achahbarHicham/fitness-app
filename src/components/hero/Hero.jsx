import './Hero.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as VideoIcon} from '../../assets/video.svg'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <main className='hero container'>
        <h1 className='hero--title'>let’s Exersice & get fit together</h1>
        <p className="hero--subtitle">We provide the best exersice and video exercises for each body part, you kind find every movement for each body part.</p>
        <div className="btns-container">
            <Link to='/bodyParts'>
              <Button className='btn btn-primary' text='Body Parts' />
            </Link>
            <Link to='/videoExersice'>
              <Button className='btn btn-secondary' text='Video Exercises' icon={<VideoIcon />} />
            </Link>
           
        </div>
    </main>
  )
}

export default Hero