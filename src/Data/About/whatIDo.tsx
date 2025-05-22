import React from "react";
import { Icons } from "../../assets/icons/icons";

export interface WhatIDoItem {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const whatIDoItems: WhatIDoItem[] = [
  {
    icon: <Icons.web />,
    title: "Web development",
    description:
      "Crafting modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    icon: <Icons.mobile />,
    title: "Mobile apps",
    description:
      "Building sleek, high-performance mobile applications for both iOS and Android platforms.",
  },
];
