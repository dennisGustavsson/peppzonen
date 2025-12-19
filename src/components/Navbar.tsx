"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
	onOpenBoxBreathing?: () => void;
}

export default function Navbar({ onOpenBoxBreathing }: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleOpenBoxBreathing = () => {
		onOpenBoxBreathing?.();
	};

	return (
		<nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl'>
			<div className='bg-white/40 backdrop-blur-md rounded-full shadow-lg/5 px-6 sm:px-8 py-3 flex justify-between items-center border border-gray-100'>
				<Link
					href='/'
					className='text-2xl font-bold transition-colors'
					style={{ color: "var(--pitch-black-800)" }}
					onClick={closeMobileMenu}
				>
					<h1 className='flex items-baseline font-black'>Peppzonen</h1>
				</Link>

				{/* Desktop Menu */}
				<div className='hidden md:flex space-x-6 '>
					<button
						type='button'
						onClick={handleOpenBoxBreathing}
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Boxandning
					</button>
					<Link
						href='/support'
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Stöd
					</Link>
					<Link
						href='/actions'
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Aktiviteter
					</Link>
					<Link
						href='/personality-test'
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Opersonlighets-test
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMobileMenu}
					className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors '
					style={{ color: "var(--wine-plum-600)" }}
				>
					<AnimatePresence mode='wait' initial={false}>
						{isMobileMenuOpen ? (
							<motion.div
								key='close'
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								transition={{ duration: 0.15 }}
							>
								<X className='h-6 w-6' />
							</motion.div>
						) : (
							<motion.div
								key='open'
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								transition={{ duration: 0.15 }}
							>
								<Menu className='h-6 w-6' />
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence initial={false}>
				{isMobileMenuOpen && (
					<motion.div
						key='mobile-menu'
						className='md:hidden mt-2 rounded-3xl shadow-lg border border-gray-200 bg-white/40 backdrop-blur-md'
						initial={{ opacity: 0, y: -6, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -6, scale: 0.97 }}
						transition={{ duration: 0.35 }}
					>
						<div className='px-4 py-4 space-y-2'>
							<button
								type='button'
								onClick={() => {
									closeMobileMenu();
									handleOpenBoxBreathing();
								}}
								className='w-full text-left block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
							>
								Box breathing
							</button>
							<Link
								href='/support'
								className='block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
								onClick={closeMobileMenu}
							>
								Stöd
							</Link>
							<Link
								href='/actions'
								className='block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
								onClick={closeMobileMenu}
							>
								Aktiviteter
							</Link>
							<Link
								href='/personality-test'
								className='block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
								onClick={closeMobileMenu}
							>
								Opersonlighets-test
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
