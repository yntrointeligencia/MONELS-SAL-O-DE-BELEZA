import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import AboutBento from "../components/AboutBento";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import LeadCapture from "../components/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <AboutBento />
      <Services />
      <Testimonials />
      <CTA />
      <LeadCapture />
    </>
  );
}
