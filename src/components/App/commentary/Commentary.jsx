import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Context from '../context/Control.jsx'
const Commentary = () => {
    const { day, Language } = useContext(Context)
    return (
        <>
            <section className="comment">
                <h2 className={`education_main_title ${day ? "loader" : "loaderPlus"}`}>
                    <span>{Language.commentTitle_1}</span>&nbsp;{Language.commentTitle_2}
                </h2>
                <Container>
                    <div className="comment_top">
                        <div className="comment_gruppa">
                            <div className="comment_comentariya">
                                <div className="comment_title_bg">
                                    <h2 className={`comment_bga ${day ? "loader" : "loaderPlus"}`}>{Language.commentTitle_3}:</h2>
                                    <div className="comment_time">{Language.commentTitle_4}</div>
                                </div>
                                <p className="comment_text_bg">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                                    eos neque corporis, illo ipsam in, quidem ea veniam numquam
                                    pariatur unde impedit, repellendus voluptatum. Nam. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                                    beatae maxime consequatur. Dignissimos temporibus nostrum cum,
                                    eos iusto, harum est reiciendis, dolorum nam accusantium
                                    beatae? Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. At dolorem harum quisquam hic consequuntur, nemo quas
                                    dolorum blanditiis mollitia! Autem aspernatur aliquam ut
                                    eveniet suscipit!
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Commentary;
