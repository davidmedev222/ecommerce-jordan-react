import { Link } from 'react-router-dom' // COMPONENT ROUTER DOM

const ButtonLink = ({ to, onClick, className, children }) => {
  return (
    <Link to={to} onClick={onClick} className={`btn ${className ?? ''}`}>
      {children}
    </Link>
  )
}

export { ButtonLink }
