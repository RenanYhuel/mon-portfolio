import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { socialLinks } from "@/components/features/hero/SocialLinkData";

export default function Footer() {
  return (
    <footer className="w-full px-4 pb-6 pt-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 rounded-xl bg-card/90 border border-border shadow-lg p-4 sm:flex-row sm:justify-between sm:items-center sm:rounded-full sm:py-5 sm:px-8">
        <span className="text-center text-sm text-muted-foreground font-medium select-none">
          &copy; {new Date().getFullYear()} Renan Yhuel. Tous droits réservés.
        </span>
        <nav className="flex flex-row gap-3 sm:gap-4">
          {socialLinks.map(({ href, label, icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group p-2 rounded-full bg-background border border-border text-foreground shadow transition hover:bg-primary hover:text-primary-foreground hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
                >
                  {icon}
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs font-semibold">
                {label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
    </footer>
  );
}
