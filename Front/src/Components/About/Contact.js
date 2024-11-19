import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        sender: "",
        email: "",
        text: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:1601/messages", {
                sender: formData.sender,
                email: formData.email,
                text: formData.text,
            });
            toast.success("Your message has been sent successfully!");
            navigate("/");
        } catch (error) {
            toast.error("Failed to send your message. Please try again later.");
        }
    };

    return (
        <div style={{ marginTop: "50px", color: "#333", padding: "20px", lineHeight: "1.6" }}>
            <div className="container">
                <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>Contact Us</h1>

                <section className="mb-5">
                    <h3 style={{ fontWeight: "bold" }}>We’d Love to Hear From You!</h3>
                    <p>
                        Whether you have a question about how the platform works, need assistance, or just want to share your
                        feedback, feel free to get in touch with us. We're here to help!
                    </p>
                </section>

                <section className="mb-5">
                    <h3 style={{ fontWeight: "bold" }}>Get in Touch</h3>
                    <p><strong>Email:</strong> <a href="mailto:allouchemicka@gmail.com" style={{ color: "#007BFF", textDecoration: "none" }}>allouchemicka@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+972545266983" style={{ color: "#007BFF", textDecoration: "none" }}>+972 54 526 6983</a></p>
                    <p><strong>Address:</strong> 123 Recycling Avenue, Green City, Earth</p>
                </section>

                <section className="mb-5">
                    <h3 style={{ fontWeight: "bold" }}>Send Us a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ fontWeight: "bold" }}>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="sender"
                                placeholder="Enter your name"
                                value={formData.sender}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ fontWeight: "bold" }}>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" style={{ fontWeight: "bold" }}>Message</label>
                            <textarea
                                className="form-control"
                                id="text"
                                rows="5"
                                placeholder="Write your message"
                                value={formData.text}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;
