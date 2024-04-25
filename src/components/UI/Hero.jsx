import React from 'react'
import heroImg from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/dumble.png'
import "../../styles/hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section id= "home">
    <div className="container">
        <div className="hero__wrapper">

            {/* ========= hero content ========= */}
            <div className="hero__content">
                <h2 
                className="section_title"
                data-aos= "fade-up"
                data-aos-duration= "1500" 
                >
                    Exercise is the Key to a
                    <span className="highlights"> Healthy </span> Lifestyle
                </h2>
                <p data-aos= "fade-up"
                data-aos-delay= '100'
                data-aos-duration= "1800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Laborisam repellendus odit fugit eos! Id, labore.
                </p>

                <div className="hero__btns" data-aos= "fade-up"
                data-aos-delay= '200'
                data-aos-duration= "2000">
                    <Link to="/login" className="custom-register_btn">Get Started</Link>
                    {/* <button className="watch__btn">
                        <span>
                            <i class="ri-play-fill"></i>
                            </span>
                            Watch Video
                            </button> */}
                </div>
            </div>

            {/* ========= hero img ========= */}
            <div className="hero__img">
                <div className="hero__img-wrapper">

                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box_img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="heart_rate">
                        <h5>Heart Rate</h5>
                        <span><i className="ri-heart-pulse-fill"></i></span>
                        <h5>2567 BPM</h5>
                    </div>


                    <div className="gym_location">
                        <span><i className="ri-map-pin-2-fill"></i></span>
                        <Link to="/gymlocations" className='custom-register_btn d-flex justify-content-center align-items-center'>
                        <h5>Find the gym <br />near you</h5>
                        </Link>
                    </div>

                    <div className="dumble_icon">
                        <img src={dumbleIcon} alt="" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero