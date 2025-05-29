import React from 'react';
import "./home-reviews.css";
import Burger1 from "../../assets/images/burger1.jpg";
import Tea1 from "../../assets/images/tea1.jpg";
import pizza1 from "../../assets/images/pizza1.jpg";

const HomeReviews = () => {
    return (
        <>
            <section className='Home-reviews-section'>
                <div className="custom-container container-fluid">
                    <div className="reviews d-flex justify-content-between">
                        <div className="reviews-text">
                            <div className="reviews-headings" data-aos="fade-right">
                                <span>About the Food resturent</span>
                                <h2>Our Customer Feedback</h2>
                            </div>
                            <div className="reviews-carousel">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur et fugiat mollitia quod? Sunt enim quibusdam beatae est, similique perspiciatis, numquam excepturi et illo vero eaque consequatur dignissimos soluta hic optio maxime dolore exercitationem explicabo repellat possimus eveniet?</p>
                                <h4>Jhon Doe</h4>
                            </div>
                        </div>
                        <div className="reviews-images">
                            <div className="img-wraper-one">
                                <img src={Burger1} alt="burger" className='img-fluid'/>
                            </div>
                            <div className="img-wraper-two">
                                <img src={Tea1} alt="tea" className='img-fluid'/>
                            </div>
                            <div className="img-wraper-three">
                                <img src={pizza1} alt="pizza" className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeReviews;