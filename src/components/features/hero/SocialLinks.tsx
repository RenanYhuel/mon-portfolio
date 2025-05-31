import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { socialLinks } from "./SocialLinkData";



export function SocialLinks() {
    return (
        <div className="flex flex-row gap-3 sm:gap-4 mt-6 md:mt-8 animate-fade-in-up justify-center md:justify-start" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            {socialLinks.map(({ href, label, icon }) => (
                <Tooltip key={label}>
                <TooltipTrigger asChild>
                    <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="group p-3 sm:p-4 rounded-full bg-background border border-border text-foreground shadow transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
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
    );
}
