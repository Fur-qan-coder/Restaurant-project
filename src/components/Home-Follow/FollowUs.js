import React from 'react';
import "./follow-us.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const FollowUs = () => {
  return (
    <>
    <section className='follow-us-section'>
        <div className="custom-container container-fluid">
            <div className="follow-us">
              <Link to='/'>
                <div className="img-wraper">
                    <FontAwesomeIcon icon={faInstagram} className='img-fluid' />
                </div>
              </Link>
                <h2>Follow @hnfn_res1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quia.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default FollowUs;