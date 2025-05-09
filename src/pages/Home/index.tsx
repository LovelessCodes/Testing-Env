import { useEffect, useRef } from 'preact/hooks';
import './style.css';

// Import icons
import { Github, Download, Star, Users, Share2, Lock, Fingerprint, Heart } from 'lucide-react';

export function Home() {
	// References for animations
	const heroRef = useRef(null);
	const statsRef = useRef(null);
	const featuresRef = useRef(null);
	const testimonialRef = useRef(null);
	const ctaRef = useRef(null);

	useEffect(() => {
		// We'll use CSS animations instead of motion library
		// to avoid TypeScript compatibility issues
		if (heroRef.current) {
			const h1 = heroRef.current.querySelector('h1');
			const p = heroRef.current.querySelector('p');
			const buttons = heroRef.current.querySelector('.hero-buttons');
			
			if (h1) h1.classList.add('animate-fade-in');
			if (p) setTimeout(() => p.classList.add('animate-fade-in'), 200);
			if (buttons) setTimeout(() => buttons.classList.add('animate-fade-in'), 400);
		}

		// Stats counter animation
		if (statsRef.current) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					const counters = statsRef.current.querySelectorAll('.stat-value');
					counters.forEach((counter) => {
						const target = parseInt(counter.getAttribute('data-target'));
						let current = 0;
						const increment = target / 100;
						const updateCounter = () => {
							current += increment;
							counter.textContent = Math.floor(current).toLocaleString();
							if (current < target) {
								requestAnimationFrame(updateCounter);
							} else {
								counter.textContent = target.toLocaleString();
							}
						};
						updateCounter();
					});
					observer.disconnect();
				}
			}, { threshold: 0.5 });
			
			observer.observe(statsRef.current);
		}

		// Features animation
		if (featuresRef.current) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					const cards = featuresRef.current.querySelectorAll('.feature-card');
					cards.forEach((card, index) => {
						setTimeout(() => {
							card.classList.add('animate-fade-in');
						}, index * 100);
					});
					observer.disconnect();
				}
			}, { threshold: 0.1 });
			
			observer.observe(featuresRef.current);
		}

		// Testimonial animation
		if (testimonialRef.current) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					testimonialRef.current.classList.add('animate-scale-in');
					observer.disconnect();
				}
			}, { threshold: 0.3 });
			
			observer.observe(testimonialRef.current);
		}

		// CTA animation
		if (ctaRef.current) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					ctaRef.current.classList.add('animate-fade-in');
					observer.disconnect();
				}
			}, { threshold: 0.3 });
			
			observer.observe(ctaRef.current);
		}

		// Cleanup function
		return () => {
			// Clean up any observers if needed
		};
	}, []);

	return (
		<div class="min-h-screen bg-gradient-to-b from-indigo-50 dark:from-indigo-950 to-background text-text">
			{/* Hero Section */}
			<section 
				ref={heroRef} 
				class="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center"
			>
				<div class="inline-block mb-6 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-800 rounded-full">
					<span class="text-indigo-800 dark:text-indigo-200 font-medium text-sm">Your Ultimate Boardgame Collection Manager</span>
				</div>
				<h1 class="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
					Organize Your Boardgame Collection Like Never Before
				</h1>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
					The perfect self-hosted solution for boardgame enthusiasts to manage, share, and discover new games.
					Secure, feature-rich, and community-driven.
				</p>
				<div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
					<a 
						href="#features" 
						class="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-800 text-background font-medium hover:bg-indigo-700 dark:hover:bg-indigo-900 transition-colors"
					>
						Explore Features
					</a>
					<a 
						href="#get-started" 
						class="px-8 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-800 text-indigo-600 dark:text-indigo-800 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500 transition-colors"
					>
						Get Started
					</a>
				</div>
				
				<div class="mt-16 relative">
					<div class="absolute inset-0 bg-gradient-to-t from-indigo-50 dark:from-indigo-950 to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
					<img 
						src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
						alt="Boardgame collection showcase" 
						class="rounded-xl shadow-2xl mx-auto max-w-full h-auto object-cover"
					/>
				</div>
			</section>

			{/* Stats Section */}
			<section 
				ref={statsRef}
				class="py-16 px-6 md:px-12 max-w-7xl mx-auto"
			>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
						<div class="flex justify-center mb-4 text-indigo-600 dark:text-indigo-800">
							<Github size={32} />
						</div>
						<h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">GitHub Stars</h3>
						<p class="stat-value text-4xl font-bold text-indigo-600 dark:text-indigo-800 mb-2" data-target="5742">0</p>
						<p class="text-gray-500 dark:text-gray-400">From the community</p>
					</div>
					
					<div class="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
						<div class="flex justify-center mb-4 text-indigo-600">
							<Download size={32} />
						</div>
						<h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Docker Downloads</h3>
						<p class="stat-value text-4xl font-bold text-indigo-600 dark:text-indigo-800 mb-2" data-target="125000">0</p>
						<p class="text-gray-500 dark:text-gray-400">And growing daily</p>
					</div>
					
					<div class="bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
						<div class="flex justify-center mb-4 text-indigo-600 dark:text-indigo-800">
							<Users size={32} />
						</div>
						<h3 class="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Active Users</h3>
						<p class="stat-value text-4xl font-bold text-indigo-600 dark:text-indigo-800 mb-2" data-target="12500">0</p>
						<p class="text-gray-500 dark:text-gray-400">Worldwide community</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section 
				id="features"
				ref={featuresRef}
				class="py-16 px-6 md:px-12 max-w-7xl mx-auto"
			>
				<div class="text-center mb-16">
					<h2 class="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
					<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Everything you need to manage your boardgame collection and connect with other enthusiasts.
					</p>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div class="feature-card bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6">
							<Heart size={24} />
						</div>
						<h3 class="text-xl font-semibold mb-3">Collection Management</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Organize your boardgames with detailed information, play statistics, and custom categories.
						</p>
					</div>
					
					<div class="feature-card bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6">
							<Share2 size={24} />
						</div>
						<h3 class="text-xl font-semibold mb-3">Sharing Capabilities</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Share your collection and wishlists with friends or the public. Perfect for game nights!
						</p>
					</div>
					
					<div class="feature-card bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6">
							<Lock size={24} />
						</div>
						<h3 class="text-xl font-semibold mb-3">Social Authentication</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Easy sign-up and login with your favorite social accounts. Secure and convenient.
						</p>
					</div>
					
					<div class="feature-card bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6">
							<Fingerprint size={24} />
						</div>
						<h3 class="text-xl font-semibold mb-3">2FA & Passkeys</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Enhanced security with two-factor authentication and modern passkey support.
						</p>
					</div>
					
					<div class="feature-card bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6">
							<Star size={24} />
						</div>
						<h3 class="text-xl font-semibold mb-3">Wishlists</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Keep track of games you want to acquire next. Perfect for gift ideas!
						</p>
					</div>
					
					<div class="feature-card bg-background p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-200 mb-6">
							<Users size={24} />
						</div>
						<h3 class="text-xl font-semibold mb-3">Community Features</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Connect with other boardgame enthusiasts, share recommendations, and discover new games.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section 
				ref={testimonialRef}
				class="py-16 px-6 md:px-12 max-w-7xl mx-auto"
			>
				<div class="bg-indigo-600 dark:bg-indigo-800 rounded-2xl p-8 md:p-12 text-text relative overflow-hidden">
					<div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500 dark:bg-indigo-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
					<div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 dark:bg-indigo-900 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
					
					<div class="relative z-10 max-w-3xl mx-auto text-center">
						<div class="mb-8 flex justify-center">
							<svg width="45" height="36" class="fill-current text-indigo-300 dark:text-indigo-200" viewBox="0 0 45 36" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5 0C6.04 0 0 6.04 0 13.5C0 20.96 6.04 27 13.5 27H18V36H9C4.03 36 0 31.97 0 27V13.5C0 6.04 6.04 0 13.5 0ZM40.5 0C33.04 0 27 6.04 27 13.5C27 20.96 33.04 27 40.5 27H45V36H36C31.03 36 27 31.97 27 27V13.5C27 6.04 33.04 0 40.5 0Z" />
							</svg>
						</div>
						
						<p class="text-xl md:text-2xl mb-6 leading-relaxed">
							This application has transformed how we manage our boardgame library at Dice & Dragons. The sharing features make it incredibly easy to showcase our collection to customers, and the wishlist functionality helps us track games our community wants us to acquire.
						</p>
						
						<div class="flex items-center justify-center">
							<img 
								src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
								alt="Sarah Johnson" 
								class="w-12 h-12 rounded-full object-cover border-2 border-indigo-300 dark:border-indigo-600 mr-4"
							/>
							<div class="text-left">
								<p class="font-semibold">Sarah Johnson</p>
								<p class="text-indigo-200 dark:text-indigo-400 text-sm">Manager, Dice & Dragons Boardgame Café</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section 
				id="get-started"
				ref={ctaRef}
				class="py-16 px-6 md:px-12 max-w-7xl mx-auto text-center"
			>
				<h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Organize Your Collection?</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
					Get started with your self-hosted boardgame collection manager today. It's free, open-source, and easy to set up.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a 
						href="https://github.com/boardgame-collection-manager" 
						class="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-800 text-background font-medium hover:bg-indigo-700 dark:hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2"
					>
						<Github size={20} />
						View on GitHub
					</a>
					<a 
						href="https://hub.docker.com/r/boardgame-collection-manager" 
						class="px-8 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-800 text-indigo-600 dark:text-indigo-200 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
					>
						<Download size={20} />
						Docker Image
					</a>
				</div>
			</section>
		</div>
	);
}
