"use client";
import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_TAGS = 4;

export default function ProjectSection() {
	const [projects, setProjects] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState<number | null>(null);
	const [current, setCurrent] = useState(0);
	const cardsRef = useRef<HTMLDivElement>(null);
	const visibleCount = 3; // nombre de cards visibles (ajuste selon le responsive si besoin)

	useEffect(() => {
		fetch("/api/projects")
			.then(res => res.json())
			.then(data => {
				setProjects(data.data || []);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const handlePrev = () => setCurrent(c => Math.max(0, c - 1));
	const handleNext = () => setCurrent(c => Math.min(projects.length - visibleCount, c + 1));

	// Filtrage et tri : featured d'abord, puis order (si défini), puis par date de création descendante
	const sortedProjects = [...projects]
		.filter(p => p)
		.sort((a, b) => {
			// Featured d'abord
			if (a.featured && !b.featured) return -1;
			if (!a.featured && b.featured) return 1;
			// Ensuite par order si défini
			if (a.order != null && b.order != null) return a.order - b.order;
			if (a.order != null) return -1;
			if (b.order != null) return 1;
			// Sinon par date de création descendante
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		});

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
					<div className="w-full flex items-center justify-center gap-0 md:gap-4 relative">
						{/* Bouton gauche */}
						{current > 0 && (
							<div className="flex flex-col justify-center items-center h-[420px] w-[56px] mr-2 md:mr-4">
								<button
									aria-label="Précédent"
									onClick={handlePrev}
									className="bg-gradient-to-br from-primary/80 to-blue-400 text-primary-foreground border-2 border-primary shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:from-blue-500 hover:to-primary focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer group animate-fun-in"
									style={{ boxShadow: '0 4px 24px 0px #60a5fa33' }}
								>
									<ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform duration-200" />
								</button>
							</div>
						)}
						<div
							ref={cardsRef}
							className="flex justify-center gap-8"
							style={{ minHeight: 420 }}
						>
							{sortedProjects.slice(current, current + visibleCount).map((project, i) => {
								const showTags = project.tags?.slice(0, MAX_TAGS) || [];
								const extraTags = (project.tags?.length || 0) - MAX_TAGS;
								const isFeatured = !!project.featured;
								return (
									<article
										key={project.id}
										className={`group relative bg-card border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl animate-fade-in-up cursor-pointer min-h-[420px] max-h-[600px] w-[320px] ${isFeatured ? 'border-2 border-primary shadow-xl' : ''}`}
										style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
										tabIndex={0}
										aria-label={`Voir le projet ${project.title}`}
										onClick={() => setOpen(current + i)}
										onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(current + i); }}
									>
										{isFeatured && (
											<span className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-bounce-in" style={{letterSpacing: 0.5}}>
												<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="inline-block mr-1"><path d="M10 2l2.39 4.84L18 7.27l-3.91 3.81L14.78 18 10 15.27 5.22 18l.69-6.92L2 7.27l5.61-.43z"/></svg>
												Mise en avant
											</span>
										)}
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
						{/* Bouton droit */}
						{current < projects.length - visibleCount && (
							<div className="flex flex-col justify-center items-center h-[420px] w-[56px] ml-2 md:ml-4">
								<button
									aria-label="Suivant"
									onClick={handleNext}
									className="bg-gradient-to-br from-primary/80 to-blue-400 text-primary-foreground border-2 border-primary shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:from-blue-500 hover:to-primary focus-visible:ring-2 focus-visible:ring-primary/60 cursor-pointer group animate-fun-in"
									style={{ boxShadow: '0 4px 24px 0px #60a5fa33' }}
								>
									<ChevronRight size={28} className="group-hover:translate-x-1 transition-transform duration-200" />
								</button>
							</div>
						)}
					</div>
				)}
				{sortedProjects.map((project, i) => (
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
