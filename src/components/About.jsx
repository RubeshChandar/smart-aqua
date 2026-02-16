import './About.css';

const features = [
    { icon: '🏭', title: 'Industrial Grade', desc: 'Built for 24/7 factory operation' },
    { icon: '🔬', title: 'Lab Tested', desc: 'Every batch quality certified' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Pan-India logistics network' },
    { icon: '🛠️', title: 'Custom Solutions', desc: 'Engineered to your specs' },
    { icon: '🌊', title: 'High Flow Rate', desc: 'Minimal pressure drop design' },
    { icon: '🤝', title: 'Expert Support', desc: 'Dedicated technical team' },
];

const expertise = [
    'WTP/RO Plants in Turnkey Basis',
    'Filtration Systems in Water (RO, WTP, STP)',
    'Oil (Hydraulic Oil & Coolant Filtration)',
    'AHU Filters',
    'Dust Collectors — Air, Gas, Powder',
    'All Critical Filter Applications',
    'Swimming Pools & Accessories',
    'Chemicals (Bulk Drugs & Pharmaceuticals)',
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src="/images/hero-bg.png" alt="Smart Aqua product range" />
                    </div>

                    <div className="about-text">
                        <h2>
                            Why Choose{' '}
                            <span className="highlight">Smart Aqua?</span>
                        </h2>
                        <p>
                            With over 15 years of expertise in industrial water, air, and
                            process filtration, we combine cutting-edge technology with
                            unmatched service — covering filter cartridges, RO membranes,
                            air filtration, dust collection, and oil filtration systems.
                        </p>

                        <div className="features-grid">
                            {features.map((f) => (
                                <div className="feature-item" key={f.title}>
                                    <div className="feature-icon">{f.icon}</div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Leadership */}
                <div className="leadership">
                    <div className="section-heading">
                        <h2>Our Leadership</h2>
                        <p>Guided by 30 years of industry expertise</p>
                    </div>

                    <div className="leader-card glass-card">
                        <div className="leader-photo">
                            <img src="/images/md-rajkumar.jpg" alt="Mr. Rajkumar Muthusamy" />
                        </div>
                        <div className="leader-info">
                            <h3>Mr. Rajkumar Muthusamy</h3>
                            <span className="leader-title">Managing Partner</span>
                            <p className="leader-bio">
                                30 years of experience in Marketing, Business Development, and
                                Administration across water treatment, industrial filtration,
                                and process engineering sectors.
                            </p>

                            <div className="expertise-grid">
                                {expertise.map((e) => (
                                    <div className="expertise-item" key={e}>
                                        <span className="expertise-dot">●</span> {e}
                                    </div>
                                ))}
                            </div>

                            <div className="leader-contact">
                                <a href="tel:04442808146" className="leader-contact-item">
                                    <span>📞</span> 044-4280 8146
                                </a>
                                <a href="tel:9382382318" className="leader-contact-item">
                                    <span>📱</span> 9382382318
                                </a>
                                <a href="tel:9382382312" className="leader-contact-item">
                                    <span>📱</span> 9382382312
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
