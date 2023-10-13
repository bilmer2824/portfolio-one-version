import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineViewList } from 'react-icons/hi';
import logo_ee from '../../Svg/Group 2.svg';
import logo_bb from '../../Svg/favicon_2.png'


import Setting from '../../Layout/setting/Setting';
import Context from '../../App/context/Control';
const Header = () => {
    const { allActive, onActive, onMain_Active, onMenuActive, onMenu, isVisibility, goToBtn, day, Language, headerTransPlus } = useContext(Context)
    return (
        <>
            <header className={`header ${onMenu && 'active'}  ${headerTransPlus ? "headerTrans_plus" : "headerTrans"}`}>
                <Container>
                <div className="header_top">
                        <Link to="/">
                            <img src={`${day ? logo_bb : logo_ee}`} className={`header_home_link ${day ? "border-plus" : "border"}`} alt="" />
                            {/* <img src={logo_bb} className="header_home_link_2" alt="" /> */}
                        </Link>
                        <ul className={`header_list ${onMenu && 'active'}`} >
                            <li className="header_item" onClick={onMain_Active}>
                                <NavLink
                                    to="/"
                                    className={`header_link  ${day ? "loader" : "loaderPlus"} `}>
                                    <span className='header_span' />
                                    {Language.headerTitle_1}
                                </NavLink>
                            </li>
                            <li className="header_item" onClick={onMain_Active}>
                                <NavLink
                                    to="/about"
                                    className={`header_link  ${day ? "loader" : "loaderPlus"}`}>
                                    <span className='header_span' />
                                    {Language.headerTitle_2}
                                </NavLink>
                            </li>
                            <li className="header_item" onClick={onMain_Active}>
                                <NavLink
                                    to="/education"
                                    className={`header_link  ${day ? "loader" : "loaderPlus"}`}>
                                    <span className='header_span' />
                                    {Language.headerTitle_3}
                                </NavLink>
                            </li>
                            <li className="header_item" onClick={onMain_Active}>
                                <NavLink
                                    to="/portfolio"
                                    className={`header_link  ${day ? "loader" : "loaderPlus"}`}>
                                    <span className='header_span' />
                                    {Language.headerTitle_4}
                                </NavLink>
                            </li>
                            <li className="header_item" onClick={onMain_Active}>
                                <NavLink
                                    to="/contact"
                                    className={`header_link  ${day ? "loader" : "loaderPlus"}`}>
                                    <span className='header_span' />
                                    {Language.headerTitle_5}
                                </NavLink>
                            </li>
                        </ul>
                        <div className="header_btn_gpa">
                            <Button onClick={onActive} className={`header_button  ${allActive && 'activate'} ${day ? "loader border-plus" : "loaderPlus border"} `}>
                                <FiSettings className={`header_icon ${day ? "loader" : "loaderPlus"} `} />
                                <span>{Language.headerTitle_6}</span>
                            </Button>
                            <Button onClick={onMenuActive} className={`header_button header_menu_kk ${onMenu && 'active'}  ${day ? "border-plus" : "border"}`}>
                                <HiOutlineViewList className={`header_icon_menu ${onMenu && 'activate'} ${day ? "loader" : "loaderPlus"}`} />
                            </Button>
                        </div>
                    </div>
                </Container>
            </header>

            <Button className={`icon_home_page ${isVisibility && 'active'} ${day ? "swipperLoaderPlus" : "swipperLoader"}`} onClick={goToBtn}>
                <FaAngleRight className="icon_home_bg" />
                <FaAngleRight className="icon_home_bg" />
            </Button>
            <div className={`setting ${allActive && 'active'} ${day ? "border-plus" : "border"}`}>
                <Setting />
            </div>
        </>
    )
}

export default Header