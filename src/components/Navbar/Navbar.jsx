import { Fragment,useEffect,useState } from "react";
import "./Navbar.scss";
import { NavLink,Outlet,useLocation,Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo-puplish.svg'
import {ReactComponent as HumbergurMenu} from '../../assets/mobile-icon.svg'
import Hero from "../hero/Hero";
import AppHead from "../../AppHead";


const Navbar = () => {

  const Location = useLocation()
  const [isHome,setIsHome] = useState(true)
  const [isOpenNav,setIsOpenNav] = useState(false)


  document.addEventListener('scroll',() => setIsOpenNav(false))
  


  useEffect(() => {
    Location.pathname === "/" ? setIsHome(true) : setIsHome(false)
  },[Location])


  return (
    <Fragment>
    <header className={`${isHome && 'header'}`}>
      <div className="container navbar">
          <div className="logo">
              <Link to='/'>
                <Logo />
              </Link>
          </div>
          <nav className={`nav ${isOpenNav ? 'show' : 'hide'}`}>
              <ul className="list">

                <NavLink to='/' 
                onClick={() => setIsOpenNav(false)}
                 className={({ isActive }) =>
                isActive && isHome ? 'nav--link active' : 'nav--link'
              }>
              Home  
                </NavLink>
                 <NavLink to='/bodyparts'
                 onClick={() => setIsOpenNav(false)}
                  className={({ isActive }) =>
                isActive ? 'nav--link active' : 'nav--link'}>Body <span>Parts</span></NavLink> 
                 <NavLink to='/videoExersice'
                 onClick={() => setIsOpenNav(false)}
                  className={({ isActive }) =>
                isActive ? 'nav--link active' : 'nav--link'}>Videos <span>Exersice</span></NavLink> 
                 <NavLink to='/equipment' 
                 onClick={() => setIsOpenNav(false)}
                 className={({ isActive }) =>
                isActive ? 'nav--link active' : 'nav--link'}>Equipment</NavLink> 
              
              </ul>
          </nav>
          <div className="mobile-icon" onClick={() => setIsOpenNav(!isOpenNav)}>
            <HumbergurMenu />
          </div>
        </div>
        
           
        {isHome && <Hero />}
        
    </header> 
    <Outlet />
    </Fragment>

    
    
  )
}

export default Navbar