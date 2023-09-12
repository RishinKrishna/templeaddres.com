import DashboardIcon from "@/components/icons/DashboardIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import RewardsIcon from "@/components/icons/RewardsIcon";
import ServiesIcon from "@/components/icons/ServiesIcon";
import TemplesIcon from "@/components/icons/TemplesIcon";

export const navLinks = [
  {
    id: "/home",
    title: "Home",
  },
  {
    id: "/dashboard",
    title: "Dashboard",
  },
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/list",
    title: "List",
  },

  {
    id: "/gallery",
    title: "Gallery",
  },
];
export const sideLinks = [
  {
    id: "/admin",
    icon: <DashboardIcon/>,
    title: "Dashboard",

  },
  {
    id: "/admin/temples",
    icon: <TemplesIcon/>,
    title: "Temples",

  },
  {
    id: "/home",
    icon: <ServiesIcon/>,
    title: "Servies",

  },
  {
    id: "/home",
    icon: <MessageIcon/>,
    title: "Messages",

  },
  {
    id: "/home",
    icon: <RewardsIcon/>,
    title: "Rewards",

  },
];

export const footerLinks = [
  {
    title: "TEMPLE ADDRESS",
    links: [
      {
        name: "Our Services",
        link: "#",
      },
      {
        name: "Other Projects",
        link: "#",
      },
      {
        name: "View Our Blog",
        link: "#",
      },
      {
        name: "Partner With us",
        link: "#",
      },
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      {
        name: "Management",
        link: "#",
      },
      {
        name: "Advertise Here",
        link: "#",
      },
      {
        name: "Support and Donations",
        link: "#",
      },
      {
        name: "Regional and Languages",
        link: "#",
      },
    ],
  },
  {
    title: "SUPPOT",
    links: [
      {
        name: "Help Live Chart",
        link: "#",
      },
      {
        name: "Faq’s",
        link: "#",
      },
      {
        name: "Add or correct Data",
        link: "#",
      },
      {
        name: "Add your Service",
        link: "#",
      },
    ],
  },
  {
    title: "MORE INFO",
    links: [
      {
        name: "Privacy and Data Policy",
        link: "#",
      },
      {
        name: "Terms of Service",
        link: "#",
      },
      {
        name: "Contact us",
        link: "#",
      },
      {
        name: "Technical Support",
        link: "#",
      },
    ],
  },
];

