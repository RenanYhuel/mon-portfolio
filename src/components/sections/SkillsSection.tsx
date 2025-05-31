"use client";
import { useRef, useEffect, useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const skills = [
	"html",
	"css",
	"js",
	"ts",
	"php",
	"py",
	"react",
	"nextjs",
	"vue",
	"nuxtjs",
	"tailwind",
	"babel",
	"electron",
	"nodejs",
	"express",
	"django",
	"flask",
	"nestjs",
	"adonis",
	"discordjs",
	"fastapi",
	"mongodb",
	"mysql",
	"sqlite",
	"postgres",
	"docker",
	"aws",
	"gcp",
	"cloudflare",
	"git",
	"postman",
	"vercel",
	"figma",
	"arduino",
	"codepen",
	"discord",
	"github",
	"gmail",
];

const skillNames: Record<string, string> = {
	html: "HTML5",
	css: "CSS3",
	js: "JavaScript",
	ts: "TypeScript",
	php: "PHP",
	py: "Python",
	react: "React",
	nextjs: "Next.js",
	vue: "Vue.js",
	nuxtjs: "Nuxt.js",
	tailwind: "Tailwind CSS",
	babel: "Babel",
	electron: "Electron",
	nodejs: "Node.js",
	express: "Express.js",
	django: "Django",
	flask: "Flask",
	nestjs: "NestJS",
	adonis: "AdonisJS",
	discordjs: "discord.js",
	fastapi: "FastAPI",
	mongodb: "MongoDB",
	mysql: "MySQL",
	sqlite: "SQLite",
	postgres: "PostgreSQL",
	docker: "Docker",
	aws: "AWS",
	gcp: "Google Cloud",
	cloudflare: "Cloudflare",
	git: "Git",
	postman: "Postman",
	vercel: "Vercel",
	figma: "Figma",
	arduino: "Arduino",
	codepen: "CodePen",
	discord: "Discord",
	github: "GitHub",
	gmail: "Gmail",
};

export default function SkillsSection() {
	const trackRef = useRef<HTMLDivElement>(null);
	const seqRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number | null>(null);
	const [seqWidth, setSeqWidth] = useState<number>(0);
	const speed = 1.2; // px per frame, ajustable

	useEffect(() => {
		if (!seqRef.current) return;
		setSeqWidth(seqRef.current.offsetWidth);
	}, []);

	useEffect(() => {
		const track = trackRef.current;
		const container = containerRef.current;
		if (!track || !container || !seqWidth) return;
		let pos = 0;
		function animate() {
			pos -= speed;
			// Reset pile quand la première séquence est totalement sortie
			if (Math.abs(pos) >= seqWidth) {
				pos += seqWidth;
			}
			if (track) track.style.transform = `translateX(${pos}px)`;
			animationRef.current = requestAnimationFrame(animate);
		}
		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [seqWidth]);

	return (
		<section
			id="competences"
			className="w-full py-20"
		>
			<div className="max-w-5xl mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-foreground">
						Compétences
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Voir un aperçu des technologies et outils que je maîtrise pour concevoir
						des applications web modernes, performantes et maintenables.
					</p>
				</div>
				<div className="w-full bg-card border border-border shadow-xl rounded-2xl overflow-hidden">
					<div
						ref={containerRef}
						className="relative w-full h-[120px] flex items-center"
					>
						<div
							className="absolute inset-0 pointer-events-none z-10"
							style={{
								maskImage:
									'linear-gradient(90deg,transparent,white 10%,white 90%,transparent)',
								WebkitMaskImage:
									'linear-gradient(90deg,transparent,white 10%,white 90%,transparent)',
							}}
						/>
						<div className="w-full overflow-hidden">
							<div
								ref={trackRef}
								className="flex items-center h-[120px] will-change-transform"
								style={{ transition: "none" }}
							>
								<div ref={seqRef} className="flex items-center">
									{skills.map((icon, i) => (
										<Tooltip key={icon + i}>
											<TooltipTrigger asChild>
												<img
													src={`https://skillicons.dev/icons?i=${icon}`}
													alt={icon}
													className="h-16 w-16 min-w-[64px] mx-6 select-none opacity-90 cursor-pointer"
													draggable={false}
												/>
											</TooltipTrigger>
											<TooltipContent>
												{skillNames[icon] || icon}
											</TooltipContent>
										</Tooltip>
									))}
								</div>
								<div className="flex items-center">
									{skills.map((icon, i) => (
										<Tooltip key={icon + "b" + i}>
											<TooltipTrigger asChild>
												<img
													src={`https://skillicons.dev/icons?i=${icon}`}
													alt={icon}
													className="h-16 w-16 min-w-[64px] mx-6 select-none opacity-90 cursor-pointer"
													draggable={false}
												/>
											</TooltipTrigger>
											<TooltipContent>
												{skillNames[icon] || icon}
											</TooltipContent>
										</Tooltip>
									))}
								</div>
								<div className="flex items-center">
									{skills.map((icon, i) => (
										<Tooltip key={icon + "c" + i}>
											<TooltipTrigger asChild>
												<img
													src={`https://skillicons.dev/icons?i=${icon}`}
													alt={icon}
													className="h-16 w-16 min-w-[64px] mx-6 select-none opacity-90 cursor-pointer"
													draggable={false}
												/>
											</TooltipTrigger>
											<TooltipContent>
												{skillNames[icon] || icon}
											</TooltipContent>
										</Tooltip>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
