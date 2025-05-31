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

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl px-6 py-12">
        {/* Texte principal */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
            Développeur Web <span className="text-primary">Créatif</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Je conçois des expériences web{" "}
            <span className="font-bold text-foreground">modernes</span>,{" "}
            <span className="font-bold text-foreground">rapides</span> et{" "}
            <span className="font-bold text-foreground">humaines</span>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Découvrez mon univers et mes réalisations uniques.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <a href="#projets">
              <Button
                size="lg"
                className="rounded-xl px-8 py-4 text-lg font-bold bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg transition"
              >
                Voir mes projets
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-4 text-lg font-bold border-primary text-primary hover:bg-primary/10 shadow"
              >
                Me contacter
              </Button>
            </a>
          </div>
          {/* Valeurs optionnelles */}
          <div className="flex flex-row gap-6 mt-8">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb size={22} /> <span className="text-base text-muted-foreground">Créativité pragmatique</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <UserCheck size={22} /> <span className="text-base text-muted-foreground">Collaboration sincère</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <PenTool size={22} /> <span className="text-base text-muted-foreground">Design Centré Utilisateur</span>
            </div>
          </div>
          {/* Réseaux sociaux stylisés */}
          <div className="flex flex-row gap-4 mt-8">
            <a
              href="https://github.com/RenanYhuel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:brightness-95 dark:hover:brightness-110 text-foreground transition"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/renan-yhuel-764aab323/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:brightness-95 dark:hover:brightness-110 text-foreground transition"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="mailto:renan@stagey.fr"
              aria-label="Mail"
              className="p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:brightness-95 dark:hover:brightness-110 text-foreground transition"
            >
              <Mail size={26} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
