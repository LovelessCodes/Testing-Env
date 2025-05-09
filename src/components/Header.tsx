import { useLocation } from 'preact-iso';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'preact/hooks';

export function Header() {
	const { path } = useLocation();
	// State for mobile menu
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Toggle mobile menu
	const toggleMobileMenu = () => {
		setMobileMenuOpen(prev => !prev);
	};

	// Navigation items
	const navItems = [
		{ label: 'Home', href: '/testing' },
		{ label: 'About', href: '/testing/about' },
		{ label: 'Projects', href: '/testing/projects' },
		{ label: 'Contact', href: '/testing/contact' },
	];

	// Animation variants
	const headerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<motion.header 
			className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
			initial="hidden"
			animate="visible"
			variants={headerVariants}
		>
			<div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
				{/* Logo */}
				<motion.a 
					href="/testing"
					className="flex items-center gap-2 font-bold text-xl no-underline text-foreground"
					variants={itemVariants}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<div className="size-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
						TE
					</div>
					<span>Testing Env</span>
				</motion.a>

				{/* Navigation */}
				<nav className="hidden md:flex gap-6">
					{navItems.map((item, index) => {
						const isActive = path === item.href;
						return (
							<motion.div
								key={item.href}
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<a 
									href={item.href}
									className={cn(
										"relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
										isActive ? "text-foreground" : "text-foreground/60"
									)}
								>
									{item.label}
									{isActive && (
										<motion.span 
											className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
											layoutId="underline"
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: '100%' }}
											transition={{ duration: 0.3 }}
										/>
									)}
								</a>
							</motion.div>
						);
					})}
				</nav>

				{/* Mobile menu button */}
				<motion.div 
					className="md:hidden"
					variants={itemVariants}
				>
					<Button 
						variant="ghost" 
						size="icon" 
						className="size-9"
						onClick={toggleMobileMenu}
						aria-expanded={mobileMenuOpen}
					>
						{mobileMenuOpen ? (
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
								<line x1="4" x2="20" y1="12" y2="12"/>
								<line x1="4" x2="20" y1="6" y2="6"/>
								<line x1="4" x2="20" y1="18" y2="18"/>
							</svg>
						)}
						<span className="sr-only">Toggle menu</span>
					</Button>
				</motion.div>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div 
						className="md:hidden absolute top-16 inset-x-0 bg-background border-b shadow-lg z-50"
						initial={{ opacity: 0, height: 0, y: -10 }}
						animate={{ opacity: 1, height: 'auto', y: 0 }}
						exit={{ opacity: 0, height: 0, y: -10 }}
						transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<nav className="flex flex-col p-4">
							{navItems.map((item, index) => {
								const isActive = path === item.href;
								return (
									<motion.a
										key={item.href}
										href={item.href}
										className={cn(
											"flex items-center py-3 px-4 text-base font-medium rounded-md",
											isActive 
												? "bg-primary/10 text-primary" 
												: "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
										)}
										onClick={() => setMobileMenuOpen(false)}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 + 0.1 }}
										whileTap={{ scale: 0.95 }}
									>
										{item.label}
									</motion.a>
								);
							})}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
