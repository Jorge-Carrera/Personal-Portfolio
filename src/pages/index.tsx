import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/Experience/WorkExperience";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import ProfilePicture from "../../public/Jorge_Carrera.jpeg";
import Image from "next/image";
import { GetStaticProps } from "next";
import { PageInfo, Experience, Project, Skill, Social } from "typings";
import { fetchPageInfo } from "utilities/fetchPageInfo";
import { fetchExperiences } from "utilities/fetchExperiences";
import { fetchSkills } from "utilities/fetchSkills";
import { fetchProjects } from "utilities/fetchProjects";
import { fetchSocial } from "utilities/fetchSocials";

type Props = {
  pageInfo : PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};


export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Jorge's Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={ProfilePicture}
              alt="Jorge Carrera"
              className="h-10 w-10 z-10 border-none outline-none rounded-full filter grayscale hover:grayscale-0 cursor-pointer buttonHover  "
            />
            
          </div>
        </footer>
      </Link>
    </div>
  );
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo:PageInfo = await fetchPageInfo();
  const experiences:Experience[] = await fetchExperiences();
  const skills:Skill[] = await fetchSkills();
  const projects:Project[] = await fetchProjects();
  const socials:Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to regenerate the page:
    // When a request comes in
    // At most, once every 10 seconds (next ISR)
    revalidate: 60,
  }
}