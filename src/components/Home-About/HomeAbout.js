import { Link } from "react-router-dom";
import "./home-about.css";

const HomeAbout = () => {
    return (
        <>
            <section className='Home-about-section'>
                <div className="container-small container-fluid">
                    <div className="about-cards">
                        <div className="about-card-headings" data-aos="fade-right">
                            <span>About the Food resturent</span>
                            <h2>New Ground With Dishes to be Enjoyed</h2>
                        </div>
                        <div className="about-card-text" data-aos="fade-left">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur et fugiat mollitia quod? Sunt enim quibusdam beatae est, similique perspiciatis, numquam excepturi et illo vero eaque consequatur dignissimos soluta hic optio maxime dolore exercitationem explicabo repellat possimus eveniet?</p>
                        </div>
                    </div>
                    <div className="about-allcards">
                        <div className="resturent card">
                            <Link to='/'>
                                <button className="filled-yellow-btn">Resturent</button>
                            </Link>
                        </div>
                        <div className="coctail-bar card">
                            <Link to='/'>
                                <button className="filled-yellow-btn">Coctail Bar</button>
                            </Link>
                        </div>
                        <div className="private-dining card">
                            <Link to='/'>
                                <button className="filled-yellow-btn">Private Dining</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAbout;