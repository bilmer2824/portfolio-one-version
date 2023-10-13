import React, { useContext } from "react";

import logo from "../../Svg/portrait-attractive-man-1536x1024.png";
import Logo from '../../Svg/person-min.png'

import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Context from '../../App/context/Control.jsx'

const About = () => {
    const { ActiveClass, Letstate, day, Language } = useContext(Context)
    return (
        <>
            <section className="about">
                <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}  `} >
                    {Language.aboutTitle_1}
                </h2>
                <Container>
                    <div className="about_top">
                        <div className={`about_logo_page ${day ? "border-plus" : "border"}`}>
                            <img src={`${day ? Logo : logo}`} className="about_logo_img" alt="" />
                        </div>
                        <div className="about_title_gpa">
                            <h1 className={`about_bg_title ${day ? "oranges-plus" : "oranges"}`}>
                                {Language.aboutTitle_2}
                                <span className={`about_lesson ${day ? "swipperLoaderPlus" : "swipperLoader"}`} />
                            </h1>
                            <ul className="about_list">
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`} >{Language.aboutTitle_3}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>{Language.aboutTitle_4}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`}>{Language.aboutTitle_5}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>{Language.aboutTitle_7}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`}>{Language.aboutTitle_6}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>{Language.aboutTitle_8}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`}>{Language.aboutTitle_9}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>+998 (95) 019 28 24</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`}>{Language.aboutTitle_10}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>18 {Language.aboutTitle_11}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`}>{Language.aboutTitle_12}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>{Language.aboutTitle_13}</span>
                                </li>
                                <li className="about_item">
                                    <p className={`about_item_p ${day ? "loader" : "loaderPlus"}`}>{Language.aboutTitle_14}:</p>
                                    <span className={`about_item_span ${day ? "oranges-plus" : "oranges"}`}>sabitislamov2004@gmail.com</span>
                                </li>
                            </ul>
                            <div className="about_link_ss">
                                <Button className={`about_button ${day ? "swipperLoaderPlus" : "swipperLoader"}`}>
                                    <AiOutlineDownload className="about_btn_icon" />
                                    {Language.aboutTitle_15}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="aboutUsing">
                <Container>
                    <Button
                        className={`aboutUsing_button ${Letstate && "active"} ${day ? "border-plus" : "border"}`}
                        onClick={ActiveClass}
                    >
                        <h4 className={`about_mire_link ${day ? "oranges-plus" : "oranges"}`}>
                            {Language.aboutTitle_16}
                            <HiOutlineArrowCircleRight className="aboutUsing_icon" />
                        </h4>
                        <p className={`aboutUsing_text ${day ? "loader" : "loaderPlus"}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            asperiores doloremque soluta? Aliquam sint nostrum laboriosam quis
                            distinctio, ullam illo recusandae quisquam consectetur sit odio.
                            Qui doloribus odio minima dignissimos! Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Illum, quam quibusdam. Aliquid
                            dolores tenetur ipsa. Amet eveniet velit ducimus molestias eius,
                            deserunt adipisci recusandae atque sint dolorum ratione sit
                            commodi.
                        </p>
                    </Button>
                </Container>
            </section>
        </>
    );
};

export default About;
