"use client";

import { useEffect, useState, useCallback, ReactNode } from "react";
import { motion } from "motion/react";

interface ModalComponentProps {
	shouldShow: boolean;
	onRequestClose: () => void;
	children: ReactNode;
}

const ModalComponent = ({
	shouldShow,
	onRequestClose,
	children,
}: ModalComponentProps) => {
	const [isClosing, setIsClosing] = useState(false);
	const [hasRequestedClose, setHasRequestedClose] = useState(false);

	const handleClose = useCallback(() => {
		if (isClosing) return; // Prevent multiple calls
		setIsClosing(true);
		setHasRequestedClose(true);
	}, [isClosing]);

	useEffect(() => {
		if (!shouldShow) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleClose();
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (
				(event.target as HTMLElement).classList.contains("modal-background")
			) {
				handleClose();
			}
		};

		document.addEventListener("keydown", handleEscape);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [shouldShow, handleClose]);

	if (!shouldShow && !isClosing) {
		return null;
	}

	return (
		<motion.div
			className='modal modal-background p-1 md:p-40'
			onClick={handleClose}
			role='dialog'
			aria-modal='true'
			initial={{ opacity: 0 }}
			animate={{ opacity: isClosing ? 0 : 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			<motion.div
				className='flex justify-center flex-col'
				onClick={(e) => {
					e.stopPropagation();
				}}
				initial={{ y: 24, opacity: 0 }}
				animate={{ y: isClosing ? 24 : 0, opacity: isClosing ? 0 : 1 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				onAnimationComplete={() => {
					if (!hasRequestedClose) return;
					setHasRequestedClose(false);
					setIsClosing(false);
					onRequestClose();
				}}
			>
				{children}
				<button
					className='modal-close-button text-black font-bold text-3xl mt-7 justify-self-center'
					onClick={handleClose}
					aria-label='Close modal'
				>
					&times;
				</button>
			</motion.div>
		</motion.div>
	);
};

export default ModalComponent;
