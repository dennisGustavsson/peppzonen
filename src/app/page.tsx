"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AppLayout from "@/components/AppLayout";
import PageContainer from "@/components/PageContainer";
import { Heart, RefreshCw } from "lucide-react";

const upliftingQuotes = [
	"Ett 'nej' är bara data. Det säger ingenting om ditt värde eller ditt nästa 'ja'.",
	"Det kommer att vända. Det kanske inte känns så nu, men det kommer att vända.",
	"Dagens 'nej' är väldigt ofta morgondagens 'tur att det inte blev så'.",
	"Du samlar erfarenheter, inte misslyckanden.",
	"Ditt CV är ett dokument. Du är kompetensen.",
	"Du söker ett jobb. Du ber inte om en allmosa.",
	"Varje ansökan du skickar är ett bevis på din uthållighet. Det är en superkraft. 💪",
	"Glöm inte: Du intervjuar dem precis lika mycket som de intervjuar dig.",
	"Ta en paus. Stäng datorn. Det här är en mara, inte en sprint.",
	"Att söka jobb är ett heltidsjobb i sig. Ett du dessutom gör gratis. Var stolt över din uthållighet.",
	"Kom ihåg: Du har klarat 100% av dina svåraste dagar hittills. Du klarar den här också.",
	"Någon där ute letar *exakt* efter din unika mix av kompetens och personlighet. Ditt jobb är att fortsätta vara synlig.",
	"Det handlar inte om att hitta *ett* jobb. Det handlar om att hitta *rätt* jobb. Ett 'nej' från fel ställe är en vinst.",
	"Det enda 'ja' du behöver är det som faktiskt känns rätt i magen. Låt alla andra 'nej' passera.",
	"Ditt värde mäts inte i antal svar, utan i kvaliteten på det arbete du *kan* utföra.",
	"Viktig påminnelse: Du är smart, du är kapabel och du förtjänar en bra arbetsplats. ✨",
	"Var snäll mot dig själv. Du gör ditt bästa i en riktigt tuff situation. ❤️",
	"Du är mer än ditt CV. Du är mer än din jobbtitel.",
	"En paus är inte att ge upp. Det är att ladda om. 🔋",
	"Någonstans finns en arbetsgivare som kommer att ha *turen* att få dig. Glöm inte det.",
	"Din kompetens och dina erfarenheter är 100% verkliga. De försvinner inte av ett 'nej'.",
	"Det kommer att kännas värt det när du väl landar på rätt plats.",
	"Fira varje litet framsteg. Även att bara orka öppna datorn idag. Du är grym.",
];

export default function Home() {
	const [currentQuote, setCurrentQuote] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isButtonHovered, setIsButtonHovered] = useState(false);

	// Button styling based on hover state
	const buttonStyle = {
		background: isButtonHovered
			? `linear-gradient(45deg, var(--baltic-blue-700), var(--frosted-mint-300))`
			: `linear-gradient(45deg, var(--baltic-blue-500), var(--frosted-mint-500))`,
		backgroundSize: isButtonHovered ? "200% 200%" : "300% 300%",
		backgroundPosition: isButtonHovered ? "100% 0%" : "0% 0%",
		transition: "all 0.6s ease",
	};

	useEffect(() => {
		const randomQuote =
			upliftingQuotes[Math.floor(Math.random() * upliftingQuotes.length)];
		setCurrentQuote(randomQuote);
		setIsLoading(false);
	}, []);

	const getNewQuote = () => {
		setIsLoading(true);
		setTimeout(() => {
			const randomQuote =
				upliftingQuotes[Math.floor(Math.random() * upliftingQuotes.length)];
			setCurrentQuote(randomQuote);
			setIsLoading(false);
		}, 300);
	};

	return (
		<AppLayout>
			<PageContainer>
				{/* Quote Container */}

				<motion.div
					className='bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-[3rem] shadow-xl/5 pt-8 sm:mt-3 mt-8 sm:pt-12 px-8 sm:px-16 pb-12 sm:pb-16 flex-1 flex items-center justify-center'
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<motion.div className='w-full flex items-center justify-center'>
						<AnimatePresence mode='wait'>
							{isLoading ? (
								<motion.div
									className='text-lg sm:text-2xl text-gray-500 text-center'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									Loading your dose of positivity... ✨
								</motion.div>
							) : (
								<motion.blockquote
									className='text-2xl sm:text-4xl lg:text-5xl text-gray-700 font-medium leading-relaxed text-center'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
									key={currentQuote}
								>
									{currentQuote}
								</motion.blockquote>
							)}
						</AnimatePresence>
					</motion.div>
				</motion.div>

				{/* Button Container */}
				<motion.div
					className='text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<motion.button
						onClick={getNewQuote}
						disabled={isLoading}
						className='text-white my-8 px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-2xl font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg relative overflow-hidden'
						style={buttonStyle}
						onMouseEnter={() => {
							if (!isLoading) {
								setIsButtonHovered(true);
							}
						}}
						onMouseLeave={() => {
							if (!isLoading) {
								setIsButtonHovered(false);
							}
						}}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						whileTap={{ scale: 0.98 }}
					>
						{isLoading ? (
							"Laddar ny pepp..."
						) : (
							<>
								<RefreshCw className='w-5 h-5 inline mr-3' />
								Dags för mer motivation?
							</>
						)}
					</motion.button>
				</motion.div>
				<div
					className='text-xs mt-4 text-center'
					style={{ color: "var(--tangerine-dream-600)" }}
				>
					Ta några djupa andetag. Vila om du behöver. Sen kämpar du vidare.
				</div>
			</PageContainer>
		</AppLayout>
	);
}
