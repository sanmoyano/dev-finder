import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className='flex justify-between align-middle'>
      <h1 className='text-xl font-mono font-bold text-white'>Dev-Finder</h1>
      <FontAwesomeIcon fontSize='2rem' icon={faGithub} />
    </div>
  )
}

export default Header
