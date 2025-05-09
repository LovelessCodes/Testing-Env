import { Home, ArrowLeft, ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFound() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.15,
				delayChildren: 0.1,
				duration: 0.3
			}
		}
	};

	const itemVariants = {
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

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { 
			opacity: 1, 
			scale: 1,
			transition: {
				duration: 0.8,
				delay: 0.6,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		}
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.1, 0.25, 1.0]
			}
		},
		hover: { 
			scale: 1.05,
			transition: { duration: 0.2 }
		},
		tap: { scale: 0.98 }
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-indigo-50 dark:from-indigo-900 to-background text-text flex items-center justify-center px-6 py-16">
			<motion.div 
				className="max-w-md w-full text-center"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.h1 
					className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-indigo-600 dark:to-indigo-400"
					variants={itemVariants}
				>
					404
				</motion.h1>
				<motion.h2 
					className="text-2xl md:text-3xl font-bold mt-4 mb-2 text-text"
					variants={itemVariants}
				>
					Game Over!
				</motion.h2>
				<motion.h3 
					className="text-lg font-normal text-text"
					variants={itemVariants}
				>
					Page Not Found
				</motion.h3>
				<motion.p 
					className="text-lg text-gray-600 dark:text-gray-400 mb-8"
					variants={itemVariants}
				>
					Looks like this page has been misplaced in our boardgame collection. 
					Perhaps it's hiding under the box lid or someone forgot to put it back in the rulebook.
				</motion.p>

				<motion.div 
					className="w-[300px] h-[200px] mx-auto my-8 border-2 border-dashed border-indigo-500 dark:border-indigo-400 rounded-xl flex items-center justify-center bg-indigo-50/30 dark:bg-indigo-900/30"
					variants={imageVariants}
				>
					<div className="flex flex-col items-center text-indigo-600 p-8">
						<ImageIcon size={48} />
						<p className="mt-2 font-medium">Image Placeholder</p>
						<p className="text-sm opacity-70">Replace with your custom image</p>
					</div>
				</motion.div>

				<motion.div 
					className="flex flex-col sm:flex-row gap-4 justify-center"
					variants={itemVariants}
				>
					<motion.a 
						href="/testing" 
						className="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-400 text-background font-medium flex items-center justify-center gap-2"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<Home size={18} />
						Back to Homepage
					</motion.a>
					<motion.a 
						href="javascript:history.back()" 
						className="px-8 py-3 rounded-lg border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium flex items-center justify-center gap-2"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<ArrowLeft size={18} />
						Go Back
					</motion.a>
				</motion.div>
			</motion.div>
		</div>
	);
}
