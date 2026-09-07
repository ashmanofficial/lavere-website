import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Sofa, Bath, Palette, Wrench, Grid, RefreshCw, Hammer, Layers } from 'lucide-react';

export default function LavereWebsite() {
  const brandColor = '#6D6A7D'; // Muted purple-gray
  const bgColor = '#F0F0E8'; // Warm cream/beige
  const accentColor = '#FAFAF8'; // Light accent
  const darkText = '#6D6A7D'; // Brand color for all text
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    { 
      name: 'Property Renovations', 
      icon: Hammer,
      description: 'Complete room transformations, property upgrades and multi-trade renovation works tailored to your space.'
    },
    { 
      name: 'Painting & Decorating', 
      icon: Palette,
      description: 'Interior painting, feature walls, wallpapering and detailed finishing work.'
    },
    { 
      name: 'Flooring', 
      icon: Layers,
      description: 'Professional installation of laminate, LVT, vinyl and other flooring solutions.'
    },
    { 
      name: 'Kitchen & Bathroom', 
      icon: Bath,
      description: 'Repairs, upgrades, resealing, fittings, fixtures and cosmetic improvements.'
    },
    { 
      name: 'Repairs & Maintenance', 
      icon: Wrench,
      description: 'From small jobs to larger property maintenance requirements—we handle it all.'
    },
    { 
      name: 'Tiling', 
      icon: Grid,
      description: 'Professional tiling work for kitchens, bathrooms and feature walls.'
    },
    { 
      name: 'Fixtures & Fittings', 
      icon: Sofa,
      description: 'TV mounting, mirrors, shelving, curtain rails, blinds and all fixtures installed correctly.'
    },
    { 
      name: 'General Carpentry', 
      icon: RefreshCw,
      description: 'Wall panelling, shelving, doors, frames, boxing-in and bespoke timber projects.'
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://formsubmit.co/ashley.thompson@lavere.co.uk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        _subject: `New Enquiry from ${formData.name}`
      })
    }).then(response => {
      alert('Thank you for your enquiry! We will be in touch shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }).catch(error => {
      alert('There was an error sending your enquiry. Please try again.');
    });
  };

  return (
    <div className="w-full" style={{ backgroundColor: bgColor, color: darkText }}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: `rgba(240, 240, 232, 0.98)`, borderColor: 'rgba(109, 106, 125, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.3em]" style={{ color: brandColor }}>LAVERE</div>
          
          <div className="hidden md:flex gap-12 text-xs tracking-widest opacity-70 hover:opacity-100 transition">
            <a href="#services" className="hover:text-gray-900 transition">SERVICES</a>
            <a href="#enquiry" className="hover:text-gray-900 transition">ENQUIRY</a>
            <a href="#contact" className="hover:text-gray-900 transition">CONTACT</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t" style={{ backgroundColor: accentColor, borderColor: `rgba(109, 106, 125, 0.2)` }}>
            <a href="#services" className="block px-6 py-4 text-sm tracking-widest opacity-70 hover:opacity-100">SERVICES</a>
            <a href="#enquiry" className="block px-6 py-4 text-sm tracking-widest opacity-70 hover:opacity-100">ENQUIRY</a>
            <a href="#contact" className="block px-6 py-4 text-sm tracking-widest opacity-70 hover:opacity-100">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 md:py-40" style={{ backgroundColor: bgColor }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${brandColor} 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-8 px-6 py-2 rounded-full border text-xs tracking-widest font-light" style={{ borderColor: brandColor, color: brandColor }}>PROPERTY RENOVATION & MAINTENANCE</div>
            
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight" style={{ color: darkText, letterSpacing: '-0.02em' }}>
              Your Property. Our Priority.
            </h1>
            
            <p className="text-lg md:text-xl mb-12 opacity-70 leading-relaxed">
              Reliable, high-quality renovation, maintenance and home improvement services tailored to your home. From complete transformations to everyday repairs—we deliver quality workmanship with meticulous attention to detail.
            </p>

            <a href="#enquiry" className="inline-block px-10 py-4 border-2 rounded-lg transition duration-300 text-sm tracking-widest font-light hover:shadow-lg" style={{ borderColor: brandColor, color: brandColor, backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.target.style.backgroundColor = brandColor; e.target.style.color = bgColor; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = brandColor; }}>
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ color: darkText, letterSpacing: '-0.02em' }}>What We Do</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">From complete renovations to everyday repairs and installations—one service for everything</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ name, icon: Icon, description }, idx) => (
              <div 
                key={idx} 
                onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                className="group p-8 rounded-lg transition duration-300 cursor-pointer border hover:border-opacity-100 relative overflow-hidden" 
                style={{ backgroundColor: 'white', borderColor: brandColor, borderWidth: '1px', borderOpacity: '0.3' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition" style={{ background: `linear-gradient(135deg, ${brandColor}, transparent)` }}></div>
                <Icon size={40} className="mb-6 relative z-10 transition group-hover:scale-110" style={{ color: brandColor }} />
                <h3 className="text-lg font-light relative z-10 group-hover:opacity-80 transition" style={{ color: brandColor, letterSpacing: '-0.01em' }}>{name}</h3>
                
                {expandedService === idx && (
                  <div className="mt-4 pt-4 border-t relative z-10" style={{ borderColor: `${brandColor}40` }}>
                    <p className="text-sm leading-relaxed" style={{ color: brandColor, opacity: 0.8 }}>
                      {description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lavere Section */}
      <section className="py-32" style={{ backgroundColor: bgColor }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ color: darkText, letterSpacing: '-0.02em' }}>Why Choose Lavere?</h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">We approach every project with the same focus: quality workmanship, careful execution and a finish built to last</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="border-l-2 pl-8" style={{ borderColor: brandColor }}>
              <h3 className="text-xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.01em' }}>Experienced</h3>
              <p className="opacity-70 text-lg leading-relaxed">Over 7 years of hands-on property renovation and maintenance experience across London homes.</p>
            </div>
            <div className="border-l-2 pl-8" style={{ borderColor: brandColor }}>
              <h3 className="text-xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.01em' }}>Versatile</h3>
              <p className="opacity-70 text-lg leading-relaxed">One service for everything from small repairs to larger renovation projects—no job too small or too big.</p>
            </div>
            <div className="border-l-2 pl-8" style={{ borderColor: brandColor }}>
              <h3 className="text-xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.01em' }}>Detail Focused</h3>
              <p className="opacity-70 text-lg leading-relaxed">Measurements, preparation and finishing are treated with the attention they deserve.</p>
            </div>
            <div className="border-l-2 pl-8" style={{ borderColor: brandColor }}>
              <h3 className="text-xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.01em' }}>Reliable</h3>
              <p className="opacity-70 text-lg leading-relaxed">Clear communication, punctual attendance and respect for your property at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32" style={{ backgroundColor: accentColor }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center md:text-left">
              <div className="text-6xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.02em' }}>250+</div>
              <h3 className="text-lg font-light mb-2" style={{ color: darkText, letterSpacing: '-0.01em' }}>Satisfied Clients</h3>
              <p className="text-sm opacity-60">Trusted by London homeowners for quality work</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.02em' }}>7+</div>
              <h3 className="text-lg font-light mb-2" style={{ color: darkText, letterSpacing: '-0.01em' }}>Years Crafting Excellence</h3>
              <p className="text-sm opacity-60">Proven experience across all project types</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl font-light mb-4" style={{ color: brandColor, letterSpacing: '-0.02em' }}>100%</div>
              <h3 className="text-lg font-light mb-2" style={{ color: darkText, letterSpacing: '-0.01em' }}>Built to Last</h3>
              <p className="text-sm opacity-60">Quality finishes that stand the test of time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-32" style={{ backgroundColor: bgColor }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ color: darkText, letterSpacing: '-0.02em' }}>Have a Project in Mind?</h2>
            <p className="text-lg opacity-70">Tell us what you want to achieve and we'll help determine the best way to bring it to life</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 transition" 
                style={{ backgroundColor: 'white', borderColor: `${brandColor}40`, color: darkText, outlineColor: brandColor }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ backgroundColor: 'white', borderColor: `${brandColor}40`, color: darkText, outlineColor: brandColor }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ backgroundColor: 'white', borderColor: `${brandColor}40`, color: darkText, outlineColor: brandColor }}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                required
                className="px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 transition"
                style={{ backgroundColor: 'white', borderColor: `${brandColor}40`, color: darkText, outlineColor: brandColor }}
              >
                <option value="" style={{ backgroundColor: 'white', color: darkText }}>Select a Service</option>
                {services.map(({ name }, idx) => (
                  <option key={idx} value={name} style={{ backgroundColor: 'white', color: darkText }}>{name}</option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleFormChange}
              required
              rows="5"
              className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 transition resize-none"
              style={{ backgroundColor: 'white', borderColor: `${brandColor}40`, color: darkText, outlineColor: brandColor }}
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 text-sm tracking-widest font-light rounded-lg transition duration-300 border-2"
              style={{ borderColor: brandColor, color: brandColor, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = brandColor; e.target.style.color = bgColor; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = brandColor; }}
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </section>

{/* Contact Info */}
<section id="contact" className="py-32" style={{ backgroundColor: accentColor }}>
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-5xl md:text-6xl font-light text-center mb-20" style={{ color: darkText, letterSpacing: '-0.02em' }}>Get In Touch</h2>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
      <a href="tel:+442871837136" className="group p-8 rounded-lg transition border text-center" style={{ borderColor: `${brandColor}40`, backgroundColor: 'white' }}>
        <Phone className="mx-auto mb-6 group-hover:scale-110 transition" size={32} style={{ color: brandColor }} />
        <h3 className="font-light text-lg mb-3" style={{ color: darkText, letterSpacing: '-0.01em' }}>Phone</h3>
        <p className="text-sm opacity-70">+44 (0)78 1837 1360</p>
      </a>

      <a href="mailto:contact@lavere.co.uk" className="group p-8 rounded-lg transition border text-center" style={{ borderColor: `${brandColor}40`, backgroundColor: 'white' }}>
        <Mail className="mx-auto mb-6 group-hover:scale-110 transition" size={32} style={{ color: brandColor }} />
        <h3 className="font-light text-lg mb-3" style={{ color: darkText, letterSpacing: '-0.01em' }}>Email</h3>
        <p className="text-sm opacity-70">contact@lavere.co.uk</p>
      </a>

      <div className="group p-8 rounded-lg transition border text-center" style={{ borderColor: `${brandColor}40`, backgroundColor: 'white' }}>
        <MapPin className="mx-auto mb-6 group-hover:scale-110 transition" size={32} style={{ color: brandColor }} />
        <h3 className="font-light text-lg mb-3" style={{ color: darkText, letterSpacing: '-0.01em' }}>Location</h3>
        <p className="text-sm opacity-70">London, UK</p>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="group p-8 rounded-lg transition border text-center max-w-sm" style={{ borderColor: `${brandColor}40`, backgroundColor: 'white' }}>
        <h3 className="font-light text-lg mb-6" style={{ color: darkText, letterSpacing: '-0.01em' }}>Follow Us</h3>
        <div className="flex gap-8 justify-center">
          <a href="https://instagram.com/LavereUK" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
            <p className="text-xs mt-3" style={{ color: brandColor }}>@LavereUK</p>
          </a>
          <a href="https://tiktok.com/@LavereUK" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.5">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
            <p className="text-xs mt-3" style={{ color: brandColor }}>@LavereUK</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: bgColor, borderColor: `${brandColor}20` }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-3 text-sm tracking-widest">
            <span className="font-light" style={{ color: brandColor }}>LAVERE</span> — PROPERTY RENOVATION • MAINTENANCE • HOME IMPROVEMENTS
          </p>
          <p className="text-xs opacity-50 tracking-wide" style={{ color: darkText }}>© 2026 Lavere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
