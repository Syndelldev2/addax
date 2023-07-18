import Welcome from '../Welcome/Welcome'
import About from '../../Pages/About/About'
import Who from '../Whoweare/Who'
import Business from '../GetBusiness/Business'
import './home.css'
import Skill from '../OurSkill/Skill'
const Home = () => {
    return (
        <>
            <div className="container_home">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header">
                            <div className="back_img_h">
                                <div className='background_article_h'>
                                    <h4 className='article_title_h'>We Are Creative</h4>
                                    <h1 className='article_heading_h'> The Best <span className='color_text_h'>Digital</span> Experiance </h1>
                                    <p className='article_para_h'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex non exercitationem dolor maiores fugiat? Eveniet cupiditate deleniti sed nam!</p>
                                    <div className='initial_btns_h'>
                                        <button className='started_btn'>Get Started</button>
                                        <button className='view_btn'>View Work</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='home_body_h'>
                            <Welcome />
                            <About />
                            <Who />
                            <Business />
                            <Skill/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
