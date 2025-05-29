import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className='footer'>
        <div className="container-small container-fluid">
          <div className="footer-content">
            <div className="restorent-timing">
              <h2>HnFn <span>Restaurant</span></h2>
              <p>Monday-Sunday:12pm to 12am</p>
              <div className="social-icons">
                <Link to='/'>
                  <div className="img-wraper">
                    <FontAwesomeIcon icon={faFacebookF} className='img-fluid icon fb-icon' />
                  </div>
                </Link>
                <Link to='/'>
                  <div className="img-wraper">
                    <FontAwesomeIcon icon={faSquareInstagram} className='img-fluid icon' />
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer-about footer-link">
              <h3>About</h3>
              <ul>
                <li><Link to="/">Special Dish</Link></li>
                <li><Link to="/">Reservation</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-menu footer-link">
              <h3>Menu</h3>
              <ul>
                <li><Link to="/">BreakFast</Link></li>
                <li><Link to="/">Lunch</Link></li>
                <li><Link to="/">Dinner</Link></li>
                <li><Link to="/">Burger</Link></li>
                <li><Link to="/">Pizza</Link></li>
                <li><Link to="/">Ice-cream</Link></li>
              </ul>
            </div>
            <div className="news-letter">
              <h3>News Letter</h3>
              <p className='mb-1'>Get recent news and update</p>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="Email"
                      placeholder="Enter Email"
                      aria-describedby="inputGroupPrepend"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button className='submit-btn' type="submit">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;