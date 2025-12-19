"use client";
import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ModalComponent from "./ModalComponent";
import BoxBreathing from "./BoxBreathing";

interface AppLayoutProps {
	children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
	const [isBoxBreathingOpen, setIsBoxBreathingOpen] = useState(false);

	const handleOpenBoxBreathing = () => {
		setIsBoxBreathingOpen(true);
	};

	const handleCloseBoxBreathing = () => {
		setIsBoxBreathingOpen(false);
	};

	return (
		<div className='min-h-[min(100dvh,100svh)] flex flex-col custombackground'>
			<Navbar onOpenBoxBreathing={handleOpenBoxBreathing} />
			<div className='flex-1 min-h-[min(100dvh,100svh)] overflow-hidden flex flex-col pt-20 px-2'>
				{children}
			</div>
			<Footer />
			<ModalComponent
				shouldShow={isBoxBreathingOpen}
				onRequestClose={handleCloseBoxBreathing}
			>
				<BoxBreathing />
			</ModalComponent>
		</div>
	);
}
