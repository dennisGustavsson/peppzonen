"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface AppLayoutProps {
	children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className='min-h-screen bg-linear-to-br from-cyan-200 via-purple-200 to-rose-200 p-8'>
			<div className='max-w-none mx-8 bg-white rounded-3xl overflow-hidden'>
				<nav className='bg-white border-b border-gray-100'>
					<div className='px-8 py-4 flex justify-between items-center'>
						<Link
							href='/'
							className='text-2xl font-bold text-purple-600 hover:text-purple-800 transition-colors'
						>
							<h1>Peppzonen</h1>
						</Link>
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
					{children}
				</div>
			</div>
		</div>
	);
}
