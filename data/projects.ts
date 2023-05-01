import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/",
    name: "Lorem ipsum dolor",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: ["opensource", "webdev", "fullstack", "react", "nestjs", "tailwindcss"],
    link: {
      web: "https://",
      github: "https://",
    },
  },
  {
    id: 2,
    image: "/images/projects/",
    name: "Lorem ipsum dolor",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: ["opensource", "react", "dayjs", "tailwindcss"],
    link: {
      web: "https://",
      github: "https://",
    },
  },
  {
    id: 3,
    image: "/images/projects/",
    name: "Lorem ipsum dolor",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["opensource", "appdev", "flutter", "firebase", "android"],
    link: {
      web: "https://",
      github: "https://",
    },
  },
];

export default projectsList;
