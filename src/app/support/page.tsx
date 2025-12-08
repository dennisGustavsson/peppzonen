"use client";
// Endast AppLayout och PageContainer behövs
import AppLayout from "@/components/AppLayout";
import PageContainer from "@/components/PageContainer";
import {
	Heart,
	AlertTriangle,
	MessageCircle,
	Users,
	Phone,
	Lightbulb,
	Brain,
	Activity,
} from "lucide-react";

// Förenklad lista för lokala/allmänna svenska resurser
const supportPoints = [
	{
		title: "Vän & Familj",
		Icon: Users,
		tips: "Ventilera frustrationen högt. Det är inte 'klagomål', det är mental hygien.",
	},
	{
		title: "Vårdcentral / Psykolog",
		Icon: MessageCircle,
		tips: "Boka tid. Jobbsökande är en legitím stressfaktor som kan behöva professionell hjälp.",
	},
	{
		title: "Jourhavande Medmänniska",
		Icon: Phone,
		tips: "Anonyma samtal kan lätta på trycket. Flera organisationer erbjuder chatt/telefonstöd.",
	},
];

export default function Support() {
	// All useState, next/prevAffirmation logic removed.

	return (
		<AppLayout>
			<PageContainer>
				<div className='text-center mt-10 md:mt-5 mb-12'>
					<h1
						className='text-4xl font-bold mb-4'
						style={{ color: "var(--wine-plum-700)" }}
					>
						Du är inte ensam i kampen{" "}
						<Heart
							className='w-10 h-10 inline mb-4 animate-pulse'
							style={{ color: "var(--frosted-mint-600)" }}
							fill='currentColor'
						/>
					</h1>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto'>
						Jobbsökandet är en av livets tuffaste stressfaktorer. Kom ihåg att
						mental styrka kräver underhåll och att det är okej att be om hjälp.
					</p>
				</div>

				{/* Prata om det - Ventilation Section */}
				<div className='mb-12'>
					<h2
						className='text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3'
						style={{ color: "var(--wine-plum-700)" }}
					>
						<MessageCircle
							className='w-8 h-8'
							style={{ color: "var(--wine-plum-600)" }}
						/>
						Prata om det: Ventilera & Lätta på trycket
					</h2>
					<div className='grid md:grid-cols-3 gap-6'>
						{supportPoints.map((point, index) => (
							<div
								key={index}
								className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow'
							>
								<div className='flex items-center mb-3'>
									<point.Icon
										className='w-7 h-7 mr-3'
										style={{ color: "var(--wine-plum-600)" }}
									/>
									<h3
										className='text-xl font-bold'
										style={{ color: "var(--wine-plum-600)" }}
									>
										{point.title}
									</h3>
								</div>
								<p className='text-gray-600'>{point.tips}</p>
							</div>
						))}
					</div>
				</div>

				{/* Bryt Spiralen - Action Section */}
				<div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8'>
					<h2
						className='text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3'
						style={{ color: "var(--wine-plum-600)" }}
					>
						<Lightbulb
							className='w-8 h-8'
							style={{ color: "var(--wine-plum-500)" }}
						/>
						Bryt den negativa spiralen (Action Plan)
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<h3
								className='text-lg font-semibold mb-3 flex items-center gap-2'
								style={{ color: "var(--wine-plum-500)" }}
							>
								<Brain
									className='w-5 h-5'
									style={{ color: "var(--wine-plum-500)" }}
								/>
								Skapa Struktur & Gränser
							</h3>
							<ul className='text-gray-700 space-y-3'>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Tidssätt sökandet:</span>{" "}
										Bestäm 3 timmar per dag. Utanför den tiden är du ledig.
									</div>
								</li>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Skilj på plats:</span> Sök
										inte jobb i soffan. Hitta en dedikerad "jobbstol".
									</div>
								</li>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Fira en liten seger:</span>{" "}
										Varje skickad ansökan är en vinst. Belöna dig själv.
									</div>
								</li>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Begränsa scrollandet:</span>{" "}
										Öppna inte jobbportaler efter kl. 17.00.
									</div>
								</li>
							</ul>
						</div>
						<div>
							<h3
								className='text-lg font-semibold mb-3 flex items-center gap-2'
								style={{ color: "var(--wine-plum-500)" }}
							>
								<Activity
									className='w-5 h-5'
									style={{ color: "var(--wine-plum-500)" }}
								/>
								Fysisk & Mental Återhämtning
							</h3>
							<ul className='text-gray-700 space-y-3'>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Rörelse:</span> Minst 20
										minuter. Ta en promenad utan mobil.
									</div>
								</li>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Aktiv distraktion:</span>{" "}
										Gör något som kräver 100% fokus (bakning, bygge, musik).
									</div>
								</li>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Natur:</span> Gå ut i
										naturen varje dag. Lämna CV-et hemma.
									</div>
								</li>
								<li className='flex items-start gap-2'>
									<span className='font-bold mt-0.5'>•</span>
									<div>
										<span className='font-semibold'>Sömn:</span> Prioritera
										sömn. Negativitet frodas i trötthet.
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Akut Hjälp / Immediate Crisis Section (Lokaliserad till Sverige) */}
				<div className='bg-red-50/80 backdrop-blur-sm border-l-4 border-red-400 p-6 rounded-2xl sm:rounded-[3rem] my-12'>
					<div className='flex'>
						<div className='shrink-0'>
							<AlertTriangle
								className='w-8 h-8'
								style={{ color: "var(--wine-plum-600)" }}
							/>
						</div>
						<div className='ml-3'>
							<h3 className='text-lg font-medium text-red-800'>
								Behöver du akut hjälp?
							</h3>
							<ul className='mt-2 text-red-700 font-semibold space-y-1'>
								<li>• Ring 112 vid livsfara eller akut psykisk kris.</li>
								<li>
									• Ring 1177 för rådgivning om vård och närmsta psykiatriska
									akutmottagning.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</PageContainer>
		</AppLayout>
	);
}

// "use client";
// import { useState } from "react";
// import AppLayout from "@/components/AppLayout";
// import PageContainer from "@/components/PageContainer";

// const affirmations = [
// 	"I am resilient and bounce back from setbacks stronger than before.",
// 	"My worth is not determined by one job application or interview.",
// 	"Every 'no' brings me closer to the perfect 'yes'.",
// 	"I have unique skills and talents that the right employer will value.",
// 	"This is just a detour, not a dead end.",
// 	"I trust the timing of my life and career journey.",
// 	"I am exactly where I need to be in this moment.",
// 	"My dream job is out there looking for me too.",
// 	"I choose to see rejection as redirection to something better.",
// 	"I am worthy of success and happiness.",
// ];

// const resources = [
// 	{
// 		title: "National Suicide Prevention Lifeline",
// 		description: "24/7 support for those in emotional distress",
// 		link: "988",
// 		type: "crisis",
// 	},
// 	{
// 		title: "Crisis Text Line",
// 		description: "Text HOME to 741741 for crisis support",
// 		link: "741741",
// 		type: "crisis",
// 	},
// 	{
// 		title: "BetterHelp",
// 		description: "Online counseling and therapy services",
// 		link: "https://www.betterhelp.com",
// 		type: "therapy",
// 	},
// 	{
// 		title: "Headspace",
// 		description: "Meditation and mindfulness app",
// 		link: "https://www.headspace.com",
// 		type: "wellness",
// 	},
// 	{
// 		title: "NAMI - National Alliance on Mental Illness",
// 		description: "Mental health support and resources",
// 		link: "https://www.nami.org",
// 		type: "support",
// 	},
// ];

// export default function Support() {
// 	const [currentAffirmation, setCurrentAffirmation] = useState(0);

// 	const nextAffirmation = () => {
// 		setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
// 	};

// 	const prevAffirmation = () => {
// 		setCurrentAffirmation(
// 			(prev) => (prev - 1 + affirmations.length) % affirmations.length
// 		);
// 	};

// 	return (
// 		<AppLayout>
// 			<PageContainer>
// 				<div className='text-center mb-12'>
// 					<h1 className='text-4xl font-bold text-purple-800 mb-4'>
// 						You're Not Alone 🤗
// 					</h1>
// 					<p className='text-xl text-gray-700 max-w-3xl mx-auto'>
// 						Job searching can be tough, but remember - you're stronger than you
// 						know. Here are some resources and affirmations to help you through
// 						this journey.
// 					</p>
// 				</div>

// 				{/* Affirmation Cards */}
// 				<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-xl p-8 max-w-4xl mx-auto mb-12'>
// 					<h2 className='text-2xl font-bold text-center text-purple-700 mb-6'>
// 						Daily Affirmations 💫
// 					</h2>
// 					<div className='flex items-center justify-between'>
// 						<button
// 							onClick={prevAffirmation}
// 							className='bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors'
// 						>
// 							←
// 						</button>
// 						<div className='flex-1 text-center px-6'>
// 							<p className='text-lg text-gray-800 leading-relaxed'>
// 								{affirmations[currentAffirmation]}
// 							</p>
// 						</div>
// 						<button
// 							onClick={nextAffirmation}
// 							className='bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors'
// 						>
// 							→
// 						</button>
// 					</div>
// 					<div className='flex justify-center mt-4 space-x-2'>
// 						{affirmations.map((_, index) => (
// 							<button
// 								key={index}
// 								onClick={() => setCurrentAffirmation(index)}
// 								className={`w-3 h-3 rounded-full ${
// 									index === currentAffirmation ? "bg-purple-500" : "bg-gray-300"
// 								}`}
// 							/>
// 						))}
// 					</div>
// 				</div>

// 				{/* Mental Health Resources */}
// 				<div className='mb-12'>
// 					<h2 className='text-3xl font-bold text-center text-purple-800 mb-8'>
// 						Support Resources 🆘
// 					</h2>
// 					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
// 						{resources.map((resource, index) => (
// 							<div
// 								key={index}
// 								className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-lg p-6 hover:shadow-xl transition-shadow'
// 							>
// 								<div className='flex items-center mb-3'>
// 									<span className='text-2xl mr-2'>
// 										{resource.type === "crisis" && "🚨"}
// 										{resource.type === "therapy" && "🗣️"}
// 										{resource.type === "wellness" && "🧘"}
// 										{resource.type === "support" && "🤝"}
// 									</span>
// 									<h3 className='text-lg font-bold text-purple-700'>
// 										{resource.title}
// 									</h3>
// 								</div>
// 								<p className='text-gray-600 mb-4'>{resource.description}</p>
// 								<div className='text-purple-600 font-semibold'>
// 									{resource.type === "crisis" ? (
// 										<span>Call: {resource.link}</span>
// 									) : (
// 										<a
// 											href={resource.link}
// 											target='_blank'
// 											rel='noopener noreferrer'
// 											className='hover:text-purple-800'
// 										>
// 											Visit Website →
// 										</a>
// 									)}
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				{/* Immediate Help Section */}
// 				<div className='bg-red-50/80 backdrop-blur-sm border-l-4 border-red-400 p-6 rounded-2xl sm:rounded-[3rem] mb-8'>
// 					<div className='flex'>
// 						<div className='shrink-0'>
// 							<span className='text-2xl'>⚠️</span>
// 						</div>
// 						<div className='ml-3'>
// 							<h3 className='text-lg font-medium text-red-800'>
// 								Need Immediate Help?
// 							</h3>
// 							<p className='mt-2 text-red-700'>
// 								If you're having thoughts of self-harm or suicide, please reach
// 								out immediately:
// 							</p>
// 							<ul className='mt-2 text-red-700 font-semibold'>
// 								<li>• Call 988 (Suicide & Crisis Lifeline)</li>
// 								<li>• Text HOME to 741741 (Crisis Text Line)</li>
// 								<li>• Call 911 or go to your nearest emergency room</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Tips Section */}
// 				<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-lg p-8'>
// 					<h2 className='text-2xl font-bold text-purple-700 mb-6 text-center'>
// 						Tips for Tough Days 💡
// 					</h2>
// 					<div className='grid md:grid-cols-2 gap-6'>
// 						<div>
// 							<h3 className='text-lg font-semibold text-purple-600 mb-3'>
// 								🌅 Morning Routine
// 							</h3>
// 							<ul className='text-gray-700 space-y-2'>
// 								<li>• Start with 3 deep breaths</li>
// 								<li>• Say one affirmation</li>
// 								<li>• Set a small, achievable goal</li>
// 								<li>• Drink water and eat something nutritious</li>
// 							</ul>
// 						</div>
// 						<div>
// 							<h3 className='text-lg font-semibold text-purple-600 mb-3'>
// 								🌙 Evening Wind-Down
// 							</h3>
// 							<ul className='text-gray-700 space-y-2'>
// 								<li>• Write down 3 things you're grateful for</li>
// 								<li>• Reflect on one positive moment from today</li>
// 								<li>• Do a 5-minute meditation or stretching</li>
// 								<li>• Prepare for tomorrow without pressure</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</PageContainer>
// 		</AppLayout>
// 	);
// }
