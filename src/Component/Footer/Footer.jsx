import { useNavigate } from 'react-router-dom';
import './footer.css'
import { FaFacebook,FaTwitter,FaSkype,FaInstagram,FaLinkedinIn,FaRegCopyright } from 'react-icons/fa';
const Footer = () => {
    let navigate=useNavigate()
  return (
    <>
    <div className='footer_main_h'>
      <div className='footer_div_h'>
      <div className='footer_logo_h' ><p className='logo_text_h'  onClick={()=>navigate('/')}><span className='color_logo_h'>A</span>DDAX</p></div>
      <div className='footer_icons_h'>
        <div className='footer_logo_h'><p className='facebook_logo_h'><FaFacebook/></p></div>
        <div className='footer_logo_h'><p className='facebook_logo_h'><FaTwitter/></p></div>
        <div className='footer_logo_h'><p className='facebook_logo_h'><FaSkype/></p></div>
        <div className='footer_logo_h'><p className='facebook_logo_h'><FaInstagram/></p></div>
        <div className='footer_logo_h'><p className='facebook_logo_h'><FaLinkedinIn/></p></div>
      </div>
      <div className='footer_copyright_h'>
        <p className='copyright_h'>Copyright <span><FaRegCopyright/></span> 2019 All Rights Reserved.</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer