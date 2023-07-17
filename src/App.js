
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import '../node_modules/bootstrap//dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import About from './Pages/About/About'
import Team from './Pages/Team/Team'
import Services from './Pages/Services/Services'
import Work from './Pages/Work/Work'
import Price from './Pages/Price/Price'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
        <Route path='/price' element={<Price />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
