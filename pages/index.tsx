import type { NextPage } from "next";
import {
  AboutMe,
  AboutRotW,
  Achievements,
  Certifications,
  Contact,
  Education,
  Footer,
  Header,
  Languages,
  Projects,
  Resume,
  Skills,
  WorkExperience,
} from "sections";


const Home: NextPage = () => (
  <div className="w-5/6 mx-auto md:container grid gap-24">
    <Header />
    <AboutMe />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <WorkExperience />
      <Education />
    </div>

    <Skills />
    <Projects />
    <Languages />

    <div className="grid lg:grid-cols-2 gap-12">
      <Achievements />
      <Certifications />
    </div>

    <Resume />
    <Contact />
    <AboutRotW />
    <Footer />
  </div>
);

export default Home;
