"use client";
import { useEffect, useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Zap, Mail, Github, Linkedin, LogIn, Lightbulb, Sparkles, UserCheck, PenTool } from "lucide-react";
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
    icon: <Github size={20} className="transition-colors text-primary group-hover:text-primary-foreground" />,
  },
  {
    href: "https://www.linkedin.com/in/renan-yhuel-764aab323/",
    label: "LinkedIn",
    icon: <Linkedin size={20} className="transition-colors text-primary group-hover:text-primary-foreground" />,
  },
  {
    href: "mailto:renan@stagey.fr",
    label: "Mail",
    icon: <Mail size={20} className="transition-colors text-primary group-hover:text-primary-foreground" />,
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true">
        {/* Optionnel: un léger dégradé ou effet visuel de fond */}
      </div>
      <div className="w-full px-2 sm:px-4 md:px-24 [@media(max-width:1299px)]:px-2 flex justify-center md:justify-start">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full px-2 sm:px-4 md:px-6 [@media(max-width:1299px)]:px-2 py-8 md:py-12 animate-fade-in-up"
          style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
          {/* Texte principal */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 md:pl-16 animate-fade-in-up"
            style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground leading-tight animate-fade-in-up"
              style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              Développeur Web
              <span className="hidden [@media(min-width:1300px)]:inline">&nbsp;</span>
              <span className="block [@media(min-width:1300px)]:inline">
                <Typewriter words={["Créatif", "Passionné", "Curieux", "Rigoureux", "Innovant", "Polyvalent"]} />
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up"
              style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              Je conçois des expériences web{" "}
              <span className="font-bold text-foreground">modernes</span>,{" "}
              <span className="font-bold text-foreground">rapides</span> et{" "}
              <span className="font-bold text-foreground">humaines</span>.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-xl animate-fade-in-up"
              style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              Découvrez mon univers et mes réalisations uniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full justify-center md:justify-start animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <a href="#projets" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg transition"
                >
                  Voir mes projets
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border-primary text-primary hover:bg-primary/10 shadow"
                >
                  Me contacter
                </Button>
              </a>
            </div>
            {/* Valeurs optionnelles */}
            <div className="flex flex-col [@media(min-width:1300px)]:flex-row gap-4 [@media(min-width:1300px)]:gap-6 mt-6 md:mt-8 w-full items-start [@media(max-width:769px)]:items-center [@media(min-width:1300px)]:items-start animate-fade-in-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
              <div className="flex items-center gap-2 text-primary">
                <Lightbulb size={22} /> <span className="text-sm sm:text-base text-muted-foreground">Créativité pragmatique</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <UserCheck size={22} /> <span className="text-sm sm:text-base text-muted-foreground">Collaboration sincère</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <PenTool size={22} /> <span className="text-sm sm:text-base text-muted-foreground">Design Centré Utilisateur</span>
              </div>
            </div>
            {/* Réseaux sociaux stylisés */}
            <div className="flex flex-row gap-3 sm:gap-4 mt-6 md:mt-8 animate-fade-in-up justify-center md:justify-start" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
              {socialLinks.map(({ href, label, icon }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="group p-2 sm:p-3 rounded-full bg-background border border-border text-foreground shadow transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
                    >
                      {icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs sm:text-sm font-semibold">
                    {label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
