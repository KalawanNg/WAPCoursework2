import React from 'react'
import "../../styles/footer.css";
import logo from '../../assets/img/dumble.png'

const Footer = () => {

    const year = new Date().getFulYear
  return <footer className="custom-footer">
    <div className="container">
        <div className="custom-footer_wrapper">
            <div className="custom-footer_box">
            <div className="custom-logo">
                    <div className="custom-logo_img"><img src={logo} alt=" " /></div>
                    <h2>FitBody</h2>
                </div>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Laborisam repellendus odit fugit eos! Id, labore.
                </p>
            </div>
            <div className="custom-footer_box">
                <h4 className="custom-footer_title">Company</h4>

                <ul className="custom-footer_links">
                    <li><a href="#">Our program</a>
                    </li>
                    <li><a href="#">Our plan</a>
                    </li>
                    <li><a href="#">Become a member</a>
                    </li>
                </ul>
            </div>
            <div className="custom-footer_box">
                <h4 className="custom-footer_title">Quick Links</h4>

                <ul className="custom-footer_links">
                    <li><a href="#">About us</a>
                    </li>
                    <li><a href="#">Contact us</a>
                    </li>
                    <li><a href="#">Support</a>
                    </li>
                </ul>
            </div>
        </div>

        <p className= "custom-copyright">
            Copyright - {year} developed by Charlene. All rights reserved.
        </p>
    </div>
  </footer>
}

export default Footer