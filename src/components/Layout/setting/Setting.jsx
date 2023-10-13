import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TbLanguage } from "react-icons/tb";
import { ImSun } from "react-icons/im";
import { RiMoonFill } from "react-icons/ri";
import { MdOutlineExitToApp, MdAdminPanelSettings } from "react-icons/md"
import { FaUserCog, FaCommentDots } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Context from "../../App/context/Control";
const Setting = () => {
    const { exitActive, onSetting, state, activate, moon, day, Lang_uz, Lang_eng, Lang_ru, Lang_kr, Lang_kz, Language, Lang_arb } = useContext(Context)
    return (
        <>
            <section className="setting_page">
                <h2 className={`setting_title ${day ? "oranges-plus" : "oranges"}`}>
                    <span >{Language.settingTitle_1}</span>
                    <MdOutlineExitToApp className={`exit_icon_setting ${day ? "oranges-plus" : "oranges"} `} onClick={exitActive} />
                </h2>
                <ul className="setting_list">
                    <li className={`setting_item setting_language ${state && "active"} ${day ? "border-plus" : "border"}`}>
                        <p className={` setting_item_p ${day ? "loader" : "loaderPlus"}`} onClick={onSetting}>
                            {Language.settingTitle_2}
                            <TbLanguage className={`contact_abs_icon setting_lang_icon  ${day ? "oranges-plus" : "oranges"}`} />
                        </p>
                        <div className={`setting_lang ${state && "active"}`}>
                            <Button onClick={Lang_uz} className={`setting_lang_link ${day ? "loader" : "loaderPlus"}`}>Uzbek</Button>
                            <span></span>
                            <Button onClick={Lang_eng} className={`setting_lang_link ${day ? "loader" : "loaderPlus"}`}>English</Button>
                            <span></span>
                            <Button onClick={Lang_ru} className={`setting_lang_link ${day ? "loader" : "loaderPlus"}`}>Русский</Button>
                            <span></span>
                            <Button onClick={Lang_arb} className={`setting_lang_link ${day ? "loader" : "loaderPlus"}`}>Arabic</Button>
                            <span></span>
                            <Button onClick={Lang_kz} className={`setting_lang_link ${day ? "loader" : "loaderPlus"}`}>Казахский</Button>
                            <span></span>
                            <Button onClick={Lang_kr} className={`setting_lang_link ${day ? "loader" : "loaderPlus"}`}>Korean</Button>
                        </div>
                    </li>
                    <li className={`setting_item  ${day ? "border-plus" : "border"}`} onClick={activate}>
                        <p className="setting_item_p">
                            <span className={`moon ${moon && "activate"} ${day ? "loader" : "loaderPlus"} `}>
                                {Language.settingTitle_3}
                            </span>
                            <span className={`sun ${moon && "activate"} ${day ? "loader" : "loaderPlus"}`}>
                                {Language.settingTitle_4}
                            </span>
                            <RiMoonFill
                                className={`contact_abs_icon moon ${moon && "activate"} ${day ? "oranges-plus" : "oranges"} ` }
                            />
                            <ImSun className={`contact_abs_icon sun ${moon && "activate"} ${day ? "oranges-plus" : "oranges"} ` } />
                        </p>
                    </li>
                    {/* <Link to="/profile" onClick={profileTag} className={`setting_item  ${day ? "border-plus" : "border"}`}>
                        <p className={`setting_item_p  ${day ? "loader" : "loaderPlus"}`}>

                            go to control panel
                            <FaUserCog className="contact_abs_icon" />
                        </p>
                    </Link> */}
                    {/* <Link to="Commentary" onClick={anime} className={`setting_item  ${day ? "border-plus" : "border"}`}>
                        <p className={`setting_item_p  ${day ? "loader" : "loaderPlus"}`}>
                            {Language.settingTitle_6}
                            <FaCommentDots className="contact_abs_icon" />
                        </p>
                    </Link> */}
                    {/* <Link to="login" onClick={anime} className={`setting_item  ${day ? "border-plus" : "border"}`}>
                        <p className={`setting_item_p  ${day ? "loader" : "loaderPlus"}`}>
                            {Language.settingTitle_5}
                            <MdAdminPanelSettings className="contact_abs_icon" />
                        </p>
                    </Link> */}

                </ul>

            </section>
        </>
    );
};

export default Setting;
