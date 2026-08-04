import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import About from "@/components/About/About";
import Qualifications from "@/components/Qualifications/Qualifications";
import Experience from "@/components/Experience/Experience";
import Differentials from "@/components/Differentials/Differentials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Qualifications />
        <Experience />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
