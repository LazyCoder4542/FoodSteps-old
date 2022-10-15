import React from "react";

import './ContactUs.css'
function ContactUs() {
  return (
    <section id="contact-us">
        <div className="contact-us">
            <h1>Contact us
            </h1>
        </div>

        <div className="P-1">
            <p>Do you have any ideas to share or want to collaborate? Write us and we'll discuss it!</p>
        </div>

        <div className="img">
            <img src="images/logo546546 1.png" alt="logo" />
        </div>

        <div className="P-2">
            <p>Lorem, ipsum dolor sit amen consenter adiposity elite. 
                                Consenter debits, libero, adiposis doit facile quipus tempore dolorous vera dolores magna at anime. 
                                quid's non consequently inventors fugal militia veritas sung quash cum! Necessitating harem rem voluptuaries porno aspirator voluntary quam!</p>
        </div>
        
        <div className="container">

            <form>
                <div className="row">
                    <div className="input-group">
                    <input type="text" id="name" required />
                    <label htmlFor="name"> <i className="fa-regular fa-circle-user"></i> Your name</label>
                </div>

                <div className="input-group">
                    <input type="text" id="number" required />
                    <label htmlFor="number"> <i className="fa-sharp fa-solid fa-phone"></i> Phone No.</label>
                </div>
                </div>

                <div className="input-group">
                    <input type="email" id="email" required />
                    <label htmlFor="email"> <i className="fa-regular fa-envelope"></i> Email Address</label>
                </div>

                <div className="input-group">
                    <textarea id="Enter text here" rows="8" required></textarea>
                    <label htmlFor="Enter text"> <i className="fa-regular fa-comments"></i> Enter Text</label>
                </div>
                
                <button type="submit">SUBMIT <i className="fa-regular fa-paper-plane"></i></button>
            </form>

        </div>

    </section>
  );
}

export default ContactUs;
