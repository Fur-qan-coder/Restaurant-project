import React from 'react';
import HomeAbout from '../Home-About/HomeAbout';
import HomeBanner from '../Home-Banner/HomeBanner';
import Reservation from '../Home-Reservation/Reservation';
import HomeReviews from '../Home-Reviews/HomeReviews';
import FollowUs from '../Home-Follow/FollowUs';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeAbout />
            <Reservation />
            <HomeReviews />
            <FollowUs />
        </>
    )
}

export default Home;