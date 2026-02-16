import './Contact.css';

export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-heading">
                    <h2>Get In Touch</h2>
                    <p>
                        Ready to upgrade your filtration system? Our technical team is here
                        to help you find the perfect solution.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Let's Build Something Together</h3>
                        <p>
                            Whether you need a single replacement cartridge or a complete
                            water treatment plant, we've got the expertise to deliver.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-detail-icon">📍</div>
                                <div>
                                    <strong>Head Office</strong>
                                    <span>Chennai, Tamil Nadu, India</span>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">📞</div>
                                <div>
                                    <strong>Phone</strong>
                                    <span>+91 98765 43210</span>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">✉️</div>
                                <div>
                                    <strong>Email</strong>
                                    <span>info@smartaquatech.com</span>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">🕐</div>
                                <div>
                                    <strong>Working Hours</strong>
                                    <span>Mon – Sat, 9:00 AM – 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="contact-form glass-card"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input id="name" type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" placeholder="john@company.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Tell us about your filtration requirements..."
                            />
                        </div>
                        <button type="submit" className="btn-primary form-submit">
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
