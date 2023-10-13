import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { IoLogoInstagram } from 'react-icons/io';
import { SiNetlify } from 'react-icons/si';
import { ImGit } from 'react-icons/im'
import Context from '../../App/context/Control.jsx'
const Home = () => {
    const { day, Language } = useContext(Context)
    return (
        <>
            <section className="home">
                <Container >
                    <div className="home_top">
                        <div className="home_title_gpa">
                            <p className={`home_text ${day ? "loader" : "loaderPlus"}`}>{Language.homeTitle_1}</p>
                            <h2 className={`home_title ${day ? "oranges-plus" : "oranges"}`}>{Language.homeTitle_2}</h2>
                            <p className={`home_bg_text ${day ? "loader " : "loaderPlus"}`}>{Language.homeTitle_3}</p>
                            <div className="home_btn-gpa">
                                <Button className={`home_hire_btn ${day ? "swipperLoaderPlus" : "swipperLoader"}`}>
                                    {Language.homeTitle_4}
                                </Button>
                                <Button className='home_svg_btn'>
                                    {Language.homeTitle_5}
                                </Button>
                            </div>
                            <div className="home_icon_gr">
                                <div><BsGithub          className={`home_icons ${day ? "oranges-plus" : "oranges"}`} /></div>
                                <div><IoLogoInstagram   className={`home_icons ${day ? "oranges-plus" : "oranges"}`} /></div>
                                <div><SiNetlify         className={`home_icons ${day ? "oranges-plus" : "oranges"}`} /></div>
                                <div><ImGit             className={`home_icons ${day ? "oranges-plus" : "oranges"}`} /></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home