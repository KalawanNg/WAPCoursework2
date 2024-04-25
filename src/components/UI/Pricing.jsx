

import React from 'react'
import "../../styles/pricing.css";
import { Link } from 'react-router-dom';


const Pricing = () => {
  return <section id= "pricing-plan">
    <div className="container">
        <div className="pricing_top">
            <h2 className="section_title">Gym <span className="highlights">Pricing</span> Plan</h2>
            <p>Various Plans Fit Your Needs! <br />
                Getting Membership to Unlock More Suprises! 
            </p>
        </div>

        {/* =============== pricing wrapper =============== */}
        <div className="pricing_wrapper">
            <div className="pricing_item">
                <div className="pricing_card-top">
                    <h2 className="section_titile">Regular Member</h2>
                    <h2 className="pricing section_title">￡15 <span>/month
                    </span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Unlimited access to the gym</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Customer support</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>General trainer</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Standard options</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>5 classes per week</li>
                    </ul>

                    <Link to="/memberchoosing" className='custom-register_btn d-flex justify-content-center align-items-center'>
                         Join Now
                    </Link>               
                </div>
            </div>



            <div className="pricing_item pricing_item-02">
                <div className="pricing_card-top">
                    <h2 className="section_titile">Premium Member</h2>
                    <h2 className="pricing section_title">￡25 <span>/month
                    </span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Unlimited access 24/5</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Book classed easily</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Personal trainer</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Multiple gym access</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>10 classes per week</li>
                    </ul>

                    <Link to="/memberchoosing" className='custom-register_btn d-flex justify-content-center align-items-center'>
                         Join Now
                    </Link>
                </div>
            </div>



            <div className="pricing_item">
                <div className="pricing_card-top">
                    <h2 className="section_titile">Standard Member</h2>
                    <h2 className="pricing section_title">￡30 <span>/month
                    </span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Unlimited access 24/7</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Book classed earlier</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Personal trainer</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Multiple gym access</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i>
                        </span>Freze at no additional cost</li>
                    </ul>
                    <Link to="/memberchoosing" className='custom-register_btn d-flex justify-content-center align-items-center'>
                         Join Now
                    </Link>                
                </div>
            </div>


        </div>
    </div>
  </section>
}

export default Pricing