import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <label>
        Questions? Call <span> 000-900-040-556</span>
      </label>
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <a> FAQ </a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Speed Test</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a>Help Centre</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Cookie Preferences</a>
            </li>

            <li>
              <a>Legal Notices</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Ways to Watch</a>
            </li>
            <li>
              <a>Corporate Information</a>
            </li>
            <li>
              <a>Only on Netflix</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>Media Centre</li>
            <li>
              <a>Terms of Use</a>
            </li>

            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="last-of">
        <div>
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
        </div>

        <div className="last">Netflix India - Varun Jha</div>
      </div>
    </div>
  );
};

export default Footer;
