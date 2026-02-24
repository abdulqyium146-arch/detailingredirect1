// import { motion } from 'motion/react';
import { Car, Shield, MapPin, Phone, ExternalLink, Menu, X, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Service Area', href: '#area' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8 text-brand-primary" />
            <span className="font-display text-xl font-bold tracking-tighter">SRV <span className="text-brand-primary">DETAILING</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://srvdetailing.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-all flex items-center gap-2"
              >
                Book Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div 
          className="md:hidden glass border-t border-white/5 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://srvdetailing.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 bg-brand-primary text-black px-5 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
          >
            Book Now <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/detailing/1920/1080?grayscale&blur=2" 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div>
          <div className="mb-8 glass py-3 px-6 rounded-2xl inline-block border-brand-primary/20">
            <p className="text-sm md:text-base font-medium text-white/80">
              Previously <span className="text-brand-primary font-bold">Car Wash Detailing</span>, now <span className="text-brand-primary font-bold">SRV Detailing</span> – book professional mobile car valeting & detailing at <a href="https://srvdetailing.co.uk" className="underline hover:text-white transition-colors">srvdetailing.co.uk</a>
            </p>
          </div>
          
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-brand-primary text-sm font-bold tracking-widest uppercase">
            Mobile Valeting & Detailing Specialist
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter">
            SHOWROOM FINISH,<br />
            <span className="text-brand-primary">ANYWHERE YOU ARE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
            Professional mobile car valeting and detailing across Manchester, Stockport & Greater Manchester. Premium care for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://srvdetailing.co.uk" className="btn-primary w-full sm:w-auto">
              Book Your Service <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#services" className="btn-secondary w-full sm:w-auto">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/polish/800/800" 
                alt="Detailing Process" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold text-brand-primary">Years</p>
              <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              PASSION FOR <span className="text-brand-primary">PERFECTION.</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                SRV Detailing is a premier mobile valeting and detailing specialist based in Stockport, serving the wider Manchester area. We bring the showroom to your doorstep with our fully equipped mobile units.
              </p>
              <p>
                As an accredited ceramic coating specialist, we pride ourselves on using only the finest products and techniques to ensure your vehicle receives the ultimate protection and finish it deserves.
              </p>
              <p>
                Whether it's a routine maintenance valet or a full multi-stage paint correction and ceramic coating, our attention to detail is unmatched. We treat every vehicle as if it were our own.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">Accredited</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Car className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">Mobile Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Mobile Valeting",
      description: "Comprehensive interior and exterior cleaning packages tailored to your needs, delivered at your home or workplace.",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Full Detailing",
      description: "Deep cleaning and restoration of every surface, reaching areas standard valeting misses for a truly pristine finish.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Ceramic Coating",
      description: "Long-term protection for your paintwork, wheels, and glass. Accredited application for ultimate gloss and durability.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Paint Protection",
      description: "Advanced sealants and waxes to shield your vehicle from the elements and maintain that showroom shine.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Interior Deep Clean",
      description: "Steam cleaning, leather conditioning, and fabric protection to restore your cabin to like-new condition.",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Exterior Correction",
      description: "Machine polishing to remove swirls, scratches, and oxidation, restoring depth and clarity to your paint.",
      icon: <Car className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">PREMIUM <span className="text-brand-primary">SERVICES</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-light">
            We offer a wide range of professional detailing services designed to protect and enhance your vehicle's appearance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass p-8 rounded-3xl hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceArea() {
  const areas = ["Manchester", "Stockport", "Greater Manchester", "Cheshire", "Trafford", "Salford"];

  return (
    <section id="area" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <MapPin className="w-full h-full text-white -mr-20 -mt-20" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">WHERE WE <span className="text-brand-primary">OPERATE.</span></h2>
              <p className="text-xl text-white/70 mb-10 font-light leading-relaxed">
                Our fully equipped mobile units are ready to serve you at your convenience. We cover a wide radius centered around Stockport.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-dark/50 aspect-video rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Placeholder for a map or area graphic */}
               <div className="text-center p-8">
                 <MapPin className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                 <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Mobile Service Coverage</p>
                 <p className="text-2xl font-bold mt-2">Manchester & Stockport</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            READY FOR A <span className="text-brand-primary">TRANSFORMATION?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light">
            Book your professional mobile detailing service today and give your vehicle the care it deserves.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:+447375759686" className="btn-primary w-full md:w-auto px-12">
              <Phone className="w-5 h-5" /> Call +44 7375 759686
            </a>
            <a href="https://srvdetailing.co.uk" className="btn-secondary w-full md:w-auto px-12">
              Book Online
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8">
            <a href="https://www.facebook.com/showroomvaleting.srv" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-primary transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/srv.detailing" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-primary transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Car className="w-6 h-6 text-brand-primary" />
          <span className="font-display text-lg font-bold tracking-tighter">SRV <span className="text-brand-primary">DETAILING</span></span>
        </div>
        
        <p className="text-white/40 text-sm font-light">
          &copy; {new Date().getFullYear()} SRV Detailing. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/40">
          <a href="https://srvdetailing.co.uk" className="hover:text-white transition-colors">Main Website</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
