import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

let Footer = () => {
    return (
        <footer>
            <div className="company-info row">
                <div className="company-info-item col-lg-6 col-sm-12">
                    <div className="contact-info">
                        <FaEnvelope /> <a href='mailto:info@imagehub.com'>info@imagehub.com</a>
                    </div>
                    <div className="contact-info">
                        <FaPhone /> <a href='tel:1234-12-0000'>All India Toll Free: 1234-12-0000</a>
                    </div>
                    <div className="contact-info">
                        <FaWhatsapp /> <a href='https://web.whatsapp.com/'>Whatsapp Us: +919911366666</a>
                    </div>
                </div>
                <div className="company-navigation col-lg-6 col-sm-12">
                    <div className="company-info-item">
                        <div className='info-heading'>Company Info</div>
                        <a href='https://kundan-6646.github.io/imagehub'>Home</a>
                        <a href='https://kundan-6646.github.io/imagehub'>About Us</a>
                        <a href='https://kundan-6646.github.io/imagehub'>Testimonials</a>
                        <a href='https://kundan-6646.github.io/imagehub'>Image Research</a>
                    </div>
                    <div className="company-info-item">
                        <div className='info-heading'>Need Help?</div>
                        <a href='https://kundan-6646.github.io/imagehub'>Contact Us</a>
                        <a href='https://kundan-6646.github.io/imagehub'>Search Tips</a>
                        <a href='https://kundan-6646.github.io/imagehub'>FAQ</a>
                        <a href='https://kundan-6646.github.io/Portfolio/'>Developer</a>
                    </div>
                </div>

                <div className='mt-4 text-center brand-color'>
                    © {new Date().getFullYear()} <span color={{color: '#fff'}}>Image</span>Hub. All rights reserved.
                </div>
            </div>
        </footer>
    )
}


export default Footer;