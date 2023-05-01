import Button from "components/Button";
import links from "data/links";
import { MdStar } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const AboutP2 = () => (
  <div id={Section.AboutRotW}>
    {getSectionHeading(Section.AboutRotW)}

    <div className="w-full lg:w-3/4 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
      <p>
        <strong>Portfolio 2.0</strong>
      </p>

      <p>
        Portfolio 2.0 is a project I started to showcase my skills and projects in a more visually appealing way. It
        also serves as a way for me to learn new technologies and frameworks.
      </p>

      <p>
        If you would like to peek around the code and see what makes this website tick, the complete source code can be
        found on GitHub.
      </p>
    </div>

    <Button icon={MdStar} className="mt-8" onClick={() => openURLInNewTab(links.repository)}>
      Star this Project on GitHub
    </Button>
  </div>
);

export default AboutP2;
