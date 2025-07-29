import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Markets from "@/components/markets";
import WhyChooseUs from "@/components/why-choose-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Markets />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
