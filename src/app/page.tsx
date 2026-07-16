import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects  />
      <About />
      <Contact />
    </>
  );
}
