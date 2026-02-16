import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src="/images/filter-icon.png" alt="Smart Aqua Technologies" />
                        <p>
                            Leading manufacturer and supplier of industrial water, air, and
                            process filtration systems across India. Quality you can trust,
                            performance you can measure.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Products</h4>
                        <a href="#products">Filter Cartridges</a>
                        <a href="#products">Filter Housings</a>
                        <a href="#products">RO Membranes</a>
                        <a href="#products">Air Filtration</a>
                        <a href="#products">Dust Collection</a>
                        <a href="#products">Oil Filtration</a>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#about">About Us</a>
                        <a href="#products">Our Products</a>
                        <a href="#contact">Contact</a>
                        <a href="#home">Careers</a>
                    </div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <a href="#contact">Technical Help</a>
                        <a href="#contact">Request Quote</a>
                        <a href="#contact">Installation</a>
                        <a href="#contact">Maintenance</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Smart Aqua Technologies. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#home">Privacy Policy</a>
                        <a href="#home">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
