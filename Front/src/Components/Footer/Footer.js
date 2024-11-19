import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-4">
        <div className="container">
            <div className="row">
            <div className="col text-center mb-3">
                <h5>Follow Us</h5>
                <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                >
                <FaFacebook size={24} />
                </a>
                <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                >
                <FaTwitter size={24} />
                </a>
                <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                >
                <FaInstagram size={24} />
                </a>
                <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
                >
                <FaLinkedin size={24} />
                </a>
            </div>
            </div>
            <div className="row">
            <div className="col text-center">
                <p className="mb-0">
                &copy; {new Date().getFullYear()} Mickael Allouche. All rights reserved. <Link to="/about" className="text-white">About Us</Link>
                </p>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
