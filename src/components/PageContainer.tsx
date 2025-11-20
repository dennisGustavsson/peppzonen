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
		<motion.div
			className={`p-1 md:p-12 w-full max-w-4xl mx-auto flex-1 flex flex-col  ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			{children}
		</motion.div>
	);
}
