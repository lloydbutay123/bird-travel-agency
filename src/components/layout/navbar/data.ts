import { FaCreditCard, FaPlane } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { MdPerson } from "react-icons/md";

export const actions = [
  { label: "Login", href: "/auth/login" },
  { label: "Sign up", href: "/auth/signup" },
];

export const navItems = [
  // {
  //   label: "Find Flights",
  //   href: "/flights",
  //   icon: FaPlane,
  //   match: (pathname: string) => pathname.startsWith("/flights"),
  // },
  // {
  //   label: "Find Stays",
  //   href: "/stays",
  //   icon: IoBed,
  //   match: (pathname: string) => pathname.startsWith("/stays"),
  // },
  {
    label: "Services",
    href: "/services",
    icon: IoBed,
    match: (pathname: string) => pathname.startsWith("/services"),
  },
  {
    label: "Send an Inquiry",
    href: "/inquiry",
    icon: IoBed,
    match: (pathname: string) => pathname.startsWith("/inquiry"),
  },
];

export const profileActions = [
  {
    label: "My Account",
    icon: MdPerson,
    href: "/account",
  },
  {
    label: "Payments",
    icon: FaCreditCard,
    href: "",
  },
  {
    label: "Settings",
    icon: IoMdSettings,
    href: "",
  },
];
