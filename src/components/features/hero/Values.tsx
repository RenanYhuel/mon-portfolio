import { Lightbulb, UserCheck, PenTool } from "lucide-react";

export function Values() {
  return (
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
  );
}
