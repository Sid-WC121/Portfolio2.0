import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 hidden md:block">
        <Image src="/images/about-me/about.png" layout="fill" alt="Selfie Boy" />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there!</p>

        <p>
          I&apos;m Sidharth P, and I am a passionate and driven electronics and computer engineering student with a strong background in full-stack development. I am particularly interested in areas such as artificial intelligence, machine learning, and robotics.
        </p>

        <p>
        As you might have already read, I&apos;m a designer, developer, tech enthusiast and an artist. When I'm not coding, you can find me exploring the outdoors, reading books on technology and science, or creating new artworks. I believe that curiosity, creativity, and collaboration are essential qualities for success, both in and out of the workplace.
        </p>

        <p>
        As a developer, I have experience working with a range of technologies, including React.js, Node.js, Blockchain, and MySQL. I am always eager to learn new technologies and tools to stay up-to-date with the latest industry trends and innovations. Whether it's building web applications, working on open-source projects, or participating in coding competitions, I am constantly looking for opportunities to grow and develop my skills.
        </p>

        <p>
        Thank you for taking the time to visit my portfolio site. If you're interested in connecting, collaborating, or discussing any exciting projects, please don't hesitate to reach out!
        </p>

        <p>
          I created this website so I could showcase all this and through this process, make it easier for you to
          connect with me. If you like what you see, head over to the <a href="#contact">contact section</a> below and
          send me a text. I would love to hear from you!
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
