import { useEffect, useState } from 'react'
import './welcome.css'
import axios from 'axios'
// import { HiPencilAlt } from 'react-icons/hi';
import { FaLaptop } from 'react-icons/fa';
const Welcome = () => {
const [cardData,setCardData]=useState([])

    let cardapi=async()=>{
       let url = await axios.get("http://localhost:8000/wlecome-card")
       const card = await url.data;
       setCardData(card)
    }
    
    useEffect(()=>{
        cardapi()
        console.log("card data",cardData)
    },[])
  return (
    <>
   <div className="container welcome_container_h">
   <div className="welcome_main_h row">
    <div className=" col-lg-12">
        <div className="welcome_heading_div_h">
        <div className="welcome_heading_h">
            <div className="line_anime_h">
                <p className='welcome_line_h_one'></p>
                <p className='welcome_line_h_second'></p>
            </div>
            <div className="welcome_para_section_h">
                <h4 className='welcome_creatve_h'>we are creative</h4>
                <h1 className='welcome_h1_h'>Welcome to <span className='welcome_addax_text_h'>Addax</span></h1>
                <p className='welcome_dummy_h'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam ut tempora laborum aliquid necessitatibus earum asperiores hic quas excepturi?</p>
            </div>
        </div>
        </div>
    <div className="welcome_card_section_h">
        <div className="card_card">
        {cardData.map((e)=>{
            return(
                <>
            <div className="welcome_card_div shadow">
                <div className='card_icon_h'>{<FaLaptop/>}</div>
            <div className="card_title">{e.title}</div>
            <div className="card_body">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio ipsa dolore, pariatur dolores magni consequatur culpa similique explicabo ex."}</div>
        </div>    
                </>
            )
        })
            
        }
        </div>
    </div>
    </div>
   </div>
   </div>
    </>
  )
}

export default Welcome