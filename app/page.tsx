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
    // p-8 diubah jadi px-6 pt-6, lalu md:p-16 diubah jadi md:px-16 md:pt-8
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-neutral-950 text-slate-800 dark:text-slate-100 font-sans px-6 pt-6 md:px-16 md:pt-8 pb-16 selection:bg-[#E5D5B5] selection:text-slate-900 transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <main className="max-w-5xl mx-auto">
        <Hero />
        
        <FadeIn delay={100}><About /></FadeIn>
        
        <FadeIn delay={100}><Education /></FadeIn>

        <FadeIn delay={100}><Experience /></FadeIn>
        
        <FadeIn delay={100}><Projects /></FadeIn>
        
        <FadeIn delay={100}><TechStack /></FadeIn>
        
        <FadeIn delay={100}><Contact /></FadeIn>
        
        <Footer />
      </main>
    </div>
  );
}