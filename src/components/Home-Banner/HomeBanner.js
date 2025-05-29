import React from 'react';
import "./home-banner.css";
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <>
            <section className= "banner">
                <div className="custom-container container-fluid">
                    <div className="contant">
                        <h1>HnFn Restaurant</h1>
                        <h3>The Perfect Space To Enjoy Fantastic Food</h3>
                        <p>Festive Dining at Farthings where we are strong belivers in using the very best produce</p>
                        <div className="button-wraper">
                            <Link to='/'>
                                <button className='filled-btn'>Explore more</button>
                            </Link>
                            <Link to='/menu'>
                                <button className='outlined-btn'>Menu</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner