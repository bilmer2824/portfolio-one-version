import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Context from '../context/Control';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { MdExitToApp } from 'react-icons/md'
import logo_fon from '../../Svg/Group 4.png';
import Logo_fon from '../../Svg/london.png';
import Logo_820 from '../../Svg/Group 7.png';


const Profile = () => {
    const { day, onChange, changeTag, formClick, TransClick, error } = useContext(Context)
    return (
        <>

            <section className={`profile ${error && "active"}`}>
                <img src={logo_fon} alt="" className='var_img' />
                <img src={Logo_fon} alt="" className='var_img_2' />
                <img src={Logo_820} alt="" className='var_img_3' />
                <Link to="/" className="profile_exit_range">
                    <MdExitToApp className={`profile_icon_exit  ${day ? "loader" : "loaderPlus"}`} />
                </Link>
                <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}`} >
                    <span>control</span> Panel
                </h2>
                <Container>
                    <div className="profile_top">
                        <div className="profile_info">
                            <h2 className="portfolio_title">
                                info
                            </h2>
                            <p className={
                                `portfolio_text
                                ${day ? "loader" : "loaderPlus"
                                }`
                            }> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas et sed enim ducimus ipsa. Dignissimos error quia illo itaque eligendi non quae optio vel nam, assumenda nobis autem eum ratione! Qui libero provident a corporis eaque nemo quam, commodi ullam! Expedita hic iure totam ullam odio ut beatae fugiat quibusdam, adipisci aperiam facilis velit, in nesciunt quae quis temporibus veritatis nulla, laudantium repellat et illum! Illo odio eveniet quisquam praesentium neque excepturi suscipit animi nulla quaerat blanditiis deleniti labore cum magni provident, numquam ea natus. Atque libero eius amet qui est id! Veniam, nostrum. Commodi enim culpa quisquam dignissimos debitis. </p>
                        </div>
                        <div className="profile_form">
                            <h4 className={
                                `profile_title 
                                    ${day ? "loader" : "loaderPlus"
                                }`
                            } >access</h4>
                            <form action="" className="profile_form_title">
                                <div className="profile_form_page">
                                    <label htmlFor="" className="profile_label">enter your name</label>
                                    <div className="profile_input_r">
                                        <input
                                            type="text"
                                            className={
                                                `profile_input 
                                            ${day ? "loader" : "loaderPlus"
                                                }`
                                            }
                                            required />
                                    </div>
                                </div>
                                <div className="profile_form_page">
                                    <label htmlFor="" className="profile_label" >enter your password</label>
                                    <div className="profile_input_r">
                                        <input
                                            type={`${changeTag ? "password" : "text"}`}
                                            className={
                                                `profile_input ${day ? "loader" : "loaderPlus"
                                                }`
                                            }
                                            required
                                        />
                                        <AiFillEye
                                            onClick={onChange}
                                            className={`profile_pass_icons 
                                                ${changeTag ? "active" : ""
                                                }  
                                                ${day ? "loader" : "loaderPlus"
                                                }`
                                            } />
                                        <AiFillEyeInvisible
                                            onClick={onChange}
                                            className={
                                                `profile_pass_icons_two 
                                            ${changeTag ? "active" : ""
                                                }  
                                            ${day ? "loader" : "loaderPlus"
                                                }`
                                            } />
                                    </div>
                                </div>

                                <Button className={`profile_form_button ${TransClick ? "click-ced" : ""}`} onClick={formClick}>enter</Button>
                            </form>
                        </div>

                    </div>
                </Container>
            </section>
            {/* <input type="file" capture="environment" accept="image/*" /> */}
            {/* input images */}
        </>
    )
}

export default Profile

