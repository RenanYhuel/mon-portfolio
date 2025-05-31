import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Skill } from "./SkillsData";


function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Niveau ${level} sur 5`}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < level ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

export default function SkillItem({ skill }: { skill: Skill }) {
  return (
    <li className="flex gap-4 h-[88px] items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="h-10 w-10 min-w-[40px] select-none"
            draggable={false}
          />
        </TooltipTrigger>
        <TooltipContent>{skill.name}</TooltipContent>
      </Tooltip>
      <div className="flex-1 flex flex-col justify-center min-h-[48px]">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold text-foreground break-words leading-tight">
            {skill.name}
          </span>
          <SkillLevel level={skill.level} />
        </div>
        <p className="text-sm text-muted-foreground mt-1 leading-snug break-words line-clamp-2">
          {skill.description}
        </p>
      </div>
    </li>
  );
}
