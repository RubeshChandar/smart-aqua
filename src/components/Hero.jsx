import './Hero.css';

const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 30 + Math.random() * 80,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 10,
}));

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bubbles">
                {bubbles.map((b) => (
                    <div
                        key={b.id}
                        className="bubble"
                        style={{
                            width: b.size,
                            height: b.size,
                            left: `${b.left}%`,
                            animationDelay: `${b.delay}s`,
                            animationDuration: `${b.duration}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span>●</span> Trusted by 500+ Industries
                        </div>
                        <h1>
                            Industrial-Grade{' '}
                            <span className="highlight">Filtration</span>{' '}
                            Solutions
                        </h1>
                        <p>
                            Smart Aqua Technologies delivers high-performance filtration
                            systems — from micron-level liquid filtration to HEPA air
                            purification and heavy-duty dust collection — covering the
                            entire filtration ecosystem for industries across India.
                        </p>
                        <div className="hero-actions">
                            <a href="#products" className="btn-primary">
                                Explore Products ↓
                            </a>
                            <a href="#contact" className="btn-secondary">
                                Request a Quote
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src="/images/logo.jpg" alt="Smart Aqua Technologies" />
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <strong>500+</strong>
                        <span>Clients Served</span>
                    </div>
                    <div className="hero-stat">
                        <strong>15+</strong>
                        <span>Years Experience</span>
                    </div>
                    <div className="hero-stat">
                        <strong>50+</strong>
                        <span>Filter Models</span>
                    </div>
                    <div className="hero-stat">
                        <strong>99.9%</strong>
                        <span>Purity Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
