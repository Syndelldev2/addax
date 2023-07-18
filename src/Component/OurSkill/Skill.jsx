import './skill.css'
import skill_img from '../../assets/images/skill_img.jpg'
const Skill = () => {
  return (
    <>
    <div className="container skill_container_h">
        <div className="row skill_row_h">
        <div className="col-lg-6 skill_col_h">
            <div className="skill_div_h">
                <h1>Some Of Our <span>Skills</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Doloremque temporibus similique eos, odit maxime nemo dolorem ipsam dignissimos saepe molestiae.</p>
            </div>
            <div className="skill_meter_h">
                <div className="meter_one_h">
                    <div className="progress_title">Branding</div>
                    <div className="progress" style={{ height: "10px" }}>
  <div className="progress-bar" role="progressbar" style={{width: "92%", backgroundColor: "#ff2c57" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">92%</div>
</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 skill_col_h">
            <div className="skill_img_h">
                <img src={skill_img} alt="skill_img"/>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Skill