"use client";
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface AppLayoutProps {
	children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div
			className='min-h-screen flex flex-col'
			// style={{ backgroundColor: "var(--tangerine-dream-100)" }}
		>
			<Navbar />
			<div
				className='flex-1 overflow-hidden flex flex-col pt-20  custombackground'
				// style={{ backgroundColor: "var(--tangerine-dream-100)" }}
			>
				{children}
			</div>
		</div>
	);
}
