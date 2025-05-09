import { useEffect, useRef, useState } from 'preact/hooks';
import { motion, useInView, useAnimation } from 'motion/react';

// Import icons
import { Github, Download, Star, Users, Share2, Lock, Fingerprint, Heart } from 'lucide-react';

export function Home() {
	// State for counter animations
	const [statsVisible, setStatsVisible] = useState(false);

	// References for animations
	const heroRef = useRef(null);
	const statsRef = useRef(null);
	const featuresRef = useRef(null);
	const testimonialRef = useRef(null);
	const ctaRef = useRef(null);

	// InView hooks for scroll-based animations
	const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
	const featuresInView = useInView(featuresRef, { once: true, amount: 0.1 });
	const testimonialInView = useInView(testimonialRef, { once: true, amount: 0.3 });
	const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

	// Animation controls
	const featuresControls = useAnimation();
	const testimonialControls = useAnimation();
	const ctaControls = useAnimation();

	// State for counter values
	const [githubStars, setGithubStars] = useState(0);
	const [dockerDownloads, setDockerDownloads] = useState(0);
	const [activeUsers, setActiveUsers] = useState(0);

	// Counter animation function using Motion's animate utility
	const animateCounter = (setter, target, duration = 2000) => {
		const startTime = Date.now();
		let animationFrame;

		const updateCounter = () => {
			const elapsedTime = Date.now() - startTime;
			const progress = Math.min(elapsedTime / duration, 1);
			
			// Easing function for smoother animation
			const easedProgress = 1 - Math.pow(1 - progress, 3);
			
			const currentValue = Math.floor(easedProgress * target);
			setter(currentValue);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(updateCounter);
			}
		};
		
		animationFrame = requestAnimationFrame(updateCounter);
		
		// Return cleanup function
		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	};

	// Animation variants
	const heroVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.15,
				delayChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		}
	};

	const featureCardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		})
	};

	const testimonialVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		}
	};

	const ctaVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		}
	};

	// Trigger animations when elements come into view
	useEffect(() => {
		if (statsInView) {
			setStatsVisible(true);
			
			// Start counter animations with slight delays for better visual effect
			const cleanupGithub = animateCounter(setGithubStars, 5742, 2000);
			const cleanupDocker = setTimeout(() => {
				return animateCounter(setDockerDownloads, 125000, 2500);
			}, 200);
			const cleanupUsers = setTimeout(() => {
				return animateCounter(setActiveUsers, 12500, 2200);
			}, 400);
			
			// Cleanup function
			return () => {
				cleanupGithub();
				clearTimeout(cleanupDocker);
				clearTimeout(cleanupUsers);
			};
		}
	}, [statsInView]);
	
	// Trigger other section animations
	useEffect(() => {
		if (featuresInView) {
			featuresControls.start('visible');
		}
		if (testimonialInView) {
			testimonialControls.start('visible');
		}
		if (ctaInView) {
			ctaControls.start('visible');
		}
	}, [featuresInView, testimonialInView, ctaInView, featuresControls, testimonialControls, ctaControls]);

	return (
		<div class="flex flex-col bg-gradient-to-b from-indigo-50 dark:from-indigo-950 to-background text-text">
			{/* Hero Section */}
			<motion.section 
				ref={heroRef} 
				className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div 
					className="inline-block mb-6 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-800 rounded-full"
					variants={itemVariants}
				>
					<span className="text-indigo-800 dark:text-indigo-200 font-medium text-sm">Your Ultimate Boardgame Collection Manager</span>
				</motion.div>
				<motion.h1 
					className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
					variants={itemVariants}
				>
					Organize Your Boardgame Collection Like Never Before
				</motion.h1>
				<motion.p 
					className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
					variants={itemVariants}
				>
					The perfect self-hosted solution for boardgame enthusiasts to manage, share, and discover new games.
					Secure, feature-rich, and community-driven.
				</motion.p>
				<motion.div 
					className="flex flex-col sm:flex-row gap-4 justify-center"
					variants={itemVariants}
				>
					<motion.a 
						href="#features" 
						className="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-800 text-background font-medium"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						Explore Features
					</motion.a>
					<motion.a 
						href="#get-started" 
						className="px-8 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-800 text-indigo-600 dark:text-indigo-800 font-medium"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						Get Started
					</motion.a>
				</motion.div>
				
				<motion.div 
					className="mt-16 relative"
					variants={itemVariants}
				>
					<div className="absolute inset-0 bg-gradient-to-t from-indigo-50 dark:from-indigo-950 to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
					<motion.img 
						src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
						alt="Boardgame collection showcase" 
						className="rounded-xl shadow-2xl mx-auto max-w-full h-auto object-cover"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					/>
				</motion.div>
			</motion.section>

			{/* Stats Section */}
			<motion.section 
				ref={statsRef}
				className="py-16 px-6 md:px-12 max-w-7xl mx-auto"
				initial="hidden"
				animate={statsInView ? "visible" : "hidden"}
				variants={containerVariants}
			>
				<motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"
						variants={itemVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<motion.div 
							className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-800"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<Github size={32} />
						</motion.div>
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">GitHub Stars</h3>
						<motion.p 
							className="text-4xl font-bold text-indigo-600 dark:text-indigo-800 mb-2"
							initial={{ opacity: 0 }}
							animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
						>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{githubStars.toLocaleString()}
							</motion.span>
						</motion.p>
						<p className="text-gray-500 dark:text-gray-400">From the community</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"
						variants={itemVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<motion.div 
							className="flex justify-center mb-4 text-indigo-600"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
						>
							<Download size={32} />
						</motion.div>
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Docker Downloads</h3>
						<motion.p 
							className="text-4xl font-bold text-indigo-600 dark:text-indigo-800 mb-2"
							initial={{ opacity: 0 }}
							animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
						>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{dockerDownloads.toLocaleString()}
							</motion.span>
						</motion.p>
						<p className="text-gray-500 dark:text-gray-400">And growing daily</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"
						variants={itemVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<motion.div 
							className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-800"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={statsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							<Users size={32} />
						</motion.div>
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Active Users</h3>
						<motion.p 
							className="text-4xl font-bold text-indigo-600 dark:text-indigo-800 mb-2"
							initial={{ opacity: 0 }}
							animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
						>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{activeUsers.toLocaleString()}
							</motion.span>
						</motion.p>
						<p className="text-gray-500 dark:text-gray-400">Worldwide community</p>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Features Section */}
			<motion.section 
				id="features"
				ref={featuresRef}
				className="py-16 px-6 md:px-12 max-w-7xl mx-auto"
				initial="hidden"
				animate={featuresControls}
			>
				<motion.div 
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2 
						className="text-3xl md:text-4xl font-bold mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Powerful Features
					</motion.h2>
					<motion.p 
						className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Everything you need to manage your boardgame collection and connect with other enthusiasts.
					</motion.p>
				</motion.div>
				
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					initial="hidden"
					animate={featuresInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
						custom={0}
						variants={featureCardVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
					>
						<motion.div 
							className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6"
							whileHover={{ rotate: 10, scale: 1.1 }}
						>
							<Heart size={24} />
						</motion.div>
						<h3 className="text-xl font-semibold mb-3">Collection Management</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Organize your boardgames with detailed information, play statistics, and custom categories.
						</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
						custom={1}
						variants={featureCardVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
					>
						<motion.div 
							className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6"
							whileHover={{ rotate: 10, scale: 1.1 }}
						>
							<Share2 size={24} />
						</motion.div>
						<h3 className="text-xl font-semibold mb-3">Sharing Capabilities</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Share your collection and wishlists with friends or the public. Perfect for game nights!
						</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
						custom={2}
						variants={featureCardVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
					>
						<motion.div 
							className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6"
							whileHover={{ rotate: 10, scale: 1.1 }}
						>
							<Lock size={24} />
						</motion.div>
						<h3 className="text-xl font-semibold mb-3">Social Authentication</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Easy sign-up and login with your favorite social accounts. Secure and convenient.
						</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
						custom={3}
						variants={featureCardVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
					>
						<motion.div 
							className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6"
							whileHover={{ rotate: 10, scale: 1.1 }}
						>
							<Fingerprint size={24} />
						</motion.div>
						<h3 className="text-xl font-semibold mb-3">2FA & Passkeys</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Enhanced security with two-factor authentication and modern passkey support.
						</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
						custom={4}
						variants={featureCardVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
					>
						<motion.div 
							className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6"
							whileHover={{ rotate: 10, scale: 1.1 }}
						>
							<Star size={24} />
						</motion.div>
						<h3 className="text-xl font-semibold mb-3">Wishlists</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Keep track of games you want to acquire next. Perfect for gift ideas!
						</p>
					</motion.div>
					
					<motion.div 
						className="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
						custom={5}
						variants={featureCardVariants}
						whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
					>
						<motion.div 
							className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6"
							whileHover={{ rotate: 10, scale: 1.1 }}
						>
							<Users size={24} />
						</motion.div>
						<h3 className="text-xl font-semibold mb-3">Community Features</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Connect with other boardgame enthusiasts, share recommendations, and discover new games.
						</p>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* Testimonial Section */}
			<motion.section 
				ref={testimonialRef}
				className="py-16 px-6 md:px-12 max-w-7xl mx-auto"
				initial="hidden"
				animate={testimonialControls}
				variants={testimonialVariants}
			>
				<motion.div 
					className="bg-indigo-600 dark:bg-indigo-800 rounded-2xl p-8 md:p-12 text-text relative overflow-hidden"
					whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
					transition={{ type: "spring", stiffness: 300, damping: 20 }}
				>
					<motion.div 
						className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 dark:bg-indigo-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"
						animate={{ 
							scale: [1, 1.1, 1],
							rotate: [0, 5, 0]
						}}
						transition={{ 
							duration: 8,
							repeat: Infinity,
							repeatType: "reverse"
						}}
					></motion.div>
					<motion.div 
						className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 dark:bg-indigo-900 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"
						animate={{ 
							scale: [1, 1.2, 1],
							rotate: [0, -5, 0]
						}}
						transition={{ 
							duration: 10,
							repeat: Infinity,
							repeatType: "reverse"
						}}
					></motion.div>
					
					<motion.div 
						className="relative z-10 max-w-3xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<motion.div 
							className="mb-8 flex justify-center"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={testimonialInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<svg width="45" height="36" className="fill-current text-indigo-300 dark:text-indigo-200" viewBox="0 0 45 36" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27H18V36H9C4.03 36 0 31.97 0 27V13.5C0 6.04 6.04 0 13.5 0ZM40.5 0C33.04 0 27 6.04 27 13.5C27 20.96 33.04 27 40.5 27H45V36H36C31.03 36 27 31.97 27 27V13.5C27 6.04 33.04 0 40.5 0Z" />
							</svg>
						</motion.div>
						
						<motion.p 
							className="text-xl md:text-2xl mb-6 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							This application has transformed how we manage our boardgame library at Dice & Dragons. The sharing features make it incredibly easy to showcase our collection to customers, and the wishlist functionality helps us track games our community wants us to acquire.
						</motion.p>
						
						<motion.div 
							className="flex items-center justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							<motion.img 
								src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
								alt="Sarah Johnson" 
								className="w-12 h-12 rounded-full object-cover border-2 border-indigo-300 dark:border-indigo-600 mr-4"
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 300 }}
							/>
							<div className="text-left">
								<p className="font-semibold">Sarah Johnson</p>
								<p className="text-indigo-200 dark:text-indigo-400 text-sm">Manager, Dice & Dragons Boardgame Café</p>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* CTA Section */}
			<motion.section 
				id="get-started"
				ref={ctaRef}
				className="py-16 px-6 md:px-12 max-w-7xl mx-auto text-center"
				initial="hidden"
				animate={ctaControls}
				variants={ctaVariants}
			>
				<motion.h2 
					className="text-3xl md:text-4xl font-bold mb-6"
					variants={itemVariants}
				>
					Ready to Organize Your Collection?
				</motion.h2>
				<motion.p 
					className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
					variants={itemVariants}
				>
					Get started with your self-hosted boardgame collection manager today. It's free, open-source, and easy to set up.
				</motion.p>
				<motion.div 
					className="flex flex-col sm:flex-row gap-4 justify-center"
					variants={itemVariants}
				>
					<motion.a 
						href="https://github.com/boardgame-collection-manager" 
						className="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-800 text-background font-medium flex items-center justify-center gap-2"
						whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<Github size={20} />
						View on GitHub
					</motion.a>
					<motion.a 
						href="https://hub.docker.com/r/boardgame-collection-manager" 
						className="px-8 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-800 text-indigo-600 dark:text-indigo-200 font-medium flex items-center justify-center gap-2"
						whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<Download size={20} />
						Docker Image
					</motion.a>
				</motion.div>
			</motion.section>
		</div>
	);
}
