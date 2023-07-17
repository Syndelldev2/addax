import axios from "axios";
import "./who.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegLightbulb } from 'react-icons/fa';
const Who = () => {
    const [whoCard,setWhoCard]=useState([])

    let cardApi=async()=>{
        let carddata= await axios.get("http://localhost:8000/whocards")
        const getdata=await await carddata.data
        setWhoCard(getdata)
    }
    useEffect(()=>{
        cardApi()
    },[])
  return (
    <>
      <div className="container who_container_h">
        <div className="row who_row_h">
          <div className="col-lg-12 who_col_h">
            <div className="whoweare_main_div">
              <div className="who_lines_div_h">
                <div className="who_lineOne_h"></div>
                <div className="who_lineTwo_h"></div>
              </div>
              <div className="who_line_para_h">
                <h1>Who We <span>Are</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum molestiae culpa suscipit temporibus! Inventore architecto nisi tempora officiis earum similique!</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="row who_card_div_h">
            {
                whoCard.map((e)=>{
                    return(
                        <>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className=" who_card">
                            <div className="who_icon_h"><FaRegLightbulb/></div>
                            <div className="who_number_icon_h">{e.id}</div>
                            <div className="who_card_title">{e.title}</div>
                            <div className="who_card_body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Sit praesentium animi suscipit ab non esse unde facilis atque consequatur beatae?</div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
          </div>
     
      </div>
    </>
  );
};

export default Who;
