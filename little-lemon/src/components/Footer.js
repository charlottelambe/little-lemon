import footerLogo from '../images/footer-logo.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import linkedIn from '../images/linkedIn.png';
import twitter from '../images/twitter.png';

const Footer = () => {
    return (

    <footer>
       <img src={footerLogo} alt="Little Lemon Logo" />

        <p>Site Navigation</p>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        <p>Contact</p>
            <p>Address: 209 S. Victors Street, Chicago, 60798</p>
            <p>Phone: <a href="tel:3123257888">312 325 7888</a></p>
            <p>Email: <a href="mailto:reservations@littlelemon.com">reservations@littlelemon.com</a></p>
        <p>Social Media</p>
            <a href="#instagram"><img src={instagram} alt="Instagram Logo" /></a>
            <a href="#facebook"><img src={facebook} alt="Facebook Logo" /></a>
            <a href="#linkedIn"><img src={linkedIn} alt="LinkedIn Logo" /></a>
            <a href="#twitter"><img src={twitter} alt="Twitter Logo" /></a>
    </footer>
);
};

export default Footer;