import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Statement from "@/components/sections/Statement";
import Steps from "@/components/sections/Steps";
import Contribute from "@/components/sections/Contribute";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Statement />
        <Steps />
        <Contribute />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
