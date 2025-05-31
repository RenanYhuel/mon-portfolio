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
      { icon: "ts", name: "TypeScript", level: 5, description: "Typage, interfaces, projets React/Node." },
      { icon: "react", name: "React", level: 5, description: "Hooks, context, Next.js, composants réutilisables." },
      { icon: "nextjs", name: "Next.js", level: 5, description: "SSR, SSG, API routes, déploiement Vercel." },
      { icon: "vue", name: "Vue.js", level: 3, description: "Composants, directives, Vue Router." },
      { icon: "tailwind", name: "Tailwind", level: 4, description: "Design system, utility-first, responsive." },
      { icon: "redux", name: "Redux", level: 3, description: "État avancé, middleware, React." },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: "nodejs", name: "Node.js", level: 5, description: "APIs REST, scripts, outils CLI." },
      { icon: "express", name: "Express.js", level: 4, description: "APIs REST, middlewares, authentification." },
      { icon: "nestjs", name: "NestJS", level: 5, description: "Architecture modulaire, TypeScript." },
      { icon: "django", name: "Django", level: 2, description: "ORM, admin, sécurité, API REST." },
      { icon: "flask", name: "Flask", level: 2, description: "Microservices, APIs simples." },
      { icon: "php", name: "PHP", level: 4, description: "Scripts, sites dynamiques, maintenance." },
      { icon: "py", name: "Python", level: 4, description: "Automatisation, scripts, data, web." },
      { icon: "adonis", name: "AdonisJS", level: 5, description: "MVC Node.js, REST APIs, ORM, sécurité." },
      { icon: "laravel", name: "Laravel", level: 3, description: "PHP, MVC, Eloquent ORM, API REST." },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { icon: "mongodb", name: "MongoDB", level: 4, description: "NoSQL, modèles flexibles, agrégations." },
      { icon: "mysql", name: "MySQL", level: 5, description: "Modélisation, requêtes, indexation." },
      { icon: "postgres", name: "PostgreSQL", level: 5, description: "Requêtes avancées, intégrité, extensions." },
      { icon: "sqlite", name: "SQLite", level: 5, description: "Tests, prototypage, apps locales." },
    ],
  },
  {
    title: "Outils & Cloud",
    skills: [
      { icon: "docker", name: "Docker", level: 3, description: "Conteneurisation, dev/prod, Compose." },
      { icon: "git", name: "Git", level: 5, description: "Branches, merge, workflows, GitHub." },
      { icon: "github", name: "GitHub", level: 5, description: "Gestion de code, PR, CI/CD." },
      { icon: "postman", name: "Postman", level: 5, description: "Tests d’API, automatisation, doc." },
    ],
  },
];
