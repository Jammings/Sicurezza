import "./Footer.scss";
import imgfooter from "../assets/blueFootPc-01.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="activeicons" src={imgfooter} alt="footer" />
    </div>
  );
};

export default Footer;
