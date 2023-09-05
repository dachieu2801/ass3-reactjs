import { Link } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./Footer.module.css";

function Footer(params) {
  return (
    <div className="bg-dark pt-4 pb-4">
      <Card>
        <div className={`row ${styles.footer}`}>
          <div className="col-4">
            <h4>CUSTOMER SERVICES</h4>
            <Link to="#">Help & Contact Us</Link>
            <Link to="#">Return & Refunds</Link>
            <Link to="#">Online Stores</Link>
            <Link to="#">Term & Conditions</Link>
          </div>
          <div className="col-4">
            <h4>COMPANY</h4>
            <Link to="#">What We Do</Link>
            <Link to="#">Availavle Services</Link>
            <Link to="#">Latest Posts</Link>
            <Link to="#">FAQs</Link>
          </div>
          <div className="col-4">
            <h4>SOCIAL MEDIA</h4>
            <Link to="#">Twitter</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">Facebook</Link>
            <Link to="#">Pinterest</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Footer;
