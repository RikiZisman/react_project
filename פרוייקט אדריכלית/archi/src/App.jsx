
import './App.css'

import { About } from './home/about';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext} from './context/usercontext'

function App() {

  const user=useContext(UserContext)
  console.log(user[0])

  return (
    <>
      <header>
        <About />
        <h1>Hello To-{user[0]}</h1>
      </header>


      <nav>
        <ul>
        <li>
        <Link to={'userpage'}> Log in to the site</Link>
          </li>
          <li>
        <Link to={'sighnUp'}> Register on the site</Link>
          </li>
          <li>
            <Link to={'serivces'}>serivces</Link>
          </li>
          <li>
            <Link to={'/meetingInfo'}>Appointment</Link>
          </li>
          {/* <li>
            <Link to={''}>Admin interface</Link>
          </li> */}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
      <div class="profile-container">
  <span class="profile-text">TRL ARCHITECTURE</span>
</div>
    </>
  )


}

export default App
