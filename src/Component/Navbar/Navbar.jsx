
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    {/* <div className='navbar_main_h'>
        <div className='navbar_container_h'>
            <div className='navbar_logo_h'>
                <p><span className='color_logo_h'>A</span>DDAX</p>
            </div>
            <ul className='navbar_list_h'>
                <li><Link to={'/'} className='navLink_active_h active'>Home</Link></li>
                <li><Link to={'/about'} className='navLink_active_h'>About</Link></li>
                <li><Link to={'/team'} className='navLink_active_h'>Team</Link></li>
                <li><Link to={'/services'} className='navLink_active_h'>Services</Link></li>
                <li><Link to={'/work'} className='navLink_active_h'>Work</Link></li>
                <li><Link to={'/price'} className='navLink_active_h'>Price</Link></li>
                <li><Link to={'/blog'} className='navLink_active_h'>Blog</Link></li>
                <li><Link to={'/contact'} className='navLink_active_h'>Contact</Link></li>
            </ul>
        </div>
    </div> */}
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow">
  <div className="container ">
    <a className="navbar-brand" href="#"><p><span className='color_logo_h'>A</span>DDAX</p></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-lg-0">
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">About</Link>
        </li> 
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">Team</Link>
        </li> 
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">Services</Link>
        </li> 
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">Work</Link>
        </li> 
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">Price</Link>
        </li> 
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">Blog</Link>
        </li> 
        <li className="nav-item pe-3">
          <Link className="nav-link navLink_active_h" href="#">Contact</Link>
        </li> 
       </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar