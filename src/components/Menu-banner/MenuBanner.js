import React from 'react';
import BannerBurger from "../../assets/images/menu-banner-burger.png";
// import BannerPizza from "../../assets/images/pizza1-removebg-preview.png";
import DiscountImg from "../../assets/images/discount-offer.png";
import "./menu-banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MenuBanner = () => {
    return (
        <>
            <section className='menu-banner'>
                <div className="container-small container-fluid">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <div className="menu-banner-content d-flex align-items-center">
                                <div className="menu-banner-text">
                                    <span>Fastest making & easy pickups</span>
                                    <h1>HnFn Special Burger</h1>
                                    <p>Good Food start with good ingridants. we only biling you the best</p>
                                </div>
                                <div className="menu-banner-img-wraper">
                                    <div className="main-img-wraper">
                                        <img src={BannerBurger} alt="meunu banner burger" className='img-fluid' />
                                    </div>
                                    <div className="discount-img-wraper">
                                        <img src={DiscountImg} alt="discount img" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="menu-banner-content d-flex align-items-center">
                                <div className="menu-banner-text">
                                    <span>Fastest making & easy pickups</span>
                                    <h1>HnFn Special Pizza</h1>
                                    <p>Good Food start with good ingridants. we only biling you the best</p>
                                </div>
                                <div className="menu-banner-img-wraper">
                                    <div className="main-img-wraper">
                                        <img src={BannerBurger} alt="meunu banner burger" className='img-fluid' />
                                    </div>
                                    <div className="discount-img-wraper">
                                        <img src={DiscountImg} alt="discount img" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="menu-banner-content d-flex align-items-center">
                                <div className="menu-banner-text">
                                    <span>Fastest making & easy pickups</span>
                                    <h1>HnFn Special Burger</h1>
                                    <p>Good Food start with good ingridants. we only biling you the best</p>
                                </div>
                                <div className="menu-banner-img-wraper">
                                    <div className="main-img-wraper">
                                        <img src={BannerBurger} alt="meunu banner pizza" className='img-fluid' />
                                    </div>
                                    <div className="discount-img-wraper">
                                        <img src={DiscountImg} alt="discount img" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default MenuBanner;