import SEO from './components/SEO';
import { Navbar, Hero, About, Services, ServiceArea, Contact, Footer } from './components/Layout';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-black">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
