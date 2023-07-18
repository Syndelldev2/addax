import about_marketing from "../../assets/images/about_marketing_img.jpg";
import play_btn from "../../assets/icons/play_btn.png";
// import about_strategy from "../../assets/images/about_strategy.jpg";
import check_icon from "../../assets/icons/check.svg";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="container about_container_h">
        <div className="about_back_img">
          <div className="row about_row_h">
            <div className="col-lg-12 about_col12_h">
              <div className="animated_line_about_h">
                <p className="lineOne_h"></p>
                <p className="lineTwo_h"></p>
              </div>
              <div className="about_para_h">
                <h1>
                  About <span>Addax</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  iste amet sunt consectetur quisquam aliquam at atque molestias
                  porro velit
                </p>
              </div>
            </div>
          </div>
          <div className="row about_body_h">
            <div className="col-lg-5 about_description_h">
              <div className="marketing_branding_h">
                <h4>
                  We Are Digital <span>Marketing & Branding</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  porro cum quidem Illo, voluptas distinctio sapiente labore
                  quidem ratione voluptate!
                </p>
              </div>
              <div className="tick_mark_h">
                <div className="tick_sectionOne_h">
                  <p className="check_para">
                    <img
                      src={check_icon}
                      alt="check_icon"
                      className="tick_mark_icon"
                    />{" "}
                    Creative Design
                  </p>
                  <p className="check_para">
                    <img
                      src={check_icon}
                      alt="check_icon"
                      className="tick_mark_icon"
                    />{" "}
                    Retina Ready
                  </p>
                  <p className="check_para">
                    <img
                      src={check_icon}
                      alt="check_icon"
                      className="tick_mark_icon"
                    />{" "}
                    Responsive Design
                  </p>
                </div>
                <div className="tick_sectionTwo_h">
                  <p className="check_para">
                    <img
                      src={check_icon}
                      alt="check_icon"
                      className="tick_mark_icon"
                    />{" "}
                    Modern Design
                  </p>
                  <p className="check_para">
                    <img
                      src={check_icon}
                      alt="check_icon"
                      className="tick_mark_icon"
                    />{" "}
                    Awesome Ready
                  </p>
                  <p className="check_para">
                    <img
                      src={check_icon}
                      alt="check_icon"
                      className="tick_mark_icon"
                    />{" "}
                    Digital Marketing & Branding
                  </p>
                </div>
              </div>
              <div className="readmore_btn_h">
                <button>Read More</button>
              </div>
            </div>
            <div className="col-lg-5 about_video_h">
              <img
                src={about_marketing}
                alt="about_marketing"
                className="about_marketing"
              />

              <img src={play_btn} alt="play_btn" className="play_btn" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about_strategy_container_fluid">
        <div className="row about_strategy">
          <div className="col-lg-5 col-md-5 about_strategy_img_h">
          </div>
          <div className="col-lg-5 col-md-6 about_strategy_desc_h">
            <div className="strategy_desc_div_h">
              <h4>Highly Creative Solutions</h4>
              <h1>About <span>Startegy</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                veniam ducimus consequuntur nostrum possimus qui velit.
                Necessitatibus pariatur dignissimos et!
              </p>
              <div className="strategy_desc_check_h">
                <p className="check_para">
                  <img
                    src={check_icon}
                    alt="check_icon"
                    className="strategy_desc_icon"
                  />{" "}
                  Creative Design
                </p>
                <p className="check_para">
                  <img
                    src={check_icon}
                    alt="check_icon"
                    className="strategy_desc_icon"
                  />{" "}
                  Retina Ready
                </p>
                <p className="check_para">
                  <img
                    src={check_icon}
                    alt="check_icon"
                    className="strategy_desc_icon"
                  />{" "}
                  Responsive Design
                </p>
                <p className="check_para">
                  <img
                    src={check_icon}
                    alt="check_icon"
                    className="strategy_desc_icon"
                  />{" "}
                  Modern Design
                </p>
                <p className="check_para">
                  <img
                    src={check_icon}
                    alt="check_icon"
                    className="strategy_desc_icon"
                  />{" "}
                  Awesome Ready
                </p>
                <p className="check_para">
                  <img
                    src={check_icon}
                    alt="check_icon"
                    className="strategy_desc_icon"
                  />{" "}
                  Digital Marketing & Branding
                </p>
              </div>
              <div className="about_strategy_btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
