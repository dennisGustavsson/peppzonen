"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AppLayout from "@/components/AppLayout";
import PageContainer from "@/components/PageContainer";

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
					className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-xl pt-8 sm:pt-12 px-6 sm:px-16 pb-12 sm:pb-16 min-h-[300px] sm:min-h-[400px] flex items-center justify-center'
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
						className='bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-2xl font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 cursor-pointer transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						{isLoading ? "Laddar ny pepp..." : "Dags för mer motivation? ✨"}
					</motion.button>
				</motion.div>
			</PageContainer>
		</AppLayout>
	);
}
