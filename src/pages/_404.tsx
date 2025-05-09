import { Home, ArrowLeft, ImageIcon } from 'lucide-react';

export function NotFound() {
	return (
		<div class="min-h-screen bg-gradient-to-b from-indigo-50 dark:from-indigo-900 to-background text-text flex items-center justify-center px-6 py-16">
			<div class="max-w-md w-full text-center">
				<h1 
					class="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-indigo-600 dark:to-indigo-400 animate-[fadeInUp_0.8s_ease_forwards_0.2s] opacity-0 transform translate-y-8"
				>
					404
				</h1>
				<h2 
					class="text-2xl md:text-3xl font-bold mt-4 mb-2 text-text animate-[fadeInUp_0.8s_ease_forwards_0.4s] opacity-0 transform translate-y-8"
				>
					Game Over! Page Not Found
				</h2>
				<p 
					class="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-[fadeInUp_0.8s_ease_forwards_0.6s] opacity-0 transform translate-y-8"
				>
					Looks like this page has been misplaced in our boardgame collection. 
					Perhaps it's hiding under the box lid or someone forgot to put it back in the rulebook.
				</p>

				<div 
					class="w-[300px] h-[200px] mx-auto my-8 border-2 border-dashed border-indigo-500 dark:border-indigo-400 rounded-xl flex items-center justify-center bg-indigo-50/30 dark:bg-indigo-900/30 animate-[fadeIn_0.8s_ease_forwards_0.8s] opacity-0"
				>
					<div class="flex flex-col items-center text-indigo-600 p-8">
						<ImageIcon size={48} />
						<p class="mt-2 font-medium">Image Placeholder</p>
						<p class="text-sm opacity-70">Replace with your custom image</p>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease_forwards_1s] opacity-0 transform translate-y-8">
					<a 
						href="/testing" 
						class="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-400 text-background font-medium hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
					>
						<Home size={18} />
						Back to Homepage
					</a>
					<a 
						href="javascript:history.back()" 
						class="px-8 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2"
					>
						<ArrowLeft size={18} />
						Go Back
					</a>
				</div>
			</div>
		</div>
	);
}
