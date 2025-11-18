"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const upliftingQuotes = [
	"Every rejection is a step closer to the right opportunity! 🌟",
	"You're not being rejected - you're being redirected to something better! ✨",
	"The best is yet to come, and it's coming soon! 🚀",
	"Today's 'no' is tomorrow's 'thank goodness that didn't work out'! 💫",
	"You're exactly where you need to be in your journey! 🌈",
	"Every closed door is making room for the perfect one to open! 🚪",
	"Your dream job is out there, and it's looking for you too! 💝",
	"Plot twist: This rejection just saved you from the wrong place! 🎭",
	"You're collecting experiences, not failures! 📚",
	"The universe is just making sure you're ready for something amazing! 🌌",
];

export default function Home() {
	const [currentQuote, setCurrentQuote] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const randomQuote =
			upliftingQuotes[Math.floor(Math.random() * upliftingQuotes.length)];
		setCurrentQuote(randomQuote);
		setIsLoading(false);
	}, []);

	const getNewQuote = () => {
		setIsLoading(true);
		setTimeout(() => {
			const randomQuote =
				upliftingQuotes[Math.floor(Math.random() * upliftingQuotes.length)];
			setCurrentQuote(randomQuote);
			setIsLoading(false);
		}, 300);
	};

	return (
		<>
			<div className='min-h-screen bg-linear-to-br from-cyan-200 via-purple-200 to-rose-200 p-8'>
				<div className='max-w-none mx-8 bg-white rounded-3xl overflow-hidden'>
					<nav className='bg-white border-b border-gray-100'>
						<div className='px-8 py-4 flex justify-between items-center'>
							<h1 className='text-2xl font-bold text-purple-600'>Peppzonen</h1>
							<div className='flex space-x-6'>
								<Link
									href='/support'
									className='text-purple-600 hover:text-purple-800 transition-colors'
								>
									Support
								</Link>
								<Link
									href='/actions'
									className='text-purple-600 hover:text-purple-800 transition-colors'
								>
									Actions
								</Link>
								<Link
									href='/personality-test'
									className='text-purple-600 hover:text-purple-800 transition-colors'
								>
									Fun Test
								</Link>
							</div>
						</div>
					</nav>

					<div className='bg-linear-to-br from-yellow-50 to-pink-50'>
						<main className='p-1 md:p-12'>
							<motion.div
								className='text-center w-full max-w-4xl mx-auto flex flex-col justify-center space-y-6 sm:space-y-8 min-h-[500px] sm:min-h-[600px]'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6 }}
							>
								{/* Quote Container */}
								<motion.div
									className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-xl pt-8 sm:pt-12 px-6 sm:px-16 pb-12 sm:pb-16 min-h-[300px] sm:min-h-[400px] flex items-center justify-center'
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								>
									<motion.div className='w-full flex items-center justify-center'>
										<AnimatePresence mode='wait'>
											{isLoading ? (
												<motion.div
													className='text-lg sm:text-2xl text-gray-500 text-center'
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{ duration: 0.3 }}
												>
													Loading your dose of positivity... ✨
												</motion.div>
											) : (
												<motion.blockquote
													className='text-2xl sm:text-4xl lg:text-5xl text-gray-700 font-medium leading-relaxed text-center'
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: -20 }}
													transition={{ duration: 0.4, ease: "easeOut" }}
													key={currentQuote}
												>
													{currentQuote}
												</motion.blockquote>
											)}
										</AnimatePresence>
									</motion.div>
								</motion.div>

								{/* Button Container */}
								<motion.div
									className='text-center'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									<motion.button
										onClick={getNewQuote}
										disabled={isLoading}
										className='bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-2xl font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.98 }}
									>
										{isLoading
											? "Getting new quote..."
											: "Need another boost? ✨"}
									</motion.button>
								</motion.div>
							</motion.div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
