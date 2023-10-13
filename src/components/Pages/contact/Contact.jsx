import React, {useContext} from 'react'
import { Container, Button } from 'react-bootstrap';
import { AiOutlineInstagram, AiFillMobile, AiFillFacebook, AiOutlineWhatsApp, AiFillYoutube, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { SiNetlify, SiGmail } from 'react-icons/si';
import { FaYandex, FaTelegram } from 'react-icons/fa';
import { GoChevronRight } from 'react-icons/go';
import Context from '../../App/context/Control.jsx'
const Contact = () => {
    const { day, Language} = useContext(Context)
    return (
        <>
            <section className='contact'>
                <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}`} >
                    <span className={`education_spanes ${day ? "oranges-plus" : "oranges"}`} >{Language.contactTitle_1}</span>&nbsp;{Language.contactTitle_2}
                </h2>
                <Container>
                    <div className="contact_top">
                        <h2 className={`contact_ul_title ${day ? "loader" : "loaderPlus"}`} ><span className={`contact_decolor ${day ? "oranges-plus" : "oranges"}`} >{Language.contactTitle_3}&nbsp;</span>{Language.contactTitle_4}</h2>
                        <ul className="contact_list">
                            <li className="contact_item">
                                <a href='https://www.instagram.com/_mkd_developer_?r=nametag' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiOutlineInstagram className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>instagram</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://www.facebook.com/profile.php?id=100086403896826' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiFillFacebook className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>facebook</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='#!' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiOutlineWhatsApp className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>whatsapp</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://mail.yandex.ru/?uid=1695335970#tabs/relevant' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <FaYandex className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>yandex</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://www.youtube.com/channel/UC1Ydds1oCv0UWQP05WzW1ww' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiFillYoutube className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>you-tube</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://github.com/blackbilmer' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiFillGithub className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>git-hub</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://app.netlify.com/teams/blackbilmer/overview' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <SiNetlify className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>netlify</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://bilmerdicertdars@gmail.com' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <SiGmail className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>google-gmail</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://twitter.com/bilmer_08' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiFillTwitterCircle className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>twitter</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='https://t.me/Islamov_Sabit' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <FaTelegram className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>telegram</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                        </ul>
                        <h2 className={`contact_ul_title ${day ? "loader" : "loaderPlus"}`}><span className={`contact_decolor ${day ? "oranges-plus" : "oranges"}`}>{Language.contactTitle_15}</span> {Language.contactTitle_16}</h2>
                        <ul className='contact_list list_22'>
                            <li className="contact_item">
                                <a href='tel:950192824' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiFillMobile className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>{Language.contactTitle_17} №1</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                            <li className="contact_item">
                                <a href='tel:950182824' className={`contact_section_pages ${day ? "border-plus" : "border"}`}>
                                    <AiFillMobile className={`contact_pg_icon ${day ? "oranges-plus" : "oranges"}`} />
                                    <h2 className={` contact_pg_title ${day ? "loader" : "loaderPlus"}`}>{Language.contactTitle_17} №2</h2>
                                    <GoChevronRight className={`contact_abs_icon ${day ? "oranges-plus" : "oranges"}`} />
                                </a>
                            </li>
                        </ul>
                        {/* <h2 id="contact_bg" className={`contact_ul_title ${day ? "loader" : "loaderPlus"}`}><span>{Language.contactTitle_8}</span> {Language.contactTitle_19}</h2>
                        <form action="" className='contact_form' >
                            <div className="contact_name_bg">
                                <label htmlFor="" className={`contact_label ${day ? "loader" : "loaderPlus"}`}>{Language.contactTitle_20}</label>
                                <input type="text" className='contact_input' required/>
                            </div>
                            <div className="contact_name_bg">
                                <label htmlFor="" className={`contact_label ${day ? "loader" : "loaderPlus"}`}>{Language.contactTitle_21}</label>
                                <input type="text" className='contact_input' required/>
                            </div>
                            
                            <div className="contact_name_bg">
                                <label htmlFor="" className={`contact_label ${day ? "loader" : "loaderPlus"}`}>{Language.contactTitle_22}</label>
                                <textarea  type="text" className='contact_input contact_message' required/>
                            </div>
                            <Button className='contact_send_btn'>{Language.contactTitle_23}</Button>
                        </form> */}
                        
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact