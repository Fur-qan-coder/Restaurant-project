import React from 'react';
import CheifBannerOne from "../../assets/images/cheif-about-banner.jpg";
import CheifBannerTwo from "../../assets/images/cheif2-about-banner.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import "./about-banner.css";


const AboutBanner = () => {
    return (
        <>
            <section className='about-banner'>
                <div className="custom-container container-fluid">
                    <div className="about-banner-content">
                        <div className="about-banner-heading" data-aos="fade-left">
                            <h1>Perfect Place For An Expecptional Experience</h1>
                        </div>
                        <div className="about-banner-body d-flex justify-content-between">
                            <div className="about-banner-img-wraper d-flex justify-content-between">
                                <div className="cheef-img-wraper">
                                    <img src={CheifBannerOne} alt="cheif about banner " className='img-fluid' />
                                </div>
                                <div className="menu-img-wraper">
                                    <img src={CheifBannerTwo} alt="cheif 2 about banner" className='img-fluid' />
                                </div>
                            </div>
                            <div className="about-banner-text-wraper">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, amet doloribus? Nulla quasi maiores pariatur aut harum quis a mollitia minima consequuntur tempora! Eaque illo quod dolores, repellendus tempore necessitatibus.</p>
                                <div className="wraper">
                                    <div className="about-banner-text-card-wraper d-flex justify-content-between align-items-center">
                                        <div className="img-wraper">
                                            <FontAwesomeIcon icon={faMobileScreenButton} className='img-fluid icon' />
                                        </div>
                                        <div className="text-wraper">
                                            <h3 data-aos="fade-left">Online Food Ordering</h3>
                                            <p className='mb-0 paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusamus?</p>
                                        </div>
                                    </div>
                                    <div className="about-banner-text-card-wraper d-flex justify-content-between align-items-center">
                                        <div className="img-wraper">
                                            <FontAwesomeIcon icon={faSuitcaseMedical} className='img-fluid icon' />
                                        </div>
                                        <div className="text-wraper">
                                            <h3 data-aos="fade-left">100% Healthy Food</h3>
                                            <p className='mb-0 paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quidem?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner;