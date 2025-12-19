"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type PhaseKey = "inhale" | "hold1" | "exhale" | "hold2";

type Phase = {
	key: PhaseKey;
	label: string;
	helper: string;
};

export interface BoxBreathingProps {
	secondsPerSide?: number;
}

export default function BoxBreathing({
	secondsPerSide = 4,
}: BoxBreathingProps) {
	const [isRunning, setIsRunning] = useState(false);
	const [isStartButtonHovered, setIsStartButtonHovered] = useState(false);
	const [elapsedMs, setElapsedMs] = useState(0);
	const elapsedMsRef = useRef(0);
	const rafIdRef = useRef<number | null>(null);
	const startTimestampRef = useRef<number | null>(null);

	const startButtonStyle = {
		background: isStartButtonHovered
			? "linear-gradient(45deg, var(--baltic-blue-700), var(--frosted-mint-300))"
			: "linear-gradient(45deg, var(--baltic-blue-500), var(--frosted-mint-500))",
		backgroundSize: isStartButtonHovered ? "200% 200%" : "300% 300%",
		backgroundPosition: isStartButtonHovered ? "100% 0%" : "0% 0%",
		transition: "all 0.6s ease",
	} as const;

	const phases: Phase[] = useMemo(
		() => [
			{ key: "inhale", label: "Andas in", helper: "Fyll lungorna lugnt" },
			{ key: "hold1", label: "Håll", helper: "Behåll lugnet" },
			{ key: "exhale", label: "Andas ut", helper: "Släpp spänningen" },
			{ key: "hold2", label: "Håll", helper: "Vila en stund" },
		],
		[]
	);

	const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
	const safeSecondsPerSide = secondsPerSide > 0 ? secondsPerSide : 1;
	const secondsPerCycle = safeSecondsPerSide * phases.length;
	const elapsedSeconds = elapsedMs / 1000;
	const cycleElapsedSeconds = elapsedSeconds % secondsPerCycle;
	const currentPhaseIndex = Math.min(
		phases.length - 1,
		Math.floor(cycleElapsedSeconds / safeSecondsPerSide)
	);
	const phaseElapsed =
		cycleElapsedSeconds - currentPhaseIndex * safeSecondsPerSide;
	const phaseProgress = clamp01(phaseElapsed / safeSecondsPerSide);
	const phaseRemaining = Math.max(
		0,
		Math.ceil(safeSecondsPerSide - phaseElapsed)
	);
	const cycleNumber = Math.floor(elapsedSeconds / secondsPerCycle) + 1;
	const currentPhase = phases[currentPhaseIndex];
	const shouldRenderAnimatedBorder = isRunning || elapsedMs > 0;

	const topProgress = currentPhaseIndex > 0 ? 1 : phaseProgress;
	const rightProgress =
		currentPhaseIndex > 1 ? 1 : currentPhaseIndex === 1 ? phaseProgress : 0;
	const bottomProgress =
		currentPhaseIndex > 2 ? 1 : currentPhaseIndex === 2 ? phaseProgress : 0;
	const leftProgress = currentPhaseIndex === 3 ? phaseProgress : 0;

	const setElapsedMsState = (value: number) => {
		elapsedMsRef.current = value;
		setElapsedMs(value);
	};

	useEffect(() => {
		if (!isRunning) return;

		startTimestampRef.current = performance.now() - elapsedMsRef.current;

		const tick = () => {
			if (startTimestampRef.current == null) return;
			setElapsedMsState(performance.now() - startTimestampRef.current);
			rafIdRef.current = window.requestAnimationFrame(tick);
		};

		rafIdRef.current = window.requestAnimationFrame(tick);

		return () => {
			if (rafIdRef.current != null) {
				window.cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}
		};
	}, [isRunning]);

	const handleToggle = () => {
		setIsRunning((v) => !v);
	};

	const handleReset = () => {
		setIsRunning(false);
		setElapsedMsState(0);
	};

	return (
		<div className='w-full max-w-xl mx-auto'>
			<div className='rounded-3xl bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg/5 p-6 md:p-8'>
				<div className='flex items-start justify-between gap-4'>
					<div>
						<h2
							className='text-2xl md:text-3xl font-black'
							style={{ color: "var(--pitch-black-800)" }}
						>
							Boxandning
						</h2>
						<p
							className='mt-1 text-sm md:text-base'
							style={{ color: "var(--pitch-black-700)" }}
						>
							4-4-4-4 Andas in, håll, andas ut, håll.
						</p>
					</div>
					<div
						className='text-sm font-semibold'
						style={{ color: "var(--wine-plum-700)" }}
					>
						Varv: {cycleNumber}
					</div>
				</div>

				<div className='mt-6 rounded-2xl bg-white/60 border border-gray-200 p-6 md:p-8 text-center'>
					<div className='sr-only' aria-live='polite'>
						{currentPhase.label}, {phaseRemaining} sekunder kvar.
					</div>

					<div className='relative w-56 h-56 md:w-64 md:h-64 mx-auto rounded-3xl bg-white/40 overflow-hidden'>
						{/* Border draw (only after start) */}
						{shouldRenderAnimatedBorder && (
							<>
								{/* Top: left → right */}
								<div
									className='absolute top-0 left-0 h-3'
									style={{ width: `${topProgress * 100}%` }}
								>
									<div className='absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 blur-md opacity-70' />
									{currentPhaseIndex === 0 ? (
										<motion.div
											className='absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500'
											style={{ backgroundSize: "200% 200%" }}
											animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
											transition={{
												duration: 1.0,
												repeat: Infinity,
												ease: "linear",
											}}
										/>
									) : (
										<div className='absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500' />
									)}
								</div>

								{/* Right: top → bottom */}
								<div
									className='absolute top-0 right-0 w-3'
									style={{ height: `${rightProgress * 100}%` }}
								>
									<div className='absolute inset-0 bg-linear-to-b from-pink-500 to-purple-500 blur-md opacity-70' />
									{currentPhaseIndex === 1 ? (
										<motion.div
											className='absolute inset-0 bg-linear-to-b from-pink-500 to-purple-500'
											style={{ backgroundSize: "200% 200%" }}
											animate={{ backgroundPosition: ["50% 0%", "50% 100%"] }}
											transition={{
												duration: 1.0,
												repeat: Infinity,
												ease: "linear",
											}}
										/>
									) : (
										<div className='absolute inset-0 bg-linear-to-b from-pink-500 to-purple-500' />
									)}
								</div>

								{/* Bottom: right → left */}
								<div
									className='absolute bottom-0 right-0 h-3'
									style={{ width: `${bottomProgress * 100}%` }}
								>
									<div className='absolute inset-0 bg-linear-to-l from-pink-500 to-purple-500 blur-md opacity-70' />
									{currentPhaseIndex === 2 ? (
										<motion.div
											className='absolute inset-0 bg-linear-to-l from-pink-500 to-purple-500'
											style={{ backgroundSize: "200% 200%" }}
											animate={{ backgroundPosition: ["100% 50%", "0% 50%"] }}
											transition={{
												duration: 1.0,
												repeat: Infinity,
												ease: "linear",
											}}
										/>
									) : (
										<div className='absolute inset-0 bg-linear-to-l from-pink-500 to-purple-500' />
									)}
								</div>

								{/* Left: bottom → top */}
								<div
									className='absolute bottom-0 left-0 w-3'
									style={{ height: `${leftProgress * 100}%` }}
								>
									<div className='absolute inset-0 bg-linear-to-t from-pink-500 to-purple-500 blur-md opacity-70' />
									{currentPhaseIndex === 3 ? (
										<motion.div
											className='absolute inset-0 bg-linear-to-t from-pink-500 to-purple-500'
											style={{ backgroundSize: "200% 200%" }}
											animate={{ backgroundPosition: ["50% 100%", "50% 0%"] }}
											transition={{
												duration: 1.0,
												repeat: Infinity,
												ease: "linear",
											}}
										/>
									) : (
										<div className='absolute inset-0 bg-linear-to-t from-pink-500 to-purple-500' />
									)}
								</div>
							</>
						)}

						{/* Center content */}
						<div className='absolute inset-0 flex items-center justify-center p-6'>
							<div>
								<AnimatePresence mode='wait' initial={false}>
									<motion.div
										key={currentPhase.key}
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -6 }}
										transition={{ duration: 0.2 }}
									>
										<div
											className='text-3xl md:text-4xl font-black'
											style={{ color: "var(--pitch-black-800)" }}
										>
											{currentPhase.label}
										</div>
									</motion.div>
								</AnimatePresence>
								<div
									className='mt-2 text-6xl md:text-7xl font-black tabular-nums'
									style={{ color: "var(--wine-plum-700)" }}
								>
									{phaseRemaining}
								</div>
								<div
									className='mt-1 text-sm'
									style={{ color: "var(--pitch-black-600)" }}
								>
									sekunder
								</div>
							</div>
						</div>
					</div>

					<div
						className='mt-5 text-base md:text-lg'
						style={{ color: "var(--pitch-black-700)" }}
					>
						{currentPhase.helper}
					</div>
				</div>

				<div className='mt-6 flex flex-col sm:flex-row gap-3'>
					<motion.button
						type='button'
						onClick={handleToggle}
						className='flex-1 rounded-xl px-4 py-3 font-bold text-white shadow-lg relative overflow-hidden'
						style={startButtonStyle}
						onMouseEnter={() => {
							setIsStartButtonHovered(true);
						}}
						onMouseLeave={() => {
							setIsStartButtonHovered(false);
						}}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						whileTap={{ scale: 0.98 }}
					>
						{isRunning ? "Pausa" : "Starta"}
					</motion.button>
					<button
						type='button'
						onClick={handleReset}
						className='flex-1 rounded-xl px-4 py-3 font-bold transition-colors bg-white/70 hover:bg-white border border-gray-200'
						style={{ color: "var(--pitch-black-800)" }}
					>
						Nollställ
					</button>
				</div>

				<p
					className='mt-4 text-xs leading-relaxed'
					style={{ color: "var(--pitch-black-600)" }}
				>
					Tips: sitt bekvämt, slappna av i axlarna och låt andetaget vara mjukt.
				</p>
			</div>
		</div>
	);
}
