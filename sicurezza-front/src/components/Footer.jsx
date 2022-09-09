import './Footer.scss';
import signUp from "../assets/blueFootPc.svg";

const Footer = () => {
  return (
    <div className="footer">
      Footer en mi web
    <img className="signUpImage" src={signUp} alt="city"/>
    </div>
  )
};

export default Footer;