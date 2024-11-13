import React from 'react';
import logoAndreBorelli from '../assets/logoandreborelli.png';
import '../css/footer.css';

function Footer(){
    return(

        <section className="footer">
          <a href="https://andreborelliwebdeveloper.netlify.app/">  <img src={logoAndreBorelli} alt="logo André Borelli Web Developer" className="footerLogo"></img></a></section>
    );

}

export default Footer;