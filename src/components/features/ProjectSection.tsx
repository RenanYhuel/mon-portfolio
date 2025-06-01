// Nouvelle section projets avec slider
'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  url?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
  order?: number;
  createdAt: string;
  updatedAt: string;
}

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projets" className="w-full py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-foreground">
            Projets
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes, illustrant mon savoir-faire et ma passion pour le développement web.
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
            {loading && Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="min-w-[320px] h-[320px] rounded-xl" />
            ))}
            {projects && projects.length > 0 && projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className={`min-w-[320px] max-w-xs snap-center flex-shrink-0 shadow-lg border border-border bg-card/90 relative flex flex-col p-0 ${project.featured ? 'ring-2 ring-primary' : ''} cursor-pointer transition hover:scale-[1.03]`}>
                    <div className="relative w-full h-40 bg-muted rounded-t-xl overflow-hidden flex items-center justify-center">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="object-cover w-full h-full"
                          style={{ objectPosition: 'center' }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-2xl font-bold">
                          {project.title.charAt(0)}
                        </div>
                      )}
                      {project.featured && (
                        <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded shadow">Mise en avant</span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <CardHeader className="p-0 mb-2">
                        <CardTitle className="text-lg font-bold text-primary line-clamp-1">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 flex-1 flex flex-col gap-2">
                        <p className="text-muted-foreground mb-2 line-clamp-3 min-h-[60px]">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags && project.tags.map((tag, idx) => (
                            <span key={idx} className="bg-muted text-xs px-2 py-0.5 rounded font-medium text-muted-foreground border border-border">{tag}</span>
                          ))}
                        </div>
                      </CardContent>
                      <div className="flex gap-2 mt-2">
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" className="w-full">Site</Button>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="ghost" className="w-full">GitHub</Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="!w-[900px] !max-w-[98vw] p-0 overflow-hidden border border-border shadow-2xl bg-card rounded-2xl animate-fade-in-up">
                  <div className="flex flex-col gap-0">
                    {/* Header : titre à gauche, image à droite */}
                    <div className="flex flex-row items-center gap-8 px-10 pt-8 pb-4 border-b border-border bg-gradient-to-r from-background/95 to-card/80">
                      {project.imageUrl && (
                        <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-background border border-border flex items-center justify-center mr-8 transition-transform duration-200 hover:scale-105" style={{ height: 120, maxWidth: 140, width: 'auto' }}>
                          <img src={project.imageUrl} alt={project.title} className="h-full w-auto max-w-[140px] rounded-2xl drop-shadow-md" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <DialogTitle className="text-4xl font-extrabold text-foreground leading-tight tracking-tight drop-shadow-sm">
                            {project.title}
                          </DialogTitle>
                        </div>
                        {project.featured && (
                          <span className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground text-xs font-bold px-3 py-1 rounded shadow inline-block whitespace-nowrap animate-bounce-in mb-2 mt-1 w-fit max-w-full">
                            Mise en avant
                          </span>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags && project.tags.map((tag, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-semibold border border-primary/20 uppercase tracking-wide shadow-sm hover:bg-primary/20 transition-colors cursor-pointer">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Description + boutons */}
                    <div className="flex flex-row gap-8 px-10 py-8 items-start bg-card/95">
                      <div className="flex-1 min-w-0">
                        <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                          {project.description}
                        </div>
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-2">
                          <span>Créé le : <span className="font-medium text-foreground">{new Date(project.createdAt).toLocaleDateString()}</span></span>
                          <span>Mis à jour : <span className="font-medium text-foreground">{new Date(project.updatedAt).toLocaleDateString()}</span></span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 min-w-[180px] items-end">
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="default" className="w-full font-bold rounded-xl shadow-lg bg-gradient-to-r from-primary to-blue-500 text-primary-foreground hover:scale-105 transition-transform">
                              Voir le site
                            </Button>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full font-bold rounded-xl shadow hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 transition-all">
                              GitHub
                            </Button>
                          </a>
                        )}
                        <DialogFooter className="w-full mt-4">
                          <DialogClose asChild>
                            <Button variant="secondary" className="w-full rounded-xl">
                              Fermer
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
            {projects && projects.length === 0 && !loading && (
              <div className="text-muted-foreground text-center w-full">Aucun projet à afficher pour le moment.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
