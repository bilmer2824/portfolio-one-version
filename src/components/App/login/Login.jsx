import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import logo_admin from '../../Svg/favicon.ico';
import Context from '../context/Control.jsx'

import { FaBell } from 'react-icons/fa'
const Login_drive = () => {
    const { day, onImageChange, imageURL } = useContext(Context)
    return (
        <>
            <section className="login">

                <Container>
                    <div className="login_top">
                        <div className="login_logo_section">
                            <label className="login_img_label" htmlFor="input_Image">
                                <div className="login_img_content">
                                    <img src={logo_admin} className="login_admin_icon" alt="" />
                                    {imageURL.map((imageSrc, item) =>
                                        <img key={item} src={`${imageSrc}`} alt="admin logo" className="login_logo" />
                                    )}
                                </div>
                            </label>
                            <input
                                className="login_logo_input"
                                type="file"
                                id="input_Image"
                                multiple
                                accept="image/*"
                                onChange={onImageChange}
                            />
                            <Button className="login_edit_button">Edit  Profile</Button>
                        </div>
                        <span className="login_center_span"></span>
                        <div className="login_name_editing">
                            <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}`} >
                                <span>my</span> profile
                            </h2>
                            <div className="login_name_title_gpa">
                                <ul className="login_list_plus">
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                    <li className="login_item_plus">
                                        hello
                                    </li>
                                </ul>
                            </div>
                            <FaBell className="login_bell_active"/>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="var" />
        </>
    )
}

export default Login_drive