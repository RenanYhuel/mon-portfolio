"use client";
import React from "react";
import SkillCard from "@/components/features/skills/SkillCard";
import { skillCategories } from "../../components/features/skills/SkillData";


interface Skill {
	icon: string;
	name: string;
	level: number;
	description: string;
}
interface LocalSkillCategory {
	title: string;
	skills: Skill[];
}

export default function SkillsSection() {
	const columns: LocalSkillCategory[][] = [
		[skillCategories[0]], // Frontend
		[skillCategories[1]], // Backend
		[skillCategories[2], skillCategories[3]], // Bases de données puis Outils & Cloud
	];

	return (
		<section id="competences" className="w-full py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-foreground">
						Compétences
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Un aperçu détaillé des technologies et outils que je maîtrise pour
						concevoir des applications web modernes, performantes et maintenables.
					</p>
				</div>
				<div className="flex gap-6 overflow-x-auto flex-nowrap">
					{columns.map((col, colIdx) => (
						<div key={colIdx} className="flex-1 flex flex-col min-w-[290px]">
							{col.map((cat) => (
								<SkillCard key={cat.title} category={cat} />
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
