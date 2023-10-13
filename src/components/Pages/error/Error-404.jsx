import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import logo from "../../Svg/error.png";
import { Link } from "react-router-dom";
import Context from "../../App/context/Control.jsx";
const Error_404 = () => {
    const { error, Home_Link, day } = useContext(Context)
    return (
        <>
            <section className={`error ${error && "active"}`}>
                <Container>
                    <div className="error_top">
                        <div className="error_center">
                            <div className="error_ring"></div>
                        </div>
                        <h1 className="error_title">Don't be surprised</h1>
                        <p className={` error_text ${day ? "loader" : "loaderPlus"}`}>
                            It's just a <span className="error_span">404</span>-error
                        </p>
                        <p className={` error_text ${day ? "loader" : "loaderPlus"}`}>
                            You can go to the{" "}
                            <Link to="/" onClick={Home_Link} className="error_span_link">
                                home
                            </Link>{" "}
                            page via the link
                        </p>
                        <img src={logo} alt="logo" className="error_logo" />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Error_404;
