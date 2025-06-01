"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const MAX_TAGS = 4;

export default function ProjectSection() {
	const [projects, setProjects] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState<number | null>(null);

	useEffect(() => {
		fetch("/api/projects")
			.then(res => res.json())
			.then(data => {
				setProjects(data.data || []);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	return (
		<section
			id="projets"
			aria-label="Projets récents"
			className="relative w-full py-16 md:py-24 px-2 sm:px-4 md:px-24 flex flex-col items-center bg-transparent scroll-mt-24"
		>
			<div className="max-w-5xl w-full flex flex-col items-center">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-center animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
					Mes projets récents
				</h2>
				<p className="text-lg md:text-xl text-muted-foreground mb-10 text-center max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
					Quelques réalisations web modernes, performantes et pensées pour l’humain.
				</p>
				{loading ? (
					<div className="text-muted-foreground text-center py-12">Chargement…</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full transition-opacity duration-700">
						{projects.map((project, i) => {
							const showTags = project.tags?.slice(0, MAX_TAGS) || [];
							const extraTags = (project.tags?.length || 0) - MAX_TAGS;
							return (
								<article
									key={project.id}
									className="group relative bg-card border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl animate-fade-in-up cursor-pointer min-h-[420px] max-h-[600px]"
									style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
									tabIndex={0}
									aria-label={`Voir le projet ${project.title}`}
									onClick={() => setOpen(i)}
									onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(i); }}
								>
									<img src={project.imageUrl || "/me.png"} alt={project.title} className="w-full h-56 object-cover bg-muted" loading="lazy" />
									<div className="flex-1 flex flex-col p-6 gap-2">
										<h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">{project.title}</h3>
										<p className="text-base text-muted-foreground mb-2 line-clamp-3">{project.description}</p>
										<div className="flex flex-wrap gap-2 mt-auto">
											{showTags.map((tag: string) => (
												<span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs font-semibold text-muted-foreground border border-border">{tag}</span>
											))}
											{extraTags > 0 && (
												<span className="px-2 py-0.5 rounded bg-muted text-xs font-semibold text-primary border border-primary/40">+{extraTags}</span>
											)}
										</div>
									</div>
								</article>
							);
						})}
					</div>
				)}
				{projects.map((project, i) => (
					<Dialog key={project.id} open={open === i} onOpenChange={v => setOpen(v ? i : null)}>
						<DialogContent className="max-w-lg w-full">
							<DialogTitle>{project.title}</DialogTitle>
							<img src={project.imageUrl || "/me.png"} alt={project.title} className="w-full h-56 object-cover rounded-lg mb-4" />
							<DialogDescription className="mb-2">{project.description}</DialogDescription>
							{project.url && (
								<a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold block mb-2">Voir le site</a>
							)}
							{project.githubUrl && (
								<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline font-semibold block mb-2">Code source</a>
							)}
							<div className="flex flex-wrap gap-2 mb-4">
								{(project.tags || []).map((tag: string) => (
									<span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs font-semibold text-muted-foreground border border-border">{tag}</span>
								))}
							</div>
							<div className="text-xs text-muted-foreground">Créé le {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : "-"}</div>
						</DialogContent>
					</Dialog>
				))}
			</div>
		</section>
	);
}
