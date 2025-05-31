"use client";
import { Typewriter } from "./hero/Typewriter";
import { SocialLinks } from "./hero/SocialLinks";
import { Values } from "./hero/Values";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden bg-transparent">
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
            <Values />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
