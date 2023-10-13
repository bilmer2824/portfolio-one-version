import React, { useContext } from "react";
import Slider from "./Portfolio-slider.jsx";
import { Container, Button } from "react-bootstrap";
import Context from '../../App/context/Control.jsx'
const Portfolio = () => {
    const { onActive_1, offActive_1, onActive_2, offActive_2, onActive_3, offActive_3, day, Language } = useContext(Context)
    return (
        <>
            <section className="portfolio">
                <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}`}>
                    <span className={`education_spanes ${day ? "oranges-plus" : "oranges"}`}>{Language.portTitle_1}</span>&nbsp;{Language.portTitle_2}
                </h2>
                <Container>
                    <div className="portfolio_top">
                        <div className={`portfolio_info_page ${day ? "border-plus" : "border"}`}>
                            <h2 className={`portfolio_title ${day ? "oranges-plus" : "oranges"}`}>{Language.portTitle_3}</h2>
                            <p className={`portfolio_text ${day ? "loader" : "loaderPlus"}`}>
                                &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Possimus id officiis numquam eius blanditiis
                                soluta sunt deleniti iusto dicta rerum libero nihil qui fugit
                                pariatur officia minima molestias, eum ratione consequatur?
                                Tenetur vitae repudiandae nemo at! Autem vel reiciendis
                                officiis! Iusto omnis officia perferendis vitae. Repellat
                                voluptates officiis quia accusantium.
                            </p>
                        </div>
                        <h4 className={`portfolio_webr ${day ? "oranges-plus" : "oranges"}`}>{Language.portTitle_4}</h4>
                        <ul className="portfolio_list">
                            <Button
                                onClick={onActive_1}
                                id="grupa"
                                className={`portfolio_item ${offActive_1 === false ? "" : "active"} ${day ? "loader" : "loaderPlus"}`}
                            >
                                {Language.portTitle_5}
                            </Button>

                            <Button
                                onClick={onActive_2}
                                className={`portfolio_item ${offActive_2 === false ? "" : "active"} ${day ? "loader" : "loaderPlus"}`}
                            >
                                {Language.portTitle_6}
                            </Button>

                            <Button
                                onClick={onActive_3}
                                className={`portfolio_item ${offActive_3 === false ? "" : "active"} ${day ? "loader" : "loaderPlus"}`}
                            >
                                {Language.portTitle_7}
                            </Button>
                        </ul>
                        <div className="portfolio_slider">
                            <Slider />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Portfolio;
