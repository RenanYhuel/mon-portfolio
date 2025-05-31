export interface Skill {
  icon: string;
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { icon: "html", name: "HTML5", level: 5, description: "Structuration sémantique, accessibilité, SEO." },
      { icon: "css", name: "CSS3", level: 5, description: "Flexbox, Grid, animations, responsive design." },
      { icon: "js", name: "JavaScript", level: 5, description: "ES6+, DOM, API web, frameworks JS." },
      { icon: "ts", name: "TypeScript", level: 4, description: "Typage, interfaces, projets React/Node." },
      { icon: "react", name: "React", level: 5, description: "Hooks, context, Next.js, composants réutilisables." },
      { icon: "nextjs", name: "Next.js", level: 4, description: "SSR, SSG, API routes, déploiement Vercel." },
      { icon: "vue", name: "Vue.js", level: 3, description: "Composants, directives, Vue Router." },
      { icon: "tailwind", name: "Tailwind", level: 5, description: "Design system, utility-first, responsive." },
      { icon: "redux", name: "Redux", level: 4, description: "Gestion d’état avancée, middleware, intégration React." },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: "nodejs", name: "Node.js", level: 5, description: "APIs REST, scripts, outils CLI." },
      { icon: "express", name: "Express.js", level: 4, description: "APIs REST, middlewares, authentification." },
      { icon: "nestjs", name: "NestJS", level: 3, description: "Architecture modulaire, TypeScript." },
      { icon: "django", name: "Django", level: 3, description: "ORM, admin, sécurité, API REST." },
      { icon: "flask", name: "Flask", level: 2, description: "Microservices, APIs simples." },
      { icon: "php", name: "PHP", level: 2, description: "Scripts, sites dynamiques, maintenance." },
      { icon: "py", name: "Python", level: 4, description: "Automatisation, scripts, data, web." },
      { icon: "adonis", name: "AdonisJS", level: 3, description: "Framework MVC Node.js, REST APIs, ORM, sécurité." },
      { icon: "laravel", name: "Laravel", level: 3, description: "Framework PHP, MVC, Eloquent ORM, API REST." },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { icon: "mongodb", name: "MongoDB", level: 4, description: "NoSQL, modèles flexibles, agrégations." },
      { icon: "mysql", name: "MySQL", level: 3, description: "Modélisation, requêtes, indexation." },
      { icon: "postgres", name: "PostgreSQL", level: 3, description: "Requêtes avancées, intégrité, extensions." },
      { icon: "sqlite", name: "SQLite", level: 2, description: "Tests, prototypage, apps locales." },
    ],
  },
  {
    title: "Outils & Cloud",
    skills: [
      { icon: "docker", name: "Docker", level: 4, description: "Conteneurisation, dev/prod, Docker Compose." },
      { icon: "git", name: "Git", level: 5, description: "Branches, merge, workflows, GitHub." },
      { icon: "github", name: "GitHub", level: 5, description: "Gestion de code, PR, CI/CD." },
      { icon: "postman", name: "Postman", level: 4, description: "Tests d’API, automatisation, documentation." },
    ],
  },
];
