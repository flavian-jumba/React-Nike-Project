import {headerLogo} from '../assets/images'
 import {hamberger} from '../assets/icons'
function Nav() {
  return (
   <header>
    <nav>
        <a href="#">
            <img src= {headerLogo} alt="" />
            This is A header
        </a>
    </nav>
   </header>
  )
}

export default Nav