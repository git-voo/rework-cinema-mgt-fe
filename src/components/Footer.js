import "../styles/components/footer.scss";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import visa from "../assets/icons/visa.jpg"
import mastercard from "../assets/icons/mastercard.png"
export default function Footer() {
  return (
    <div className="footer-container">
        
    <div className="content">
    <div className="footer-section">
        <h5>Product</h5>

        <ul>
          <li>Key Features</li>
          <li>Pricing</li>
          <li>Event Tracking</li>
          <li>Other Items here</li>
        </ul>
      </div>

      <div className="footer-section">
        <h5>Explore More</h5>

        <ul>
          <li>How it works</li>
          <li>Download App</li>
          <li>Event Promoter</li>
          <li>Other Items here</li>
        </ul>
      </div>

      <div className="footer-section">
        <h5>Connect With Us</h5>

        <ul>
          <li>Contact Support</li>
          <li>
            <div className="footer-icons-section">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="text">Facebook</div>
            </div>
          </li>
           <li>
            <div className="footer-icons-section">
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="text">Twitter</div>
            </div>
          </li>
          <li>Event Tracking</li>
          <li>Other Items here</li>
        </ul>
      </div>


      <div className="footer-section">
        <h5>Payment Available</h5>

        <div className="payment-options">
            <div className="image">
                <img src={visa} alt="Visa" />
            </div>
            <div className="image">
                <img src={mastercard} alt="Visa" />
            </div>
            <div className="image">
                <img src={visa} alt="Visa" />
            </div>
            <div className="image">
                <img src={mastercard} alt="Visa" />
            </div>
        </div>
      </div>

    </div>

    <div className="copyright">
        Copyright 2023 EventBux.com. LLC. All Rights reserved. Equal Housing Opportunity
    </div>
    </div>
  );
}
