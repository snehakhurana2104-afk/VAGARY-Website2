import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Sustainability from "../components/Sustainability";
import CTASection from "../components/CTASection";
import HomeEditorial from "../components/HomeEditorial";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HomeEditorial />
      <Sustainability />
      <CTASection />
    </Layout>
  );
}
