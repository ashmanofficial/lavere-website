import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function LavereWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    service: '',
    message: ''
  });

  const testimonials = [
    {
      quote: "Lavere has been a game-changer for my home. Their versatility and expertise have been invaluable.",
      author: "Olivia Martinez",
      role: "Homeowner",
    },
    {
      quote: "Reliable and efficient! The staff was incredibly polite and went above and beyond to ensure satisfaction.",
      author: "Michael Chen",
      role: "Property Manager",
    },
    {
      quote: "Exceptional customer service! They handled our urgent renovation with professionalism and care.",
      author: "Sophia Turner",
      role: "Homeowner",
    },
  ];

  const services = [
    "Consulting",
    "Tiling",
    "Flooring",
    "Painting & Decoration",
    "Cleaning",
    "Renovating",
    "Plumbing",
    "Repairing",
    "Restoring",
    "Interior Design"
  ];

  const projects = [
    {
      title: "Modern Kitchen Transformation",
      service: "Interior Design",
      description: "Complete kitchen redesign with bespoke cabinetry and premium finishes"
    },
    {
      title: "Luxury Bathroom Suite",
      service: "Tiling & Plumbing",
      description: "High-end bathroom renovation with marble and contemporary fixtures"
    },
    {
      title: "Open Plan Living",
      service: "Renovation",
      description: "Structural redesign creating seamless entertaining spaces"
    },
    {
      title: "Heritage Property Restoration",
      service: "Restoring",
      description: "Careful restoration preserving period features with modern comfort"
    },
    {
      title: "Bedroom Suite Design",
      service: "Interior Design",
      description: "Bespoke bedroom and ensuite with integrated storage solutions"
    },
    {
      title: "Commercial Office Fit-out",
      service: "Renovation",
      description: "Complete office transformation with contemporary design"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "We meet to understand your vision, requirements, and budget for the project."
    },
    {
      number: "2",
      title: "Design & Quote",
      description: "Professional design proposal and detailed quote tailored to your needs."
    },
    {
      number: "3",
      title: "Execution",
      description: "Our expert team delivers flawless craftsmanship from start to finish."
    }
  ];

  const handleTestimonialChange = (direction) => {
    if (direction === 'next') {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', budget: '', service: '', message: '' });
  };

  return (
    <div className="w-full bg-white text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight" style={{ color: '#1a1a1a' }}>LAVERE</div>
          <div className="hidden md:flex gap-12">
            <a href="#projects" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">Work</a>
            <a href="#process" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">Process</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-32 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: '#d4a574' }}>Luxury Renovations</p>
              <h1 className="text-6xl font-bold leading-tight mb-8 tracking-tight">
                Transforming spaces with exceptional craftsmanship.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We bring your vision to life with meticulous attention to detail, premium finishes, and a commitment to excellence.
              </p>
              <button className="bg-gray-900 text-white px-10 py-4 font-semibold hover:bg-gray-800 transition flex items-center gap-2 text-lg">
                Start Your Project <ArrowRight size={20} />
              </button>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-12 h-96 flex items-center justify-center border border-gray-200">
              <div className="text-gray-400 text-center">
                <p className="text-lg">Your featured project image here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a574' }}>Our Work</p>
            <h2 className="text-5xl font-bold mb-6">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl">Showcasing our most refined renovations and transformations across London.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl h-80 mb-6 border border-gray-200 flex items-center justify-center overflow-hidden hover:border-gray-300 transition">
                  <div className="text-gray-400 text-center group-hover:scale-105 transition duration-300">
                    <p className="text-lg">{project.title}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold tracking-wide uppercase mb-3" style={{ color: '#d4a574' }}>{project.service}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition">{project.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lavere */}
      <section className="py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a574' }}>Why Lavere</p>
          <h2 className="text-5xl font-bold mb-20">Why Homeowners Choose Us</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f1e8' }}>
                  <span className="text-2xl font-bold" style={{ color: '#d4a574' }}>01</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Decades of combined experience delivering luxury finishes and premium quality workmanship on every project.</p>
            </div>
            <div>
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f1e8' }}>
                  <span className="text-2xl font-bold" style={{ color: '#d4a574' }}>02</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Seamless Process</h3>
              <p className="text-gray-600 text-lg leading-relaxed">From initial consultation to project completion, we manage every detail for a stress-free experience.</p>
            </div>
            <div>
              <div className="mb-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#f5f1e8' }}>
                  <span className="text-2xl font-bold" style={{ color: '#d4a574' }}>03</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Results</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Handpicked materials, attention to detail, and flawless execution on every renovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a574' }}>How We Work</p>
          <h2 className="text-5xl font-bold mb-20">Our Process</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-900 text-white font-bold text-2xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="absolute top-20 -right-8 hidden md:block">
                    <ArrowRight className="text-gray-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: '#d4a574' }}>Client Reviews</p>
          <h2 className="text-4xl font-bold mb-20 text-center">Trusted by Homeowners</h2>
          
          <div className="bg-white p-12 rounded-2xl border border-gray-200">
            <div className="mb-8">
              <div className="text-amber-500 text-4xl mb-6">★★★★★</div>
              <p className="text-2xl text-gray-900 mb-8 leading-relaxed">"{testimonials[currentTestimonial].quote}"</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].author}</p>
              <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleTestimonialChange('prev')}
              className="p-3 rounded-full border border-gray-300 hover:bg-white transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleTestimonialChange('next')}
              className="p-3 rounded-full border border-gray-300 hover:bg-white transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a574' }}>Services</p>
          <h2 className="text-4xl font-bold mb-16">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center hover:border-gray-300 transition">
                <p className="font-semibold text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4a574' }}>Let's Talk</p>
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">Tell us about your project, and we'll provide a consultation and personalized quote.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:bg-gray-750"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:bg-gray-750"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:bg-gray-750"
                  placeholder="+44 (0) 123 456 7890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:bg-gray-750"
                  placeholder="£5,000 - £50,000+"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:bg-gray-750"
              >
                <option value="">Select a service</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 focus:bg-gray-750"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button
              type="submit"
              className="w-full text-lg font-semibold py-4 rounded-lg transition"
              style={{ backgroundColor: '#d4a574', color: '#1a1a1a' }}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Schedule Consultation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">LAVERE</h3>
              <p className="text-sm leading-relaxed">Premium home renovation and design services across London.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#projects" className="hover:text-white transition">Our Work</a></li>
                <li><a href="#process" className="hover:text-white transition">Process</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#contact" className="hover:text-white transition">Interior Design</a></li>
                <li><a href="#contact" className="hover:text-white transition">Renovations</a></li>
                <li><a href="#contact" className="hover:text-white transition">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><Mail size={16} /> hello@lavere.co.uk</li>
                <li className="flex gap-2"><Phone size={16} /> +44 (0) 123 456 7890</li>
                <li className="flex gap-2"><MapPin size={16} /> London, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Lavere. All rights reserved. Premium renovations for discerning homeowners.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}  ];

  const handleTestimonialChange = (direction) => {
    if (direction === 'next') {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', budget: '', service: '', message: '' });
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Lavere</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-4">Trusted by 100+ homeowners across London</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stress-free renovations by London's trusted experts in design & repair.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Home renovation company based in the heart of London, for all your service management needs from interior design to flooring and repair.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">What sets us apart</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Bringing expert craftsmanship to every project.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">All-in-one team</h3>
              <p className="text-gray-600">No juggling tradespeople. Our experts handle everything — from plumbing and flooring to full interior redesign — all managed under one roof.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">On time, no drama</h3>
              <p className="text-gray-600">Renovations can be disruptive, but with us, you can expect a smooth and efficient process. Our team is dedicated to completing projects within agreed timelines.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">Flawless finish</h3>
              <p className="text-gray-600">At Lavere, we pride ourselves on delivering top-notch craftsmanship. Our commitment to excellence ensures that every detail of your renovation is executed with precision and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Renovation services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-gray-200 text-center hover:shadow-md transition">
                <p className="font-semibold text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">The Lavere process</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Some of our excellent reviews</h2>
          
          <div className="relative">
            <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm border border-gray-200">
              <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].quote}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => handleTestimonialChange('prev')}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleTestimonialChange('next')}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Get in touch, let's work together.</h2>
          <p className="text-gray-600 text-center mb-12">We're excited to learn about your project.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="+44 (0) 123 456 7890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="£5,000 - £50,000+"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Renovation service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="">Select a service</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lavere</h3>
              <p className="text-gray-400">Expert home renovation and design services across London.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About us</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Interior Design</a></li>
                <li><a href="#services" className="hover:text-white transition">Flooring</a></li>
                <li><a href="#services" className="hover:text-white transition">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex gap-2"><Mail size={18} /> hello@lavere.co.uk</li>
                <li className="flex gap-2"><Phone size={18} /> +44 (0) 123 456 7890</li>
                <li className="flex gap-2"><MapPin size={18} /> London, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lavere. All rights reserved. Bringing expert craftsmanship to every project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
