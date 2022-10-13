import "./Button.scss"

const Button = ({text,className,icon,type}) => {
  return (
    <button 
    type={type && type}
     className={className}>{icon ? icon : null}{text}</button>
  )
}

export default Button