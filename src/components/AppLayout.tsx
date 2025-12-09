"use client";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppLayoutProps {
	children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	return (
		<div className='min-h-[min(100dvh,100svh)] flex flex-col custombackground'>
			<Navbar />
			<div className='flex-1 min-h-[min(100dvh,100svh)] overflow-hidden flex flex-col pt-20 px-2'>
				{children}
			</div>
			<Footer />
		</div>
	);
}
