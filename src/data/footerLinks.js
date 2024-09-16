import {
  FaInstagram,
  FaDiscord,
  FaRegCompass,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const aboutUs = [
  {
    href: "/board",
    label: "OUR BOARD",
  },
  {
    href: "/events",
    label: "EVENTS",
  },
];

export const getInTouch = [
  {
    href: "https://www.instagram.com/ucrgardening/?hl=en",
    label: "@ucrgardening",
    icon: FaInstagram,
    iconStyle: "my-auto mr-2 text-3xl",
    target: "_blank",
  },
  {
    href: "mailto:ucrgardening@gmail.com",
    label: "ucrgardening@gmail.com",
    icon: MdOutlineMailOutline,
    iconStyle: "my-auto mr-2 text-3xl",
    target: "_blank",
  },
  {
    href: "https://discord.gg/rnsKpb8DfB",
    label: "Discord Channel",
    icon: FaDiscord,
    iconStyle: "my-auto mr-2 text-3xl",
    target: "_blank",
  },
  {
    href: "https://highlanderlink.ucr.edu/organization/gardenclub",
    label: "Become a Member",
    icon: FaRegCompass,
    iconStyle: "my-auto mr-2 text-3xl",
    target: "_blank",
  },
  {
    href: "https://www.tiktok.com/@ucr.gardening.club",
    label: "@ucr.gardening.club",
    icon: FaTiktok,
    iconStyle: "my-auto mr-2 text-3xl",
    target: "_blank",
  },
  {
    href: "https://open.spotify.com/playlist/2ZFry2P55YQdbHHm5sodSe?si=35677810037040ef",
    label: "Spotify Playlist",
    icon: FaSpotify,
    iconStyle: "my-auto mr-2 text-3xl",
    target: "_blank",
  },
];
