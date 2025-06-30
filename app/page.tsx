import { HeroSection } from "@/components/hero-section";
import { BentoSection } from "@/components/bento-section";
import { IconGlobeSection } from "@/components/icon-globe-section";
import { MorphingTextSection } from "@/components/morphing-text-section";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Certificates } from "@/components/certificates";
import { SocialMedia } from "@/components/socialmedia";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="about">
        <HeroSection />
      </section>
      <section id="services">
        <BentoSection />
      </section>
      <section>
        <MorphingTextSection />
      </section>
      <section>
        <IconGlobeSection />
      </section>
      <section>
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section>
        <Certificates />
      </section>
      <section id="contact">
        <SocialMedia />
        <Footer />
      </section>
    </main>
  );
}
