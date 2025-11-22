import { useEffect, useState, useCallback, ReactNode } from "react";

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

	const handleClose = useCallback(() => {
		if (isClosing) return; // Prevent multiple calls
		setIsClosing(true);
		setTimeout(() => {
			setIsClosing(false);
			onRequestClose();
		}, 200); // Shorter timeout
	}, [onRequestClose, isClosing]);

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
		<div
			className={`modal p-1 md:p-40 ${
				isClosing ? "modal-bg-out" : "modal-bg-in"
			}`}
			onClick={handleClose}
			role='dialog'
			aria-modal='true'
		>
			<div
				className={` flex justify-center flex-col ${
					isClosing ? "modal-close" : "modal-appear"
				}`}
				onClick={(e) => {
					e.stopPropagation();
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
			</div>
		</div>
	);
};

export default ModalComponent;
