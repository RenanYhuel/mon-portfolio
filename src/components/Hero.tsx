"use client";
import { useEffect, useState } from "react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Calendar, Briefcase, Zap, Mail, Github, Linkedin, LogIn, Lightbulb, Sparkles, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Typewriter maison
function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1200);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setDisplayed(words[index].substring(0, subIndex));
    }, reverse ? 30 : 70);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    setDisplayed(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return (
    <span className="text-primary font-bold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const socialLinks = [
  {
    href: "https://github.com/RenanYhuel",
    label: "GitHub",
    icon: <Github size={20} className="text-primary" />,
  },
  {
    href: "https://www.linkedin.com/in/renan-yhuel-764aab323/",
    label: "LinkedIn",
    icon: <Linkedin size={20} className="text-primary" />,
  },
  {
    href: "mailto:renan@stagey.fr",
    label: "Mail",
    icon: <Mail size={20} className="text-primary" />,
  },
];

const infos = [
  { icon: <MapPin size={16} className="mr-1" />, text: "Paris" },
  { icon: <Globe size={16} className="mr-1" />, text: "FR/EN" },
  { icon: <Briefcase size={16} className="mr-1" />, text: "Freelance" },
  { icon: <Zap size={16} className="mr-1" />, text: "Disponible" },
  { icon: <Calendar size={16} className="mr-1" />, text: "5+ ans exp." },
  { icon: <Github size={16} className="mr-1" />, text: "Github" },
  { icon: <Mail size={16} className="mr-1" />, text: "Ouvert aux collaborations" },
  { icon: <Zap size={16} className="mr-1" />, text: "Passion IA / Tech" },
  { icon: <Briefcase size={16} className="mr-1" />, text: "Projet réel en prod" },
  { icon: <LogIn className="mr-1" />, text: "Next.js, React" },
];

export default function HeroSection() {
  return (
    <section
      className="w-full flex-1 flex items-center justify-center relative px-4 md:px-8"
      style={{ minHeight: 'calc(100vh - 138px)' }}
    >
      <div className="flex flex-col lg:flex-row h-full flex-1 w-full max-w-[1440px] mx-auto border border-border bg-card/80 dark:bg-card/80 shadow-xl backdrop-blur-md rounded-2xl px-0 py-0 overflow-hidden transition-colors duration-300 relative z-10">
        {/* Partie gauche : Infos */}
        <div className="w-full lg:w-[35%] h-full flex-1 flex flex-col items-center justify-between px-8 pt-16 pb-8 bg-transparent animate-fade-in-up">
          <Avatar className="size-36 md:size-44 border-4 border-white shadow-xl transition-transform duration-300 hover:scale-110 animate-avatar-pop">
            <AvatarImage src="/me.png" alt="Renan Yhuel" />
            <AvatarFallback>RY</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl md:text-4xl font-extrabold mt-2 tracking-tight animate-fade-in-delay">Renan Yhuel</CardTitle>
          <div className="h-10" />
          <CardDescription className="flex flex-row flex-wrap gap-2 mt-0 justify-center text-sm md:text-base max-w-[320px] md:max-w-[400px] mx-auto animate-fade-in-delay2">
            {infos.map((info, i) => (
              <Badge key={i} variant="outline" className="flex items-center gap-1 px-2 py-1 rounded-md">
                {info.icon}
                {info.text}
              </Badge>
            ))}
          </CardDescription>
          <div className="flex flex-row gap-2 mt-8 animate-fade-in-delay3">
            {socialLinks.map((link, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="rounded-full border border-border bg-white/70 dark:bg-[#232946]/80 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-primary transition-all flex items-center justify-center w-11 h-11 focus:outline-none"
                  >
                    {link.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>{link.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        {/* Partie droite : large, arrondie, simple et accueillante */}
        <div className="w-full lg:w-[65%] h-full flex flex-col items-center justify-center text-center px-10 py-24 gap-10 bg-muted/60 dark:bg-[#232323] shadow-[-16px_0_32px_-8px_rgba(99,102,241,0.10)] border-l-0 lg:border-l-4 border-primary/20 transition-all duration-300 rounded-t-3xl rounded-none lg:rounded-t-none lg:rounded-l-[56px] relative overflow-hidden animate-fade-in-up border-t-4 border-primary/20 lg:border-t-0">
          <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto relative z-10">
            <Sparkles size={48} className="text-primary drop-shadow mb-2 animate-bounce-in" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-2 rounded-full px-4 md:px-6 py-2 bg-white/70 dark:bg-[#232323]/60 shadow-md animate-fade-in-delay break-words leading-tight">
              Bienvenue sur mon portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in-delay2">
              Je conçois des expériences web <span className="text-primary font-semibold">modernes</span>, <span className="text-primary font-semibold">rapides</span> et <span className="text-primary font-semibold">humaines</span>.<br />Découvre mon univers et mes réalisations !
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4 animate-fade-in-delay3">
              <div className="flex items-center gap-3 bg-white/80 dark:bg-[#232323]/60 rounded-full px-6 py-3 shadow-sm">
                <Lightbulb size={22} className="text-primary" />
                <span className="text-base text-foreground font-medium">Créativité pragmatique</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-[#232323]/60 rounded-full px-6 py-3 shadow-sm">
                <UserCheck size={22} className="text-primary" />
                <span className="text-base text-foreground font-medium">Collaboration sincère</span>
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center w-full animate-fade-in-delay4">
              <a href="#projets" className="w-full md:w-auto cursor-pointer">
                <Button size="lg" variant="outline" className="px-10 py-4 text-lg font-bold border-2 border-primary text-primary rounded-2xl shadow-md hover:bg-primary/10 hover:text-primary-foreground hover:scale-105 transition-all w-full md:w-auto cursor-pointer focus-visible:ring-2 focus-visible:ring-primary">
                  Mes projets
                </Button>
              </a>
              <a href="#contact" className="w-full md:w-auto cursor-pointer">
                <Button size="lg" variant="default" className="px-10 py-4 text-lg font-bold bg-primary text-white border-2 border-primary rounded-2xl shadow-2xl hover:bg-primary/90 hover:scale-105 transition-all w-full md:w-auto cursor-pointer focus-visible:ring-2 focus-visible:ring-primary">
                  Me contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
