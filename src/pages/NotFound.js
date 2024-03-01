import {FaExclamationTriangle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <FaExclamationTriangle />
        <h1>404</h1>
        <p>Sorry, this page does not exist.</p>
        <Link to='/'>Go Home</Link>
    </div>
  )
}
