import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

export const links: {
  id: number;
  name: string;
  slug: string;
  url: string;
  icon: IconType;
}[] = [
  {
    id: 0,
    name: "GitHub",
    slug: "github",
    url: "https://github.com/bricesuazo/",
    icon: FaGithub,
  },

  {
    id: 1,
    name: "Twitter",
    slug: "twitter",
    url: "https://twitter.com/brice_suazo",
    icon: FaTwitter,
  },
  {
    id: 2,
    name: "Facebook",
    slug: "facebook",
    url: "https://www.facebook.com/bricesuazo",
    icon: FaFacebook,
  },
  {
    id: 3,
    name: "Instagram",
    slug: "instagram",
    url: "https://www.instagram.com/brice_suazo/",
    icon: FaInstagram,
  },
  {
    id: 4,
    name: "YouTube",
    slug: "youtube",
    url: "https://www.youtube.com/bricesuazo",
    icon: FaYoutube,
  },
  {
    id: 5,
    name: "LinkedIn",
    slug: "linkedin",
    url: "https://www.linkedin.com/in/bricesuazo/",
    icon: FaLinkedin,
  },
];
