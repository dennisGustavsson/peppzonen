"use client";
import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl'>
			<div className='bg-white/40 backdrop-blur-md rounded-3xl shadow-lg/5 px-6 sm:px-8 py-3 flex justify-between items-center border border-gray-200'>
				<Link
					href='/'
					className='text-2xl font-bold transition-colors'
					style={{ color: "var(--pitch-black-800)" }}
					onClick={closeMobileMenu}
				>
					<h1 className='flex items-baseline'>
						{" "}
						<Heart
							className='inline animate-pulse mr-1'
							style={{ color: "var(--frosted-mint-400)" }}
							fill='currentColor'
						/>
						Peppzonen{" "}
					</h1>
				</Link>

				{/* Desktop Menu */}
				<div className='hidden md:flex space-x-6 '>
					<Link
						href='/support'
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Support
					</Link>
					<Link
						href='/actions'
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Actions
					</Link>
					<Link
						href='/personality-test'
						className='text-wine-600 hover:text-wine-700 transition-colors font-semibold'
					>
						Fun Test
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMobileMenu}
					className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors '
					style={{ color: "var(--wine-plum-600)" }}
				>
					{isMobileMenuOpen ? (
						<X className='h-6 w-6' />
					) : (
						<Menu className='h-6 w-6' />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden mt-2 rounded-3xl shadow-lg border border-gray-200 bg-white/40 backdrop-blur-md'>
					<div className='px-4 py-4 space-y-2'>
						<Link
							href='/support'
							className='block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
							onClick={closeMobileMenu}
						>
							Support
						</Link>
						<Link
							href='/actions'
							className='block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
							onClick={closeMobileMenu}
						>
							Actions
						</Link>
						<Link
							href='/personality-test'
							className='block py-3 px-4 text-wine-600 hover:text-wine-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold'
							onClick={closeMobileMenu}
						>
							Fun Test
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
