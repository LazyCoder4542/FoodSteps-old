import React from 'react';
import { Link } from 'react-router-dom';

import twitter from '../assets/icons/twitter.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
function Footer() {
    return ( 
        <footer id="site-footer">
            <div className="follow">
                <span>Follow</span>
                <div className="wrapper">
                    <span>
                        <object data={twitter} type="image/svg+xml">
                            <img src={twitter} />
                        </object>
                    </span>
                    <span>
                        <object data={facebook} type="image/svg+xml">
                            <img src={facebook} />
                        </object>
                    </span>
                    <span>
                        <object data={instagram} type="image/svg+xml">
                            <img src={instagram} />
                        </object>
                    </span>
                </div>
            </div>
            <div className="links">
                <div>
                    <Link to='./'>Home</Link>
                    <Link to='about'>About</Link>
                    <Link to='contact-us'>Contact us</Link>
                    <Link to='write-for-us'>Write for us</Link>
                </div>
                <div>
                    <Link to='privacy-poilicy'>Privacy Policy</Link>
                    <Link to='faq'>FAQ</Link>
                    <Link to='terms-of-services'>Terms of Services</Link>
                </div>
            </div>
        </footer>
     );
}

export default Footer;