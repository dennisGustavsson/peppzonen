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
						style={{ color: "var(--wine-plum-800)" }}
					>
						Du är inte ensam i kampen!
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
						style={{ color: "var(--wine-plum-800)" }}
					>
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
										style={{ color: "var(--wine-plum-800)" }}
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
						className='text-3xl font-bold mb-7 text-center flex items-center justify-center gap-3'
						style={{ color: "var(--wine-plum-800)" }}
					>
						Bryt den negativa spiralen (Action Plan)
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<h3
								className='text-lg font-black mb-3 flex items-center gap-2 '
								style={{ color: "var(--wine-plum-800)" }}
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
								className='text-lg font-black mb-3 flex items-center gap-2'
								style={{ color: "var(--wine-plum-800)" }}
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
				<div className='bg-red-50/80 backdrop-blur-sm border-b-4 border-red-400 p-6 rounded-2xl sm:rounded-[3rem] my-12'>
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
