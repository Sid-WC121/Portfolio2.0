import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";


const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="header" className="h-screen grid place-items-center place-content-center gap-4">
      <h2> Updating to new portfolio 3.0, please wait </h2> 

      <div className="flex flex-r gap-4" >
        <a href="https://github.com/Sid-WC121" target="_blank">
          <span className="w-10 h-10 text-xl bg-neutral-700 rounded-full inline-flex items-center justify-center hover:text-teal-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
            <TbBrandGithub/>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/sid-wc121/" target="_blank">
          <span className="w-10 h-10 text-xl bg-neutral-700 rounded-full inline-flex items-center justify-center hover:text-teal-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
            <SlSocialLinkedin/>
          </span>
        </a>
        <a href="https://www.instagram.com/sid_WC121/" target="_blank">
          <span className="w-10 h-10 text-xl bg-neutral-700 rounded-full inline-flex items-center justify-center hover:text-teal-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
            <SlSocialInstagram/>
          </span>
        </a>
        <a href="https://twitter.com/Sid_WC121" target="_blank">
          <span className="w-10 h-10 text-xl bg-neutral-700 rounded-full inline-flex items-center justify-center hover:text-teal-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
            <SlSocialTwitter/>
          </span>
        </a>
        <a href="https://www.youtube.com/channel/UCbSK5Mx7mUbdkxwUw1xW7Sg" target="_blank">
          <span className="w-10 h-10 text-xl bg-neutral-700 rounded-full inline-flex items-center justify-center hover:text-teal-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ">
            <SlSocialYoutube/>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
