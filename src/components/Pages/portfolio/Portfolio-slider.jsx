import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Context from '../../App/context/Control.jsx'
import logo_1 from '../../Svg/Frame 2.png';
import logo_2 from '../../Svg/Frame night.png';
export default function App() {
    const { day } = useContext(Context)
    return (
        <>
            <Swiper

                breakpoints={{
                    1800: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 2,
                    },
                    820: {
                        slidesPerView: 2,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${day ? "border-plus  backgrounds-plus" : "backgrounds border"}`}>
                        <img className="item_logo" src={`${day ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${day ? "loader" : "loaderPlus"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${day ? "oranges-plus" : "oranges"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${day ? "border-plus  backgrounds-plus" : "backgrounds border"}`}>
                        <img className="item_logo" src={`${day ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${day ? "loader" : "loaderPlus"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${day ? "oranges-plus" : "oranges"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${day ? "border-plus  backgrounds-plus" : "backgrounds border"}`}>
                        <img className="item_logo" src={`${day ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${day ? "loader" : "loaderPlus"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${day ? "oranges-plus" : "oranges"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${day ? "border-plus  backgrounds-plus" : "backgrounds border"}`}>
                        <img className="item_logo" src={`${day ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${day ? "loader" : "loaderPlus"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${day ? "oranges-plus" : "oranges"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${day ? "border-plus  backgrounds-plus" : "backgrounds border"}`}>
                        <img className="item_logo" src={`${day ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${day ? "loader" : "loaderPlus"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${day ? "oranges-plus" : "oranges"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`portfolio_div_zba ${day ? "border-plus  backgrounds-plus" : "backgrounds border"}`}>
                        <img className="item_logo" src={`${day ? logo_2 : logo_1}`} alt="" />
                        <h2 className={`portfolio_swipper_title ${day ? "loader" : "loaderPlus"}`} >project name</h2>
                        <ul className="portfolio_swipper_list">
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>type</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>web</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>language</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>java<span>script</span></h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Framework</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>React</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>Complated On</h6>
                                <h6 className={`portfolio_right_title ${day ? "oranges-plus" : "oranges"}`}>20, June 2022</h6>
                            </li>
                            <li className="portfolio_swipper_item">
                                <h6 className={`portfolio_left_title ${day ? "loader" : "loaderPlus"}`}>link</h6>
                                <a href="#!" className={`portfolio_right_title link ${day ? "oranges-plus" : "oranges"}`}>link</a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
