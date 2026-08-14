import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience"; // <-- Import ini
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-neutral-950 text-slate-800 dark:text-slate-100 font-sans p-8 md:p-16 selection:bg-[#E5D5B5] selection:text-slate-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <main className="max-w-5xl mx-auto">
        <Hero />
        
        <FadeIn delay={100}><About /></FadeIn>
        
        <FadeIn delay={100}><Education /></FadeIn>

        {/* Sisipkan Experience di sini */}
        <FadeIn delay={100}><Experience /></FadeIn>
        
        <FadeIn delay={100}><Projects /></FadeIn>
        
        <FadeIn delay={100}><TechStack /></FadeIn>
        
        <FadeIn delay={100}><Contact /></FadeIn>
        
        <Footer />
      </main>
    </div>
  );
}