"use client";

import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";

// Dynamic imports for client-only components (disable SSR if they use DOM)
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

// Optional Blog component moved to client-only
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });

import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch dev.to blogs only in client
    async function fetchBlogs() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        const filtered = data.filter(item => item?.cover_image).sort(() => Math.random() - 0.5);
        setBlogs(filtered);
      } catch (err) {
        console.error(err);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* Pass blogs if you want to render Blog */}
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
}
