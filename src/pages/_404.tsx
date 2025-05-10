import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export function NotFound() {
	return (
		<div className="flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 min-h-[85vh]">
			<motion.div 
				className="flex flex-col items-center text-center w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
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
					className="relative mb-6 sm:mb-8 w-full max-w-[250px] sm:max-w-[300px] mx-auto cursor-pointer"
				>
					<motion.div 
						className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary/10 select-none text-center"
						initial={{ y: -20 }}
						animate={{ y: 0 }}
						transition={{ 
							type: "spring", 
							stiffness: 300, 
							damping: 10 
						}}
					>
						404
					</motion.div>
					<motion.div 
						className="absolute inset-0 flex items-center justify-center"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ 
							opacity: 1, 
							scale: 1,
							transition: { delay: 0.4, duration: 0.5 }
						}}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 }
						}}
					>
						<motion.svg 
							xmlns="http://www.w3.org/2000/svg" 
							width="24" 
							height="24" 
							viewBox="0 0 24 24" 
							fill="none" 
							stroke="currentColor" 
							strokeWidth="1" 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							className="text-primary/50 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
							whileHover={{
								rotate: [0, 10, -10, 0],
								transition: { duration: 0.5, ease: "easeInOut" }
							}}
							animatePresence
						>
							<circle cx="12" cy="12" r="10"/>
							<motion.path 
								d="M16 16s-1.5-2-4-2-4 2-4 2"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ delay: 0.6, duration: 0.5 }}
							/>
							<motion.line 
								x1="9" 
								x2="9.01" 
								y1="9" 
								y2="9"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ delay: 0.7, duration: 0.3 }}
							/>
							<motion.line 
								x1="15" 
								x2="15.01" 
								y1="9" 
								y2="9"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ delay: 0.7, duration: 0.3 }}
							/>
						</motion.svg>
					</motion.div>
				</motion.div>
				
				<motion.h1 
					className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					whileHover={{ scale: 1.03, x: 5 }}
					transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
				>
					<motion.span
						className="inline-block"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
					>
						Oops!
					</motion.span>{" "}
					<motion.span 
						className="inline-block text-primary"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						Page Not Found
					</motion.span>
				</motion.h1>
				
				<motion.p 
					className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					whileHover={{ y: -5, x: 3 }}
					transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
				>
					The page you're looking for doesn't exist or has been moved.
				</motion.p>
				
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4"
				>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className="w-full sm:w-auto"
					>
						<Button 
							asChild
							size="lg"
							variant="default"
							className="gap-2 w-full sm:w-auto shadow-sm"
						>
							<a href="/testing/" className="flex items-center justify-center w-full">
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
									whileHover={{ x: -3 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<path d="m12 19-7-7 7-7"/>
									<path d="M19 12H5"/>
								</motion.svg>
								Back to Home
							</a>
						</Button>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className="w-full sm:w-auto"
					>
						<Button 
							asChild
							size="lg"
							variant="outline"
							className="gap-2 w-full sm:w-auto shadow-sm"
						>
							<a 
								href="https://github.com/LovelessCodes/Testing-Env/issues" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center justify-center w-full"
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
								Report Issue
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</motion.div>
			
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
				<motion.div 
					className="absolute -top-20 -left-20 size-48 sm:size-64 rounded-full bg-primary/5 blur-3xl"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ 
						opacity: 1, 
						scale: 1,
						transition: { duration: 1 } 
					}}
					whileHover={{ 
						scale: 1.2, 
						opacity: 0.9,
						transition: { duration: 1 } 
					}}
				/>
				<motion.div 
					className="absolute -bottom-32 -right-32 size-64 sm:size-96 rounded-full bg-primary/5 blur-3xl"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ 
						opacity: 0.8, 
						scale: 1,
						transition: { duration: 1, delay: 0.2 } 
					}}
					whileHover={{ 
						scale: 1.2, 
						opacity: 0.9,
						transition: { duration: 1 } 
					}}
				/>
				<motion.div 
					className="absolute top-1/3 right-10 size-32 sm:size-48 rounded-full bg-primary/5 blur-3xl opacity-0"
					animate={{ 
						opacity: [0, 0.5, 0],
						scale: [0.8, 1.2, 0.8],
						transition: { 
							duration: 8, 
							repeat: Infinity,
							repeatType: "reverse",
							times: [0, 0.5, 1]
						} 
					}}
				/>
				<motion.div 
					className="absolute bottom-1/4 left-10 size-24 sm:size-32 rounded-full bg-primary/5 blur-3xl opacity-0"
					animate={{ 
						opacity: [0, 0.4, 0],
						scale: [0.8, 1.2, 0.8],
						transition: { 
							duration: 6, 
							repeat: Infinity,
							repeatType: "reverse",
							times: [0, 0.5, 1],
							delay: 2
						} 
					}}
				/>
			</div>
		</div>
	);
}
