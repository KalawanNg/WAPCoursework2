import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';

const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#schedule',
        display: 'Schedule'
    },
    {
        path: '#classes',
        display: 'Classes'
    },
    {
        path: '#pricing-plan',
        display: 'Pricing'
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const navigate = useNavigate();

    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('accessToken');

    const handleLogout = () => {
        // Remove token from local storage upon logout
        localStorage.removeItem('accessToken');
        // Redirect user to login page or any other route
        navigate('/login');
    };


    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header');
        } else {
            headerRef.current.classList.remove('sticky__header');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);

        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const handleClick = e => {
        e.preventDefault();

        if (window.location.pathname !== '/') {
            navigate('/')
        }

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    return (
        <header className="custom-header" ref={headerRef}>
            <div className="custom-container">
                <div className="custom-nav__wrapper">
                    {/* ============= LOGO ============= */}
                    <Link to='/'>
                        <div className="custom-logo">
                            <div className="custom-logo_img"><img src={logo} alt=" " /></div>
                            <h2>FitBody</h2>
                        </div>
                    </Link>

                    {/* ============ navigation menu ============ */}

                    <div className="custom-navigation">
                        <ul className="custom-menu">
                            {
                                nav__links.map(item => (
                                    <li className="custom-nav__item">
                                        <a onClick={handleClick} href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* ============== nav right ============== */}
                    <div className="custom-nav__right">
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className='custom-register_btn d-flex justify-content-center align-items-center'>
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/register" className='custom-register_btn d-flex justify-content-center align-items-center'>
                                    Register
                                </Link>
                                <Link to="/login" className='custom-register_btn d-flex justify-content-center align-items-center'>
                                    Log in
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
