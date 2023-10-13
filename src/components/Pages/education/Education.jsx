import React, { useContext } from "react";
import { MdLanguage } from "react-icons/md";
import { FiCoffee, FiStar } from "react-icons/fi";
import { BsXDiamondFill } from 'react-icons/bs';
import { MdOutlineOndemandVideo } from 'react-icons/md'

import logo_1 from '../../Svg/Frame 2.png';
import logo_2 from '../../Svg/Frame night.png';
 
import { Container } from "react-bootstrap";
import Context from '../../App/context/Control.jsx';
import Slider from './Slider.jsx';
const Education = () => {
    const { day, Language } = useContext(Context)
    return (
        <>
            <section className="education">
                <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}`}>
                    <span className={`education_spanes ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_1}</span>&nbsp;{Language.educationTitle_2}
                </h2>
                <Container>
                    <div className="education_top">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <BsXDiamondFill className={`education_skills_icon ${day ? "oranges-plus" : "oranges"}`} />
                            </div>
                            <h2 className={`education_title ${day ? "loader" : "loaderPlus"}`}>{Language.educationTitle_3}</h2>
                        </div>
                        <p className={`education_text ${day ? "loader border-plus" : "loaderPlus border"}`}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla itaque dolorum rerum nihil incidunt facilis veniam necessitatibus, aliquam, recusandae quam accusantium impedit tenetur cupiditate. Possimus tenetur neque animi cumque commodi autem non voluptatum laboriosam harum unde, dolorum fugit fugiat quos, qui voluptates ipsum dicta ratione? Recusandae eveniet tempore iure hic at voluptatibus velit quisquam aliquid aspernatur cupiditate, distinctio autem asperiores animi facilis quibusdam id neque optio itaque cumque placeat officia. Assumenda eos quibusdam dignissimos quasi et? Non quis repudiandae praesentium molestias aut consequatur. Quod quidem numquam quia? Quo nulla quaerat repudiandae rerum, dicta nisi. Labore commodi tempore at maiores ea.
                        </p>
                    </div>
                    <div className="education_skills">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <FiCoffee className={`education_skills_icon ${day ? "oranges-plus" : "oranges"}`}  />
                            </div>
                            <h2 className={`education_title ${day ? "loader" : "loaderPlus"}`}>{Language.educationTitle_4}</h2>
                        </div>
                        <div className="education_skills_text_pp">
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>
                                    {Language.educationTitle_5}
                                </h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>html/pug</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_6}</h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>
                                    bootstrap/react-bootstrap/vue-bootstrap/tailwind
                                </p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_7}</h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>css/scss/less</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_8}</h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>javaScript/typeScript</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_9}</h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>react.js/vue.js</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_10}</h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>npm/yarn</p>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>{Language.educationTitle_11}</h4>
                                <p className={`education_skills_text ${day ? "loader" : "loaderPlus"}`}>
                                    github/git/netlife/vs-code
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="education_lang">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <MdLanguage className={`education_skills_icon ${day ? "oranges-plus" : "oranges"}`}  />
                            </div>
                            <h2 className={`education_title ${day ? "loader" : "loaderPlus"}`}>{Language.educationTitle_14}</h2>
                        </div>
                        <div className="education_language">
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>
                                    Uzbek<span className={`education_basic_span  ${day ? "loader" : "loaderPlus"}`}>({Language.educationTitle_12})</span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_1 ${day ? "swipperLoaderPlus" : "swipperLoader"}`}></div>
                                </div>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>
                                    Kazakh<span className={`education_basic_span  ${day ? "loader" : "loaderPlus"}`}>({Language.educationTitle_12})</span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_2 ${day ? "swipperLoaderPlus" : "swipperLoader"}`}></div>
                                </div>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>
                                    english<span className={`education_basic_span  ${day ? "loader" : "loaderPlus"}`}>({Language.educationTitle_15})</span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_3 ${day ? "swipperLoaderPlus" : "swipperLoader"}`}></div>
                                </div>
                            </div>
                            <div className="education_front">
                                <h4 className={`education_skills_title ${day ? "oranges-plus" : "oranges"}`}>
                                    russian<span className={`education_basic_span  ${day ? "loader" : "loaderPlus"}`}>({Language.educationTitle_15})</span>
                                </h4>
                                <div className="education_range">
                                    <div className={` education_range_bacic cvg_4 ${day ? "swipperLoaderPlus" : "swipperLoader"}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education_certificate">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <FiStar className={`education_skills_icon ${day ? "oranges-plus" : "oranges"}`}  />
                            </div>
                            <h2 className={`education_title ${day ? "loader" : "loaderPlus"}`}>{Language.educationTitle_13}</h2>
                        </div>
                        <div className="education_logo_pages_bg">
                            <img src={`${day ? logo_2 : logo_1}`} className={`education_certificate_logo ${day ? "border-plus" : "border"} `} alt="" />
                            <img src={`${day ? logo_2 : logo_1}`} className={`education_certificate_logo ${day ? "border-plus" : "border"} `} alt="" />
                        </div>
                    </div>
                    <div className="education_videos">
                        <div className="education_title_gpa">
                            <div className="education_tt">
                                <MdOutlineOndemandVideo className={`education_skills_icon ${day ? "oranges-plus" : "oranges"}`}  />
                            </div>
                            <h2 className={`education_title ${day ? "loader" : "loaderPlus"}`}>{Language.educationTitle_16}</h2>
                        </div>
                        <Slider/>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Education;
