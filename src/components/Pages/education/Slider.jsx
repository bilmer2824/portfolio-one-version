import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Ratio from 'react-bootstrap/Ratio';
import Context from '../../App/context/Control.jsx'

function Slider() {
    const { day } = useContext(Context)
    return (
        <>
            <Swiper
                breakpoints={{
                    1800: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 1,
                    },
                    820: {
                        slidesPerView: 1,
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
                <SwiperSlide className={`education_div_zba ${day ? "border-plus" : "border"}`}>
                    <Ratio className="ratio ratio-16x9">
                        <iframe type="image/svg+xml/video"  src="https://www.youtube.com/embed/D5SdvGMTEaU" className="education_youTube" title="YouTube video"></iframe>
                    </Ratio>
                </SwiperSlide>
                <SwiperSlide className={`education_div_zba ${day ? "border-plus" : "border"}`}>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/nB2ecjdMV6c" className="education_youTube" title="YouTube video"></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`education_div_zba ${day ? "border-plus" : "border"}`}>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/nB2ecjdMV6c" className="education_youTube" title="YouTube video"></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`education_div_zba ${day ? "border-plus" : "border"}`}>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/nB2ecjdMV6c" className="education_youTube" title="YouTube video"></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`education_div_zba ${day ? "border-plus" : "border"}`}>
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/nB2ecjdMV6c" className="education_youTube" title="YouTube video"></iframe>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}


export default Slider
