import { faGitAlt, faJsSquare, faLinux, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Cube.css'

const Cube = () => {
  return (
    <div style={{margin: "auto"}}>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faPython} />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faNode} />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faLinux} />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} />
          </div>
      </div>
    </div>
  )
}

export default Cube