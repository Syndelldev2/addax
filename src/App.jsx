import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import About from './Component/Pages/About/About'
import Team from './Component/Pages/Team/Team'
import Services from './Component/Pages/Services/Services'
import Work from './Component/Pages/Work/Work'
import Price from './Component/Pages/Price/Price'
import Blog from './Component/Pages/Blog/Blog'
import Contact from './Component/Pages/Contact/Contact'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Footer from './Component/Footer/Footer'
function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/price' element={<Price/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
