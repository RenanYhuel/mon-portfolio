import SkillItem from "../../../components/features/skills/SkillItem";
import { SkillCategory } from "../../../components/features/skills/SkillData"

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="break-inside-avoid mb-6 bg-card border border-border rounded-2xl shadow-md p-6 flex flex-col min-h-[320px]">
      <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
      <ul className="space-y-4">
        {category.skills.map((skill) => (
          <SkillItem key={skill.icon} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
