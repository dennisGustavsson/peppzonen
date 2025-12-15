"use client";
import { use, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import AppLayout from "@/components/AppLayout";
import ModalComponent from "@/components/ModalComponent";
import PageContainer from "@/components/PageContainer";
import {
	Sparkles,
	RefreshCw,
	Activity,
	Palette,
	Users,
	Brain,
	BookOpen,
	Heart,
	Check,
	Circle,
	Zap,
	X,
} from "lucide-react";

const moodBoosters = [
	{
		category: "Fysisk aktivitet (Lågtröskel)",
		icon: Activity,
		actions: [
			// Ersätter 50 knäböj/cykeltur med enklare saker
			"Ställ dig upp och skaka loss hela kroppen i 1 minut",
			"Gå ut genom dörren och ta 5 djupa andetag frisk luft (du behöver inte gå en promenad)",
			"Sätt på en riktigt bra låt och fuldansa i köket",
			"Sträck armarna mot taket och håll i 10 sekunder",
			"Ta en kort promenad runt kvarteret (utan hörlurar)",
			"Gör 5 enkla axelrullningar bakåt och framåt",
		],
	},
	{
		category: "Kreativt & Kravlöst",
		icon: Palette,
		actions: [
			// Tar bort "laga nytt/baka" som kan vara dyrt/jobbigt
			"Klottra fula gubbar på ett papper i 2 minuter",
			"Färgkoordinera en bokhylla eller klädlåda (bara en liten!)",
			"Ta ett foto på något litet du tycker är fint i ditt hem",
			"Sjung med högt i en låt i duschen",
			"Gör en 'brain dump' – skriv ner allt som snurrar i huvudet på ett papper, sen släng det",
			"Bygg något litet med LEGO eller vad du har hemma",
		],
	},
	{
		category: "Social kontakt (Utan press)",
		icon: Users,
		actions: [
			// Tar bort videochatt som kräver mycket energi
			"Skicka en rolig meme eller GIF till en vän (ingen text behövs)",
			"Skicka ett SMS till någon och skriv bara 'Tänker på dig'",
			"Klappa ett husdjur (ditt eget eller fråga om du får klappa någons hund ute)",
			"Le och säg hej till kassörskan i mataffären",
			"Skriv en positiv kommentar på någons inlägg online",
		],
	},
	{
		category: "Mindfulness & Närvaro",
		icon: Brain,
		actions: [
			"Titta ut genom fönstret och hitta 5 saker som är gröna",
			"Gör en kopp te eller kaffe och drick den långsamt utan mobil",
			"Lägg dig på golvet (eller sängen) och bara blunda i 5 minuter",
			"Fokusera på ljuden runt omkring dig just nu i 2 minuter",
			"Ta en dusch och fokusera bara på hur vattnet känns mot huden",
			"Nämn 3 saker för dig själv som du faktiskt gjorde bra idag (även små saker räknas)",
		],
	},
	{
		// Omdöpt för att inte kännas som "karriärsutveckling"
		category: "Mental Distraktion & Inspiration",
		icon: BookOpen,
		actions: [
			// Tar bort "onlinekurs/lära språk" som känns som krav
			"Titta på en kort, rolig video (kattvideos räknas!)",
			"Läs en artikel om ett ämne som inte har med jobb att göra (typ rymden eller dinosaurier)",
			"Lyssna på ett avsnitt av en podd som bara är underhållande",
			"Lös ett korsord eller sudoku",
			"Gå in på Wikipedia och klicka på 'Slumpartikel'",
			"Titta på trailers för kommande filmer",
		],
	},
	{
		category: "Snäll Egenvård",
		icon: Heart,
		actions: [
			// Tar bort "organisera" som kan kännas övermäktigt
			"Drick ett stort glas kallt vatten långsamt",
			"Ta på dig rena, sköna strumpor",
			"Tvätta ansiktet med kallt vatten",
			"Tillåt dig själv att vila i 20 minuter utan dåligt samvete",
			"Byt lakan i sängen (känslan av rena lakan är oslagbar)",
			"Säg högt till dig själv: 'Jag gör så gott jag kan, och det räcker just nu'",
		],
	},
];

const quickWins = [
	"Bädda din säng",
	"Drick ett glas vatten",
	"Le mot dig själv i spegeln",
	"Ta tre djupa andetag",
	"Städa ett litet område",
	"Sms:a någon du uppskattar",
	"Gå ut för frisk luft",
	"Lyssna på en upplyftande låt",
	"Skriv ner en sak du är tacksam för",
	"Stretcha i en minut",
];

export default function Actions() {
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
	const [completedActions, setCompletedActions] = useState(new Set<string>());
	const [isModalOpen, setIsModalOpen] = useState(false);
	// const [currentQuickWin, setCurrentQuickWin] = useState(getRandomQuickWin());
	const [showProgressToast, setShowProgressToast] = useState(false);

	const toggleAction = (action: string) => {
		const newCompleted = new Set(completedActions);
		if (newCompleted.has(action)) {
			newCompleted.delete(action);
		} else {
			newCompleted.add(action);
		}
		setCompletedActions(newCompleted);
	};

	const handleOpenCategory = (index: number) => {
		setSelectedCategory(index);
		setIsModalOpen(true);
		console.log("opening modal");
	};

	// const getRandomQuickWin = () => {
	// 	const randomWin = quickWins[Math.floor(Math.random() * quickWins.length)];
	// 	return randomWin;
	// };
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const dismissTimerRef = useRef<number | null>(null);

	useEffect(() => {
		if (dismissTimerRef.current) {
			clearTimeout(dismissTimerRef.current);
			dismissTimerRef.current = null;
		}
		if (completedActions.size > 0) {
			setShowProgressToast(true);
			// Auto-dismiss after 4s
			dismissTimerRef.current = window.setTimeout(() => {
				setShowProgressToast(false);
				dismissTimerRef.current = null;
			}, 3000);
		} else {
			// Hide immediately when no actions
			setShowProgressToast(false);
		}

		return () => {
			if (dismissTimerRef.current) {
				clearTimeout(dismissTimerRef.current);
			}
		};
	}, [completedActions.size]);

	return (
		<AppLayout>
			<PageContainer>
				<div className='text-center mb-12 mt-10 md:mt-5 '>
					<h1
						className='text-4xl font-bold mb-4'
						style={{ color: "var(--wine-plum-800)" }}
					>
						Behöver du en snabb aktivitet för att skifta fokus?
						<Heart
							className='w-10 h-10 inline mb-4 animate-pulse'
							style={{ color: "var(--frosted-mint-600)" }}
							fill='currentColor'
						/>
					</h1>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto'>
						Jobbsökandet är en av livets tuffaste stressfaktorer. Ibland behöver
						vi bryta det negativa tankemönstret. Här är några förslag för att
						skifta fokus en stund.
					</p>
				</div>

				{/* Categories Section */}
				<motion.div
					className='mt-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<h3
						className='text-2xl sm:text-3xl font-bold text-center mb-6'
						style={{ color: "var(--pitch-black-800)" }}
					>
						Välj din kategori
					</h3>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
						{moodBoosters.map((category, index) => (
							<motion.button
								key={index}
								onClick={
									() => handleOpenCategory(index)
									// setSelectedCategory(selectedCategory === index ? null : index)
								}
								className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center transition-all ${
									selectedCategory === index
										? "ring-4 ring-frosted-mint-500"
										: ""
								}`}
								whileHover={{ scale: 1.02, y: -2 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className='flex justify-center mb-3'>
									<category.icon
										className='w-12 h-12'
										style={{ color: "var(--pitch-black-700)" }}
									/>
								</div>
								<h4
									className='text-lg font-bold'
									style={{ color: "var(--pitch-black-800)" }}
								>
									{category.category}
								</h4>
								<p
									className='text-sm mt-2'
									style={{ color: "var(--pitch-black-600)" }}
								>
									{category.actions.length} aktiviteter
								</p>
							</motion.button>
						))}
					</div>
				</motion.div>
				{/* Selected Category Actions */}
				<ModalComponent
					shouldShow={isModalOpen}
					onRequestClose={handleCloseModal}
				>
					<AnimatePresence>
						{selectedCategory !== null && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.2 }}
								className='mt-8 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-[3rem] shadow-lg p-6 sm:p-8 max-w-6xl mx-auto overflow-hidden'
							>
								<div className='flex items-center justify-center gap-3 mb-6'>
									{(() => {
										const Icon = moodBoosters[selectedCategory].icon;
										return (
											<Icon
												className='w-8 h-8'
												style={{ color: "var(--pitch-black-700)" }}
											/>
										);
									})()}
									<h4
										className='text-2xl font-bold'
										style={{ color: "var(--pitch-black-800)" }}
									>
										{moodBoosters[selectedCategory].category}
									</h4>
								</div>
								<div className='grid sm:grid-cols-2 gap-3'>
									{moodBoosters[selectedCategory].actions.map(
										(action, actionIndex) => (
											<motion.div
												key={actionIndex}
												className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
													completedActions.has(action)
														? "bg-frosted-mint-50"
														: ""
												}`}
												style={{
													borderColor: completedActions.has(action)
														? "var(--frosted-mint-500)"
														: "var(--pitch-black-200)",
													color: completedActions.has(action)
														? "var(--frosted-mint-800)"
														: "var(--pitch-black-800)",
												}}
												onClick={() => toggleAction(action)}
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<div className='flex items-center justify-between'>
													<span className='font-medium'>{action}</span>
													{completedActions.has(action) ? (
														<Check
															className='w-5 h-5'
															style={{ color: "var(--frosted-mint-600)" }}
														/>
													) : (
														<Circle
															className='w-5 h-5'
															style={{ color: "var(--pitch-black-400)" }}
														/>
													)}
												</div>
											</motion.div>
										)
									)}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</ModalComponent>
				{/* Progress Section */}
				<AnimatePresence>
					{showProgressToast && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className='mt-8 bg-frosted-mint-50 border-b-3 bg-white/55 backdrop-blur-lg shadow-2xl border p-6 rounded-4xl fixed top-4 left-1/2 -translate-x-1/2 z-50'
							style={{ borderColor: "var(--frosted-mint-600)" }}
						>
							<div className='flex items-start'>
								<Sparkles
									className='w-8 h-8 mr-4'
									style={{ color: "var(--frosted-mint-600)" }}
								/>
								<div>
									<h3
										className='text-lg font-bold'
										style={{ color: "var(--frosted-mint-800)" }}
									>
										Fantastiska framsteg!
									</h3>
									<p
										className='mt-2'
										style={{ color: "var(--frosted-mint-700)" }}
									>
										Du har genomfört {completedActions.size} peppande aktivitet
										{completedActions.size > 1 ? "er" : ""}! Fortsätt så - varje
										litet steg räknas!
									</p>
								</div>
								<button
									aria-label='Stäng meddelande'
									onClick={() => {
										setShowProgressToast(false);
										if (dismissTimerRef.current) {
											clearTimeout(dismissTimerRef.current);
											dismissTimerRef.current = null;
										}
									}}
									className='p-1 rounded hover:bg-frosted-mint-100 transition'
								>
									<X
										className='w-4 h-4'
										style={{ color: "var(--frosted-mint-600)" }}
									/>
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</PageContainer>
		</AppLayout>
	);
}
