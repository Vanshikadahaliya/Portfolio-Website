import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { SkillsSection } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-4 md:px-6 lg:px-0">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

