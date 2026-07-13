import Navbar       from '@/app/components/Navbar';
import Hero         from '@/app/sections/Hero';
import About        from '@/app/sections/About';
import Skills       from '@/app/sections/Skills';
import Projects     from '@/app/sections/Projects';
import Experience   from '@/app/sections/Experience';
import Education    from '@/app/sections/Education';
import Certificates from '@/app/sections/Certificates';
import Contact      from '@/app/sections/Contact';
import Footer       from '@/app/components/Footer';
import BackToTop    from '@/app/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
