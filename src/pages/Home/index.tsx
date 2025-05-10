import { motion } from 'motion/react';

export function Home() {
	return (
		<div className="container px-4 py-12 md:py-24 mx-auto">
			{/* Hero Section */}
			<section className="flex flex-col justify-center items-center text-center mb-16 md:mb-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="w-full max-w-3xl mx-auto"
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						whileHover={{ 
							scale: 1.05, 
							rotate: [0, -2, 2, -2, 0],
							transition: { duration: 0.5, ease: "easeInOut" }
						}}
						whileTap={{ scale: 0.95 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="size-24 md:size-32 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center cursor-pointer"
					>
						<motion.span 
							className="text-4xl md:text-5xl font-bold text-primary"
							whileHover={{ scale: 1.1 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							TE
						</motion.span>
					</motion.div>
					<motion.h1 
						className="text-4xl md:text-6xl font-bold mb-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						Testing <span className="text-primary">Env</span>
					</motion.h1>
					<motion.p 
						className="text-xl md:text-2xl text-muted-foreground mb-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						A playground for experimenting with modern web technologies
					</motion.p>
					<motion.div 
						className="flex flex-wrap gap-4 justify-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						<motion.a 
							href="https://github.com/LovelessCodes" 
							target="_blank" 
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-sm"
							whileHover={{ 
								scale: 1.05, 
								backgroundColor: "var(--primary)", 
								boxShadow: "0 10px 15px -3px rgb(var(--primary) / 0.3)" 
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<motion.svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="20" 
								height="20" 
								viewBox="0 0 24 24" 
								fill="none" 
								stroke="currentColor" 
								stroke-width="2" 
								stroke-linecap="round" 
								stroke-linejoin="round" 
								className="size-5"
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
								<path d="M9 18c-4.51 2-5-2-7-2"/>
							</motion.svg>
							My GitHub
						</motion.a>
						<motion.a 
							href="https://github.com/LovelessCodes/Testing-Env" 
							target="_blank" 
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium shadow-sm"
							whileHover={{ 
								scale: 1.05, 
								backgroundColor: "var(--secondary)", 
								boxShadow: "0 10px 15px -3px rgb(var(--secondary) / 0.3)" 
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<motion.svg 
								xmlns="http://www.w3.org/2000/svg" 
								width="20" 
								height="20" 
								viewBox="0 0 24 24" 
								fill="none" 
								stroke="currentColor" 
								stroke-width="2" 
								stroke-linecap="round" 
								stroke-linejoin="round" 
								className="size-5"
								whileHover={{ y: [0, -3, 0] }}
								transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
							>
								<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
							</motion.svg>
							Project Repository
						</motion.a>
					</motion.div>
				</motion.div>
			</section>

			{/* Features Section */}
			<section className="mb-16 md:mb-24">
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-3 gap-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.1
							}
						}
					}}
				>
					{[
						{
							title: "Preact",
							description: "Fast 3kB alternative to React with the same modern API",
							icon: (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-10">
									<circle cx="12" cy="12" r="10"/>
									<path d="m4.9 4.9 14.2 14.2"/>
								</svg>
							)
						},
						{
							title: "TailwindCSS v4",
							description: "A utility-first CSS framework for rapid UI development",
							icon: (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-10">
									<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
								</svg>
							)
						},
						{
							title: "Motion",
							description: "A production-ready motion library for Preact",
							icon: (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-10">
									<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
								</svg>
							)
						}
					].map((feature, index) => (
						<motion.div
							key={index}
							className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden relative"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
							}}
							whileHover={{ 
								y: -5,
								boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
							}}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<motion.div 
								className="absolute inset-0 bg-primary/5 opacity-0"
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>
							<motion.div 
								className="mb-4 p-2 w-fit rounded-lg bg-primary/10 text-primary relative z-10"
								whileHover={{ 
									scale: 1.1,
									rotate: [0, -5, 5, 0],
									transition: { duration: 0.5 }
								}}
							>
								{feature.icon}
							</motion.div>
							<motion.h3 
								className="text-xl font-semibold mb-2 relative z-10"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 400 }}
							>
								{feature.title}
							</motion.h3>
							<p className="text-muted-foreground relative z-10">{feature.description}</p>
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* CTA Section */}
			<section>
				<motion.div 
					className="rounded-2xl p-8 md:p-12 bg-primary/5 border relative overflow-hidden"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.7 }}
					whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" }}
				>
					<motion.div className="relative z-10 max-w-2xl">
						<motion.h2 
							className="text-2xl md:text-3xl font-bold mb-4"
							whileHover={{ x: 5 }}
							transition={{ type: "spring", stiffness: 400 }}
						>
							Ready to Experiment?
						</motion.h2>
						<p className="text-muted-foreground mb-6">This environment is set up for testing and experimenting with modern web technologies. Dive in and start building!</p>
						<div className="flex flex-wrap gap-4">
							<motion.a 
								href="https://github.com/LovelessCodes/Testing-Env" 
								target="_blank" 
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-sm"
								whileHover={{ 
									scale: 1.05, 
									backgroundColor: "var(--primary)", 
									boxShadow: "0 10px 15px -3px rgb(var(--primary) / 0.3)" 
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
							>
								<motion.svg 
									xmlns="http://www.w3.org/2000/svg" 
									width="20" 
									height="20" 
									viewBox="0 0 24 24" 
									fill="none" 
									stroke="currentColor" 
									strokeWidth="2" 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									className="size-5"
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.5 }}
								>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
									<path d="M9 18c-4.51 2-5-2-7-2"/>
								</motion.svg>
								View Source
							</motion.a>
							<motion.a 
								href="/testing/about" 
								className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium shadow-sm"
								whileHover={{ 
									scale: 1.05, 
									backgroundColor: "var(--secondary)", 
									boxShadow: "0 10px 15px -3px rgb(var(--secondary) / 0.3)" 
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
							>
								Learn More
							</motion.a>
						</div>
					</motion.div>
					<motion.div 
						className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"
						whileHover={{ opacity: 0.7 }}
						transition={{ duration: 0.5 }}
					/>
					<motion.div 
						className="absolute -bottom-16 -right-16 size-64 rounded-full bg-primary/5 blur-3xl"
						whileHover={{ scale: 1.2 }}
						transition={{ duration: 1 }}
					/>
					<motion.div 
						className="absolute -top-16 -left-16 size-48 rounded-full bg-primary/5 blur-3xl opacity-0"
						whileHover={{ opacity: 0.7, scale: 1.2 }}
						transition={{ duration: 1 }}
					/>
				</motion.div>
			</section>

			{/* Footer */}
			<footer className="mt-24 text-center text-sm text-muted-foreground">
				<p>© {new Date().getFullYear()} Testing Env by <a href="https://github.com/LovelessCodes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LovelessCodes</a></p>
			</footer>
		</div>
	);
}
