import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import worldImg from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the user data from localStorage
    const loggedInUser = localStorage.getItem('user');

    if (loggedInUser) {
      // Parse and set user data to state
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Travelling opens the door to creating <span className="highlight">memories</span>
              </h1>
              <p>
                Every journey brings new experiences, forming unforgettable moments that last a lifetime.
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Display Username if logged in */}
      {user && (
        <div className="user-info">
          <Container>
            <Row>
              <Col>
                <p className="welcome-message">Welcome, {user.username}!</p>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {/* Experience Section */}
      <section className="experience-section" style={{ marginTop: '50px' }}>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  With our extensive experience, we are dedicated to meeting your needs.
                  <br />
                  You can rely on us to provide exceptional service and ensure your complete satisfaction.
                </p>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12K+</span>
                    <h6>Successful trips</h6>
                  </div>
                  <div className="counter__box">
                    <span>2K+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>15</span>
                    <h6>Years of experience</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
