"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Sun, Moon, ArrowUpRight, Home, FolderKanban, MessageCircle, Mail, PlayCircle, Settings } from "lucide-react";

const NAV_LINKS = [
	{ href: "#accueil", label: "Accueil", icon: <Home size={18} /> },
	{ href: "#projets", label: "Projets", icon: <FolderKanban size={18} /> },
	{ href: "#competences", label: "Compétences", icon: <Settings size={18} /> },
	{ href: "#avis", label: "Avis", icon: <MessageCircle size={18} /> },
	{ href: "#contact", label: "Contact", icon: <Mail size={18} /> },
	{ href: "https://sandbox.renanyhuel.com", label: "Démo", icon: <PlayCircle size={18} />, external: true },
];

const NAV_LINKS_MOBILE = [
	{ href: "#accueil", label: "Accueil", icon: <Home size={18} /> },
	{ href: "#projets", label: "Projets", icon: <FolderKanban size={18} /> },
	{ href: "#competences", label: "Compétences", icon: <Settings size={18} /> },
	{ href: "#avis", label: "Avis", icon: <MessageCircle size={18} /> },
	{ href: "#contact", label: "Contact", icon: <Mail size={18} /> },
	{ href: "https://sandbox.renanyhuel.com", label: "Démo", icon: <PlayCircle size={18} />, external: true },
];

export default function Navbar() {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState("light");
	const [menuOpen, setMenuOpen] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);
	const [drawerVisible, setDrawerVisible] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const drawerRef = useRef<HTMLDivElement>(null);
	const [closing, setClosing] = useState(false);

	// Mount only on client for theme
	useEffect(() => {
		setMounted(true);
		const saved = localStorage.getItem("theme");
		if (saved) setTheme(saved);
		// Scroll event for background
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme, mounted]);

	// Smooth scroll
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		setMenuOpen(false);
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	// Ouvre le drawer
	useEffect(() => {
		if (menuOpen) {
			setShowDrawer(true);
			// Lance l'animation d'entrée juste après le montage
			setTimeout(() => setDrawerVisible(true), 10);
		} else {
			setDrawerVisible(false);
			const timeout = setTimeout(() => setShowDrawer(false), 300);
			return () => clearTimeout(timeout);
		}
	}, [menuOpen]);

	// Gestion fermeture animée du drawer
	const handleCloseMenu = () => {
		setClosing(true);
		setTimeout(() => {
			setMenuOpen(false);
			setClosing(false);
		}, 300); // Durée de l'animation (ms)
	};

	return (
		<div className="w-full flex justify-center pt-8">
			<nav
				className={`inline-flex rounded-full border border-[rgba(0,0,0,0.06)] bg-gradient-to-r from-card/90 via-card/80 to-card/90 shadow-lg px-6 py-2.5 items-center gap-6 pointer-events-auto transition-all duration-300 ${scrolled ? "bg-card/95" : "bg-card/80"}`}
				style={{ width: 'auto', maxWidth: '100%' }}
				aria-label="Barre de navigation principale"
			>
				{/* Logo */}
				<Link
					href="#accueil"
					aria-label="Accueil"
					onClick={e => handleNavClick(e as any, "#accueil")}
					className="font-extrabold text-2xl tracking-widest uppercase font-sans text-foreground flex items-center gap-3 cursor-pointer select-none flex-shrink-0"
				>
					<span>RenanYhuel</span>
				</Link>

				{/* Desktop menu */}
				<ul className="hidden lg:flex items-center gap-2 flex-shrink min-w-0">
					{NAV_LINKS.map(link => (
						<li key={link.href} className="flex-shrink-0">
							{link.external ? (
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-1.5 text-foreground px-3 py-1.5 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary group cursor-pointer hover:bg-white/10 hover:shadow-md hover:text-[#3390ff] active:bg-primary/20`}
									tabIndex={0}
								>
									{link.icon}
									<span>{link.label}</span>
									<ArrowUpRight size={16} className="ml-0.5 text-muted-foreground group-hover:text-[#3390ff]" />
								</a>
							) : (
								<a
									href={link.href}
									onClick={e => handleNavClick(e, link.href)}
									className={`flex items-center gap-1.5 text-foreground px-3 py-1.5 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer
										 hover:bg-white/10 hover:shadow-md hover:text-[#3390ff] active:bg-primary/20`}
									tabIndex={0}
								>
									{link.icon}
									<span>{link.label}</span>
								</a>
							)}
						</li>
					))}
				</ul>

				{/* Switch thème (desktop) */}
				<button
					aria-label="Basculer le thème clair/sombre"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-border bg-muted hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer flex-shrink-0 ml-2"
					type="button"
				>
					{theme === "dark" ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-primary" />}
				</button>

				{/* Menu burger (mobile) */}
				<Button
					variant="ghost"
					size="sm"
					className="flex items-center px-3 lg:hidden ml-2"
					aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
					onClick={() => setMenuOpen(v => !v)}
				>
					{menuOpen ? (
						<X size={32} className="w-8 h-8" />
					) : (
						<Menu size={34} className="w-14 h-14" style={{ minWidth: 32, minHeight: 32 }} />
					)}
				</Button>

				{/* Drawer mobile sort du bas, prend toute la largeur, flotte au-dessus */}
				{showDrawer && (
					<div
						className={`fixed inset-0 z-[99] flex flex-col justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${!menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
						aria-modal="true"
						tabIndex={-1}
						onClick={() => setMenuOpen(false)}
					>
						<div
							ref={drawerRef}
							className={`w-full rounded-t-2xl bg-card border-t border-border shadow-2xl p-6 pt-8 flex flex-col items-center relative transition-transform duration-300 ${drawerVisible ? 'translate-y-0' : 'translate-y-full'}`}
							style={{ minHeight: 340 }}
							onClick={e => e.stopPropagation()}
						>
							{/* Logo centré en haut */}
							<span className="font-extrabold text-2xl tracking-widest uppercase font-sans mb-6" style={{ color: 'var(--foreground)' }}>RenanYhuel</span>
							{/* Liens de navigation */}
							<ul className="flex flex-col gap-4 w-full items-center mb-28">
								{NAV_LINKS_MOBILE.map(link => (
									<li key={link.href} className="w-full">
										{link.external ? (
											<a
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary group text-lg font-medium cursor-pointer"
												tabIndex={0}
												onClick={() => setMenuOpen(false)}
											>
												{link.icon}
												{link.label}
												<ArrowUpRight size={16} className="ml-0.5 text-muted-foreground group-hover:text-primary" />
											</a>
										) : (
											<a
												href={link.href}
												onClick={e => { handleNavClick(e, link.href); setMenuOpen(false); }}
												className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg font-medium cursor-pointer"
												tabIndex={0}
											>
												{link.icon}
												{link.label}
											</a>
										)}
									</li>
								))}
							</ul>
							{/* Ligne utilitaire en bas du drawer */}
							<div className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-6 pb-6">
								<button
									aria-label="Basculer le thème clair/sombre"
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-muted hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
									type="button"
								>
									{theme === "dark" ? <Moon size={24} className="text-primary" /> : <Sun size={24} className="text-primary" />}
								</button>
								<a
									href="#contact"
									onClick={e => { handleNavClick(e, "#contact"); }}
									className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-muted hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
									aria-label="Contact"
								>
									<Mail size={22} className="text-primary" />
								</a>
								<a
									href="https://github.com/RenanYhuel"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-muted hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
									aria-label="GitHub"
								>
									<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
									</svg>
								</a>
							</div>
							{/* Bouton fermer (croix) en haut à droite */}
							<button
								className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full border border-border bg-muted hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
								aria-label="Fermer le menu"
								onClick={() => setMenuOpen(false)}
							>
								<X size={22} />
							</button>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
}
