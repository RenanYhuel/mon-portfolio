import React, { ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/RenanYhuel",
    label: "GitHub",
    icon: <Github size={26} className="transition-colors text-primary group-hover:text-primary-foreground" />,
  },
  {
    href: "https://www.linkedin.com/in/renan-yhuel-764aab323/",
    label: "LinkedIn",
    icon: <Linkedin size={26} className="transition-colors text-primary group-hover:text-primary-foreground" />,
  },
  {
    href: "mailto:renan@stagey.fr",
    label: "Mail",
    icon: <Mail size={26} className="transition-colors text-primary group-hover:text-primary-foreground" />,
  },
];
