"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface PageContainerProps {
	children: ReactNode;
	className?: string;
}

export default function PageContainer({
	children,
	className = "",
}: PageContainerProps) {
	return (
		<main className='p-1 md:p-12'>
			<motion.div
				className={`text-center w-full h-auto max-w-4xl mx-auto flex flex-col justify-center space-y-6 sm:space-y-8 min-h-[500px] sm:min-h-[600px] ${className}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				{children}
			</motion.div>
		</main>
	);
}
