import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div style={{  color: "#333", padding: "20px", lineHeight: "1.6", marginTop: '50px' }}>
        <div className="container">
            <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>About Us</h1>

            <section className="mb-5">
            <h3 style={{ fontWeight: "bold" }}>Our Mission</h3>
            <p>
                At our platform, we believe in giving a second life to clothes, accessories, toys, and everything else.
                Our goal is to provide affordable options for people while embracing the magic of recycling. Why throw away
                something useful when it could bring joy to someone else?
            </p>
            </section>

            <section className="mb-5">
            <h3 style={{ fontWeight: "bold" }}>Our Story</h3>
            <p>
                This journey started when I had items I no longer needed but couldn't bear to throw away. I decided to sell
                them at a market, and that's when I realized the potential of creating a platform for others to do the same.
            </p>
            </section>

            <section className="mb-5">
            <h3 style={{ fontWeight: "bold" }}>What We Offer</h3>
            <p>
                From clothes to toys and everything in between, our platform is a space where you can sell or buy items that
                others no longer need but still have plenty of life left in them.
            </p>
            </section>

            <section className="mb-5">
            <h3 style={{ fontWeight: "bold" }}>Our Vision</h3>
            <p>
                We aspire to be a globally recognized platform, connecting people worldwide to share, sell, and give new
                purpose to their belongings.
            </p>
            </section>

            <section className="mb-5">
            <h3 style={{ fontWeight: "bold" }}>Contact Us</h3>
            <p>
                Have questions or need assistance? We’d love to hear from you! Visit our <Link to="/contact" style={{ color: "#007BFF", textDecoration: "none" }}>Contact Us</Link> page for more details.
            </p>
            </section>
        </div>
        </div>
    );
};

export default AboutUs;
