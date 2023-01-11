import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
  {
    title: "Development",
    path: "/",
    icon: <AiIcons.IoMdGitNetwork />,
    cName: "nav-text",
  },
  {
    title: "Design",
    path: "/design",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Marketing",
    path: "/marketing",
    icon: <FaIcons.IoMdTrendingUp />,
    cName: "nav-text",
  },
];
