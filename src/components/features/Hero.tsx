"use client";
import { Typewriter } from "./hero/Typewriter";
import { SocialLinks } from "./hero/SocialLinks";
import { Values } from "./hero/Values";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden bg-transparent" role="banner">
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none" aria-hidden="true">
        {/* Effet visuel de fond*/}
      </div>
      <main className="w-full px-2 sm:px-4 md:px-24 [@media(max-width:1299px)]:px-2 flex justify-center md:justify-start" tabIndex={-1}>
        <section className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full px-2 sm:px-4 md:px-6 [@media(max-width:1299px)]:px-2 py-8 md:py-12 animate-fade-in-up"
          style={{animationDelay: '0.1s', animationFillMode: 'both'}} aria-label="Présentation principale">
          {/* Bloc principal de présentation */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 md:pl-16 animate-fade-in-up"
            style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight animate-fade-in-up"
              style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              Développeur Web
              <span className="hidden [@media(min-width:1300px)]:inline">&nbsp;</span>
              <span className="block [@media(min-width:1300px)]:inline">
                <Typewriter words={["Créatif", "Passionné", "Curieux", "Rigoureux", "Innovant", "Polyvalent", "Fullstack"]} />
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-semibold animate-fade-in-up"
              style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              Je conçois des expériences web{" "}
              <span className="font-bold text-foreground">modernes</span>,{" "}
              <span className="font-bold text-foreground">rapides</span> et{" "}
              <span className="font-bold text-foreground">humaines</span>.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-xl animate-fade-in-up"
              style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              Découvrez mon univers et mes réalisations uniques.
            </p>
            <nav aria-label="Liens rapides" className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full justify-center md:justify-start animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              <a href="#projets" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold bg-primary text-primary-foreground shadow-lg transition cursor-pointer
                    hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 hover:scale-105 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  Voir mes projets
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold border-primary text-primary shadow transition cursor-pointer
                    hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-100 hover:text-primary hover:scale-105 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  Me contacter
                </Button>
              </a>
            </nav>
            <Values />
            <SocialLinks />
          </div>
        </section>
      </main>
    </header>
  );
}
