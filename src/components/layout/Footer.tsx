import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { socialLinks } from "@/components/features/hero/SocialLinkData";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center pt-8 pb-8">
      <div className="w-full max-w-5xl inline-flex rounded-full border border-[rgba(0,0,0,0.06)] bg-gradient-to-r from-card/90 via-card/80 to-card/90 bg-card/80 shadow-lg px-8 py-3 items-center gap-8 pointer-events-auto transition-all duration-300 justify-between mx-auto">
        <span className="font-semibold text-base text-foreground select-none text-center md:text-left">
          &copy; {new Date().getFullYear()} Renan Yhuel. Tous droits réservés.
        </span>
        <div className="flex flex-row gap-3">
          {socialLinks.map(({ href, label, icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group p-1.5 sm:p-2 rounded-full bg-background border border-border text-foreground shadow transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
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
    </footer>
  );
}
