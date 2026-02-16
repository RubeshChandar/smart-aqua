import { useState } from 'react';
import './Products.css';

const categories = [
    {
        id: 'cartridges',
        label: 'Filter Cartridges',
        icon: '🔵',
        image: '/images/cat-cartridges.png',
        description: 'Liquid filtration cartridges for every application — from sediment removal to fine chemical processing.',
        products: [
            { name: 'PP Spun Filter Cartridges', tag: 'Sediment Removal', desc: '100% polypropylene depth filters with graded pore structure. No adhesives or binders. Sizes: 5" to 50".', benefits: ['Extended service life', 'Chemical resistant', 'Excellent sediment retention'] },
            { name: 'PP Wound Filter Cartridges', tag: 'High Dirt-Load', desc: 'Precision-wound polypropylene yarn cartridges for wide particle size removal in high dirt-load environments.', benefits: ['High dirt-holding capacity', 'Suitable for high flow rates', 'Industrial pre-filtration'] },
            { name: 'Pleated Filter Cartridges', tag: 'Fine Filtration', desc: 'Pleated polypropylene media with increased surface area. Available in 10" to 40" with or without cage.', benefits: ['High flow rates', 'Washable & reusable', 'Lower pressure drop'] },
            { name: 'High Flow Cartridges', tag: 'Large Volume', desc: 'Designed to reduce cartridge change-outs in high-flow applications with fewer cartridges required.', benefits: ['Fewer cartridges needed', 'Low pressure drop', 'High-flow compatible'] },
            { name: 'Activated Carbon Cartridges', tag: 'Chemical Removal', desc: 'Granular or carbon block type for chlorine, odor & organic removal in potable & process water.', benefits: ['Enhanced adsorption', 'Improves taste & odor', 'Potable water safe'] },
            { name: 'Resin Bonded Cartridges', tag: 'High Temp', desc: 'Rigid construction for viscous & high-temperature fluids. Excellent for oil and specialized filtration.', benefits: ['High dirt capacity', 'Oil filtration', 'Strong structural integrity'] },
            { name: 'SS Filter Cartridges', tag: 'Heavy Duty', desc: 'Reusable stainless steel 316L cartridges for high pressure & temperature filtration applications.', benefits: ['Corrosion-resistant', 'Chemical resistant', 'Long service life'] },
            { name: 'SS Sintered Cartridges', tag: 'Precision', desc: 'Metal powder-based depth filtration for demanding industrial conditions. Regenerable via backflushing.', benefits: ['Withstands high pressure', 'Regenerable', 'Precision filtration'] },
            { name: 'Bag Filters', tag: 'Coarse Filtration', desc: 'Fabric-based filtration in PP & polyester options for high-volume industrial liquid systems.', benefits: ['High dirt-holding capacity', 'Quick replacement', 'Multiple material options'] },
            { name: 'Washable Pleated Cartridges', tag: 'Reusable', desc: 'Reusable, economical solution for light to medium load filtration with extended operational life.', benefits: ['Easy cleaning', 'Durable construction', 'Reduced replacement costs'] },
        ],
    },
    {
        id: 'housings',
        label: 'Filter Housings',
        icon: '🏗️',
        image: '/images/cat-housings.png',
        description: 'Robust filter housings in PP, UPVC, and stainless steel for cartridge and bag filter systems.',
        products: [
            { name: 'PP Filter & Bag Housing', tag: 'Lightweight', desc: 'Corrosion-resistant polypropylene housings ideal for RO, DM, and softening plants.', benefits: ['Easy installation', 'Cost-effective', 'Low to medium pressure'] },
            { name: 'UPVC Filter & Bag Housing', tag: 'Chemical Grade', desc: 'Rigid industrial-grade UPVC housing for chemical and process systems with leak-proof design.', benefits: ['High chemical resistance', 'Leak-proof', 'Low maintenance'] },
            { name: 'SS Bag Filter Housing', tag: 'Heavy Duty', desc: 'Stainless steel 304/316 housing for high-pressure industrial systems with long operational life.', benefits: ['SS 304/316 construction', 'Long operational life', 'Process industry grade'] },
            { name: 'SS Multi-Cartridge Housing', tag: 'High Volume', desc: 'Engineered for high-volume industrial filtration supporting multiple cartridge types.', benefits: ['Corrosion-resistant', 'High flow handling', 'Easy cartridge replacement'] },
        ],
    },
    {
        id: 'ro',
        label: 'RO Membranes',
        icon: '💧',
        image: '/images/cat-ro.png',
        description: 'Thin-film composite membranes from leading global brands for desalination and purification.',
        products: [
            { name: 'Dow / Filmtec Membranes', tag: 'Premium', desc: 'Industry-leading thin-film composite RO membranes with high salt rejection and long membrane life.', benefits: ['High salt rejection', 'Long membrane life', 'Standard housing compatibility'] },
            { name: 'Hydranautics Membranes', tag: 'High Performance', desc: 'Advanced RO membranes designed for consistent performance in industrial desalination systems.', benefits: ['Consistent performance', 'Wide compatibility', 'Energy efficient'] },
            { name: 'Toray Membranes', tag: 'Reliable', desc: 'Japanese-engineered membranes trusted globally for water purification and desalination.', benefits: ['High rejection rates', 'Durable construction', 'Global standard'] },
            { name: 'Emen Membranes', tag: 'Value', desc: 'Cost-effective RO membrane solutions for commercial and light industrial purification systems.', benefits: ['Affordable', 'Reliable performance', 'Easy replacement'] },
        ],
    },
    {
        id: 'speciality',
        label: 'Speciality Filters',
        icon: '🔬',
        image: '/images/cat-speciality.png',
        description: 'Precision and specialty filtration for laboratory, irrigation, and process-critical applications.',
        products: [
            { name: 'Capsule & Inkjet Filters', tag: 'Lab Grade', desc: 'Pre-sterilized compact filters for laboratory and precision applications. Disposable with high throughput.', benefits: ['Disposable', 'High throughput', 'Sterile filtration'] },
            { name: 'Y Type Disc Filter', tag: 'Irrigation', desc: 'Stacked disc filtration in Y-body design for irrigation and industrial water lines.', benefits: ['High dirt capacity', 'Easy cleaning', 'Corrosion-resistant'] },
            { name: 'T Type Disc Filter', tag: 'Drip Systems', desc: 'Surface filtration via stacked discs. Reusable with quick flushing for drip irrigation systems.', benefits: ['Reusable', 'Quick flushing', 'Irrigation optimized'] },
        ],
    },
    {
        id: 'air',
        label: 'Air Filtration',
        icon: '🌬️',
        image: '/images/cat-air.png',
        description: 'Complete air filtration systems from pre-filters to HEPA for cleanrooms, HVAC, and industrial environments.',
        products: [
            { name: 'HEPA Filters', tag: '99.97% Efficiency', desc: 'Captures 99.97% of airborne particles ≥ 0.3 microns. For cleanrooms, pharma, and hospitals.', benefits: ['Ultra-high efficiency', 'Low pressure drop', 'Long service life'] },
            { name: 'Fine Filters', tag: 'HVAC', desc: 'For HVAC systems capturing fine dust and pollen with high dust capacity and energy efficiency.', benefits: ['High dust capacity', 'Energy efficient', 'Stable airflow'] },
            { name: 'Pocket Filters', tag: 'High Capacity', desc: 'Extended pocket design for high capacity filtration in commercial and industrial HVAC systems.', benefits: ['Extended surface area', 'Low resistance', 'Long intervals'] },
            { name: 'Pre Filters', tag: 'First Stage', desc: 'Primary stage filtration extending downstream filter life in multi-stage air handling systems.', benefits: ['Protects main filters', 'Cost-effective', 'Easy replacement'] },
            { name: 'Wadding Air Filters', tag: 'Washable', desc: 'Washable synthetic media for coarse dust filtration. Economical and reusable.', benefits: ['Washable', 'Reusable', 'Coarse filtration'] },
            { name: 'Foam Air Filters', tag: 'Pre-Filtration', desc: 'Flexible foam structure for pre-filtration in industrial and commercial air systems.', benefits: ['Flexible design', 'Easy to cut', 'Pre-filtration'] },
            { name: 'Gas Filters', tag: 'Industrial Gas', desc: 'Removes contaminants from industrial gas streams for safe and clean operations.', benefits: ['Gas purification', 'Industrial grade', 'Contamination control'] },
        ],
    },
    {
        id: 'dust',
        label: 'Dust Collection',
        icon: '🏭',
        image: '/images/cat-dust.png',
        description: 'Heavy-duty dust collection systems, filter bags, and accessories for industrial environments.',
        products: [
            { name: 'Dust Collector Air Filters', tag: 'Industrial', desc: 'Ensures clean exhaust air in manufacturing and industrial environments.', benefits: ['Clean exhaust', 'High efficiency', 'Industrial grade'] },
            { name: 'Nomex Filter Bags', tag: 'High Temp', desc: 'High-temperature resistant dust collection bags for demanding thermal environments.', benefits: ['Heat resistant', 'Durable fabric', 'Long service life'] },
            { name: 'Polyester Filter Bags', tag: 'Cost Effective', desc: 'Economical industrial dust collection solution with reliable performance.', benefits: ['Affordable', 'Good filtration', 'Widely compatible'] },
            { name: 'Venturi Systems', tag: 'Cleaning', desc: 'Enhances dust collector cleaning efficiency with pulse-jet technology.', benefits: ['Efficient cleaning', 'Extends bag life', 'Easy installation'] },
            { name: 'Cage Structures', tag: 'Support', desc: 'Metal support frameworks for bag filters ensuring proper bag shape and airflow.', benefits: ['Strong support', 'Proper airflow', 'Durable metal'] },
        ],
    },
    {
        id: 'oil',
        label: 'Oil Filtration',
        icon: '⚙️',
        image: '/images/cat-oil.png',
        description: 'Filtration solutions for machinery oil, hydraulic systems, and industrial coolant applications.',
        products: [
            { name: 'Oil Filters', tag: 'Machinery', desc: 'Removes contaminants from machinery oil to extend equipment life and performance.', benefits: ['Contamination removal', 'Equipment protection', 'Extended oil life'] },
            { name: 'Hydraulic Filters', tag: 'Hydraulic Systems', desc: 'Maintains hydraulic system cleanliness for reliable operation and component protection.', benefits: ['System cleanliness', 'Component protection', 'Reliable operation'] },
            { name: 'Hydraulic Bypass Filters', tag: 'Secondary', desc: 'Secondary protection during high contamination events in hydraulic systems.', benefits: ['Backup protection', 'High contamination handling', 'System safety'] },
            { name: 'Suction Filters', tag: 'Pump Protection', desc: 'Pump inlet protection filters preventing debris from entering critical pump components.', benefits: ['Pump protection', 'Debris prevention', 'Easy maintenance'] },
            { name: 'Coolant Oil Paper', tag: 'Machine Coolant', desc: 'Specialized paper media for machine coolant filtration in CNC and grinding operations.', benefits: ['Precision filtration', 'Machine grade', 'Easy replacement'] },
        ],
    },
    {
        id: 'liquid',
        label: 'Liquid Systems',
        icon: '🌊',
        image: '/images/cat-liquid.png',
        description: 'Complete liquid filtration systems including strainers, housings, and polishing filters.',
        products: [
            { name: 'Basket Strainers', tag: 'Pipeline', desc: 'Pipeline debris removal systems for protecting downstream equipment and processes.', benefits: ['Debris removal', 'Equipment protection', 'Easy basket cleaning'] },
            { name: 'Tube Filters', tag: 'Compact', desc: 'Compact cylindrical filtration solutions for space-constrained installations.', benefits: ['Space-efficient', 'Compact design', 'Easy maintenance'] },
            { name: 'Y-Type Strainers', tag: 'High Pressure', desc: 'Pressure-resistant pipeline strainers for continuous flow applications.', benefits: ['Pressure resistant', 'Continuous flow', 'Low maintenance'] },
            { name: 'Coolant Oil Filter Housing', tag: 'Corrosion-Free', desc: 'Leak-proof corrosion-resistant housing for coolant oil filtration systems.', benefits: ['Leak-proof', 'Corrosion-resistant', 'Reliable sealing'] },
            { name: 'Sparkle Filter Pads', tag: 'Polishing', desc: 'Final-stage polishing filtration for crystal-clear output in beverage and process applications.', benefits: ['Crystal-clear output', 'Final polishing', 'Premium quality'] },
            { name: 'Centrifuge Bag Filters', tag: 'Separation', desc: 'Used in solid-liquid separation for industrial processing and chemical applications.', benefits: ['Solid-liquid separation', 'Industrial grade', 'Chemical compatible'] },
        ],
    },
    {
        id: 'paint',
        label: 'Paint Arrest',
        icon: '🎨',
        image: '/images/cat-paint.png',
        description: 'Paint overspray capture and arrest filtration systems for spray booths and coating operations.',
        products: [
            { name: 'Andrea Filters', tag: 'Spray Booth', desc: 'High-efficiency paint overspray capture filters for spray booths and painting operations.', benefits: ['High capture efficiency', 'Spray booth optimized', 'Easy replacement'] },
            { name: 'Glass Fiber Media', tag: 'Fine Filtration', desc: 'Fine glass fiber filtration media for air and liquid systems requiring precision filtration.', benefits: ['Fine particle capture', 'Versatile use', 'High efficiency'] },
            { name: 'Paper Filters', tag: 'Disposable', desc: 'Disposable economical filtration media for paint overspray and general filtration.', benefits: ['Economical', 'Disposable', 'Easy handling'] },
            { name: 'Pleated Paint Filters', tag: 'High Capacity', desc: 'Increased surface area for high dust and overspray retention in industrial painting.', benefits: ['High retention', 'Extended life', 'Large surface area'] },
        ],
    },
];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('cartridges');
    const category = categories.find((c) => c.id === activeCategory);

    return (
        <section className="products section" id="products">
            <div className="container">
                <div className="section-heading">
                    <h2>Our Products</h2>
                    <p>
                        Advanced water, air & industrial filtration solutions engineered for
                        performance, durability, and compliance.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="category-tabs">
                    {categories.map((c) => (
                        <button
                            key={c.id}
                            className={`category-tab${activeCategory === c.id ? ' active' : ''}`}
                            onClick={() => setActiveCategory(c.id)}
                        >
                            <span className="tab-icon">{c.icon}</span>
                            <span className="tab-label">{c.label}</span>
                        </button>
                    ))}
                </div>

                {/* Category Banner */}
                <div className="category-banner">
                    <div className="category-banner-image">
                        <img src={category.image} alt={category.label} />
                    </div>
                    <div className="category-banner-text">
                        <h3>{category.label}</h3>
                        <p>{category.description}</p>
                    </div>
                </div>

                {/* Product Cards */}
                <div className="products-grid">
                    {category.products.map((p) => (
                        <div className="product-card glass-card" key={p.name}>
                            <div className="product-card-header">
                                <span className="product-card-tag">{p.tag}</span>
                            </div>
                            <h3>{p.name}</h3>
                            <p className="product-desc">{p.desc}</p>
                            <ul className="product-benefits">
                                {p.benefits.map((b) => (
                                    <li key={b}>
                                        <span className="benefit-check">✓</span> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
