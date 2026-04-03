import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Target, Eye, Award, Clock, Users, ChevronRight, Egg, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'home' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const NavLinks = () => (
    <>
      <button 
        onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
        className={`text-lg font-medium transition-colors ${currentPage === 'home' ? 'text-farm-gold' : 'text-white hover:text-farm-gold'}`}
      >
        Home
      </button>
      <button 
        onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
        className={`text-lg font-medium transition-colors ${currentPage === 'about' ? 'text-farm-gold' : 'text-white hover:text-farm-gold'}`}
      >
        About Us
      </button>
      <button 
        onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
        className={`text-lg font-medium transition-colors ${currentPage === 'contact' ? 'text-farm-gold' : 'text-white hover:text-farm-gold'}`}
      >
        Contact
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-farm-cream font-sans text-farm-dark">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-farm-brown/90 backdrop-blur-md border-b border-farm-gold/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-farm-gold">
              <Egg className="w-6 h-6 text-farm-gold" />
            </div>
            <span className="text-xl font-serif font-bold text-white tracking-tight">WISE EGGS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-farm-brown border-b border-farm-gold/20 p-6 flex flex-col gap-6 shadow-2xl"
            >
              <NavLinks />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <header className="relative h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/images/chickens-brown.jpeg" 
                    alt="Vibrant chickens on the farm" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-farm-dark/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-white"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-farm-gold/20 backdrop-blur-sm border border-farm-gold/30 rounded-full text-farm-gold font-bold text-sm uppercase tracking-widest mb-6">
                      <Egg size={16} /> Premium Poultry Farm
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                      Laid with <span className="text-farm-gold italic">Care</span>, Chosen with Purpose
                    </h1>
                    <p className="text-xl text-farm-cream/90 mb-10 leading-relaxed">
                      Experience the difference of farm-fresh eggs from our Lohmann Brown layers. 
                      Rooted in family legacy and rural empowerment.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => setCurrentPage('contact')}
                        className="px-8 py-4 bg-farm-gold text-farm-dark font-bold rounded-xl shadow-lg hover:bg-white transition-all flex items-center gap-2"
                      >
                        Order Now <ArrowRight size={20} />
                      </button>
                      <button 
                        onClick={() => setCurrentPage('about')}
                        className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                      >
                        Our Story
                      </button>
                    </div>
                  </motion.div>
                </div>
              </header>

              {/* Quick Stats / Features */}
              <section className="py-16 bg-white border-b border-farm-gold/10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-farm-cream rounded-2xl text-farm-gold">
                      <Award size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-farm-brown mb-2">Premium Quality</h3>
                      <p className="text-farm-dark/70">Highest standards of hen welfare and hygiene for every egg we produce.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-farm-cream rounded-2xl text-farm-gold">
                      <Clock size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-farm-brown mb-2">Farm Fresh</h3>
                      <p className="text-farm-dark/70">Direct from our farm to your table, ensuring maximum nutrition and taste.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-farm-cream rounded-2xl text-farm-gold">
                      <Users size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-farm-brown mb-2">Community Driven</h3>
                      <p className="text-farm-dark/70">Contributing to local food security and economic growth since 2024.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action Banner */}
              <section className="py-20 bg-farm-brown text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-4xl font-serif mb-6">Ready to taste the difference?</h2>
                  <p className="text-xl text-farm-cream/80 mb-10">Contact us today for bulk orders or local deliveries.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a 
                      href="tel:+27606446838" 
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-farm-gold text-farm-dark font-bold rounded-xl hover:scale-105 transition-transform"
                    >
                      <Phone size={24} /> +27 60 644 6838
                    </a>
                    <a 
                      href="https://wa.me/27606446838" 
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:scale-105 transition-transform"
                    >
                      <MessageCircle size={24} /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-6">
                      <h1 className="text-5xl font-serif text-farm-brown">The Founding Story</h1>
                      <div className="w-24 h-1 bg-farm-gold"></div>
                      <div className="text-lg leading-relaxed space-y-6 text-farm-dark/80">
                        <p>
                          Wise Eggs is a poultry enterprise established in 2024, grounded in the principles of discipline, family legacy, and rural empowerment. The business reflects a strategic transition from academic pursuit to sustainable entrepreneurship.
                        </p>
                        <p>
                          Founded by <span className="font-bold text-farm-brown">Owethu Wiseman Mamba</span>, the name "Wise Eggs" is derived from his middle name, symbolizing a thoughtful and informed approach to agriculture and food security. The venture was initiated through the use of NSFAS (National Student Financial Aid Scheme) funds as seed capital, demonstrating a strong commitment to innovation and self-reliance.
                        </p>
                        <p>
                          The foundation of Wise Eggs is reinforced by the support of family, particularly the contributions of his brother, <span className="font-bold text-farm-brown">Louise Phathisizwe Mondlane</span>, and his father, <span className="font-bold text-farm-brown">Kenneth Frans Mondlane</span>. Additionally, the business has benefited from mentorship and resources provided by the Lima Rural Development Foundation, strengthening its operational capacity.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-farm-gold/10">
                        <div className="w-12 h-12 bg-farm-cream rounded-full flex items-center justify-center text-farm-gold mb-6">
                          <Eye size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-farm-brown mb-4 uppercase tracking-wider">Vision</h3>
                        <p className="text-farm-dark/70">To become a leading agricultural provider in the region, recognized for excellence in poultry farming and sustainable practices.</p>
                      </div>
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-farm-gold/10">
                        <div className="w-12 h-12 bg-farm-cream rounded-full flex items-center justify-center text-farm-gold mb-6">
                          <Target size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-farm-brown mb-4 uppercase tracking-wider">Aim</h3>
                        <p className="text-farm-dark/70">To establish a sustainable poultry enterprise that contributes to local food security and economic growth.</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-8">
                    <div className="bg-white p-4 rounded-2xl shadow-2xl border-t-8 border-farm-gold">
                      <img 
                        src="/images/founder.jpeg" 
                        alt="Owethu Wiseman Mamba - Founder of Wise Eggs" 
                        className="w-full h-auto rounded-lg mb-6"
                      />
                      <div className="text-center">
                        <h3 className="text-xl font-serif font-bold text-farm-brown">Owethu Wiseman Mamba</h3>
                        <p className="text-farm-gold font-medium mb-4">Founder & Visionary</p>
                        <p className="text-sm text-farm-dark/60 leading-relaxed">
                          Establishing a thoughtful and informed approach to agriculture and food security since 2024.
                        </p>
                      </div>
                    </div>

                    <div className="bg-farm-brown p-8 rounded-2xl text-white">
                      <h3 className="text-xl font-serif font-bold mb-4">Our Mission</h3>
                      <p className="text-farm-cream/80 leading-relaxed italic">
                        "To produce premium quality eggs by maintaining the highest standards of hen welfare and hygiene, ensuring every household has access to nutritious food."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Livestock Gallery */}
                <div className="mt-24 space-y-12">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif text-farm-brown mb-4">Our Livestock</h2>
                    <p className="text-farm-dark/60 max-w-2xl mx-auto">
                      Take a look at our healthy Lohmann Brown layers and the next generation of Wise Eggs poultry.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        url: "/images/eggs.jpeg",
                        alt: "Fresh farm eggs",
                        title: "Our Premium Eggs"
                      },
                      {
                        url: "/images/chicken-close-up.jpeg",
                        alt: "Healthy brown chicken",
                        title: "Our Lohmann Brown Layers"
                      },
                      {
                        url: "/images/chickens-white-1.jpeg",
                        alt: "White chickens in coop",
                        title: "Farm Fresh Quality"
                      },
                      {
                        url: "/images/chickens-white-2.jpeg",
                        alt: "Chickens on the farm",
                        title: "Healthy Birds"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ y: -10 }}
                        className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={item.url} 
                            alt={item.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-farm-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <p className="text-white font-bold text-lg">{item.title}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-20"
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h1 className="text-5xl font-serif text-farm-brown mb-6">Get in Touch</h1>
                  <p className="text-xl text-farm-dark/70">We'd love to hear from you. Whether you're looking for a bulk order or just have a question about our farm.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  <div className="lg:col-span-5 space-y-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-farm-gold/10 space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-farm-cream rounded-2xl flex items-center justify-center text-farm-gold shrink-0">
                          <Phone size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-farm-brown">Call or WhatsApp</h4>
                          <a 
                            href="https://wa.me/27606446838" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg hover:text-farm-gold transition-colors"
                          >
                            +27 60 644 6838
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-farm-cream rounded-2xl flex items-center justify-center text-farm-gold shrink-0">
                          <Mail size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-farm-brown">Email Us</h4>
                          <p className="text-lg">info@wiseeggs.co.za</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-farm-cream rounded-2xl flex items-center justify-center text-farm-gold shrink-0">
                          <MapPin size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-farm-brown">Our Location</h4>
                          <p className="text-lg">Rural Empowerment Zone, South Africa</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-lg border border-farm-gold/10">
                      <img 
                        src="/images/eggs.jpeg" 
                        alt="Vibrant fresh farm eggs" 
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="bg-farm-gold/10 p-8 rounded-3xl border border-farm-gold/20">
                      <h4 className="font-bold text-farm-brown mb-4">Business Hours</h4>
                      <div className="space-y-2 text-farm-dark/70">
                        <div className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 5:00 PM</span></div>
                        <div className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></div>
                        <div className="flex justify-between"><span>Sunday:</span> <span>Closed</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <form className="bg-white p-10 rounded-3xl shadow-xl border border-farm-gold/10 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-farm-brown uppercase tracking-wider">Full Name</label>
                          <input type="text" className="w-full px-5 py-4 bg-farm-cream/50 border border-farm-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-gold/50" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-farm-brown uppercase tracking-wider">Email Address</label>
                          <input type="email" className="w-full px-5 py-4 bg-farm-cream/50 border border-farm-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-gold/50" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-farm-brown uppercase tracking-wider">Subject</label>
                        <select className="w-full px-5 py-4 bg-farm-cream/50 border border-farm-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-gold/50">
                          <option>Bulk Order Inquiry</option>
                          <option>Local Delivery</option>
                          <option>General Question</option>
                          <option>Partnership</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-farm-brown uppercase tracking-wider">Message</label>
                        <textarea rows={5} className="w-full px-5 py-4 bg-farm-cream/50 border border-farm-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-gold/50" placeholder="How can we help you?"></textarea>
                      </div>
                      <button className="w-full py-5 bg-farm-brown text-white font-bold rounded-xl shadow-lg hover:bg-farm-gold hover:text-farm-dark transition-all uppercase tracking-widest">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-farm-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-farm-gold">
                  <Egg className="w-8 h-8 text-farm-gold" />
                </div>
                <span className="text-2xl font-serif font-bold text-white tracking-tight">WISE EGGS</span>
              </div>
              <p className="text-farm-cream/60 max-w-md leading-relaxed">
                Premium quality eggs laid with care and chosen with purpose. 
                Empowering rural communities through sustainable agriculture since 2024.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-farm-gold transition-colors"><MessageCircle size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-farm-gold transition-colors"><Phone size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-farm-gold mb-6 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-farm-cream/70">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-farm-gold mb-6 uppercase tracking-widest">Contact Info</h4>
              <ul className="space-y-4 text-farm-cream/70">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="shrink-0 text-farm-gold" /> 
                  <a href="https://wa.me/27606446838" target="_blank" rel="noopener noreferrer" className="hover:text-farm-gold transition-colors">
                    +27 60 644 6838
                  </a>
                </li>
                <li className="flex items-start gap-3"><Mail size={18} className="shrink-0 text-farm-gold" /> info@wiseeggs.co.za</li>
                <li className="flex items-start gap-3"><MapPin size={18} className="shrink-0 text-farm-gold" /> Rural Empowerment Zone</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 text-center text-sm text-farm-cream/40">
            <p>© 2024 Wise Eggs Poultry Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
