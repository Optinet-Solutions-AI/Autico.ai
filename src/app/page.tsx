import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PartnershipBanner from "@/components/PartnershipBanner";
import SocialProof from "@/components/SocialProof";
import QuickStart from "@/components/QuickStart";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Showcase from "@/components/Showcase";
import Press from "@/components/Press";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PartnershipBanner />
        <SocialProof />
        <QuickStart />
        <Features />
        <Integrations />
        <Showcase />
        <Press />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
