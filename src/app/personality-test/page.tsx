"use client";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import PageContainer from "@/components/PageContainer";
import {
	Sparkles,
	RefreshCw,
	Eye,
	Grid,
	Rocket,
	Brain,
	Smile,
	MessageCircle,
} from "lucide-react";

interface Question {
	id: number;
	question: string;
	answers: {
		text: string;
		type: string;
	}[];
}

// ---- ABSURDA FRÅGOR: Använder PAKE-konceptet ----
const questions: Question[] = [
	{
		id: 1,
		question:
			"Det är tisdag morgon. En svärm ilskna drönare levererar 5000 olösta Rubiks kuber till ditt skrivbord. Ditt primära KPI är 'orange'. Din instinktiva reaktion är:",
		answers: [
			{
				text: "Jag ser omedelbart en möjlighet att pivotera processen utifrån nya data.",
				type: "Uggla",
			},
			{
				text: "Jag söker en holistisk lösning som involverar alla kollegor i ett synergimöte.",
				type: "Vaffla",
			},
			{
				text: "Jag kastar genast in mig i lösningen för att krossa kuberna så snabbt som möjligt.",
				type: "Komet",
			},
			{
				text: "Jag inser paradoxen och börjar dokumentera spänningen mellan kaos och ordning.",
				type: "Trapesoid",
			},
		],
	},
	{
		id: 2,
		question: "Välj det påstående som beskriver dig MEST:",
		answers: [
			{
				text: "Jag har aldrig någonsin i mitt liv känt mig avundsjuk.",
				type: "Komet",
			},
			{
				text: "Min förmåga att 'tänka utanför boxen' är bokstavlig; jag förstår inte konceptet 'box'.",
				type: "Trapesoid",
			},
			{
				text: "Jag är en visionär vars idéer är 100% felfria, men som ibland missförstås av medelmåttor.",
				type: "Uggla",
			},
			{
				text: "Jag skulle utan att tveka offra min mest älskade ägodel för att öka kvartalets EBITDA med 0.5%.",
				type: "Vaffla",
			},
		],
	},
	{
		id: 3,
		question: "Hur ser du på 'lunch'? (Enligt PAKE-analysen)",
		answers: [
			{
				text: "Det är en välkommen stund för datainhämtning och nätverksanalys.",
				type: "Uggla",
			},
			{
				text: "Det är ett teoretiskt koncept som bäst utforskas på fritiden.",
				type: "Komet",
			},
			{
				text: "Det är en nödvändig synergistisk paus för kollektivt välbefinnande.",
				type: "Vaffla",
			},
			{
				text: "Jag ägnar mig åt mental omstrukturering under den begränsade tidsramen.",
				type: "Trapesoid",
			},
		],
	},
	{
		id: 4,
		question:
			"Vilken geometrisk form representerar bäst din 'inre Sälj-arketyps' frukostvanor?",
		answers: [
			{
				text: "Ett Kaotiskt Äggröra (Du är disruptiv, innovativ).",
				type: "Trapesoid",
			},
			{
				text: "En Fyrkantig Smörgås (Du är strukturerad, pålitlig och levererar inom ramarna).",
				type: "Uggla",
			},
			{
				text: "En Cirkulär Våffla (Du är holistisk, ser helheten och är bra på att fånga upp mervärde).",
				type: "Vaffla",
			},
			{
				text: "Jag dricker bara svart kaffe (Du är 100% resultatfokuserad, ser frukost som onödig overhead).",
				type: "Komet",
			},
		],
	},
	{
		id: 5,
		question:
			"Om din chef bad dig omstrukturera företagets molninfrastruktur med enbart tankekraft och två gem, skulle du se det som:",
		answers: [
			{
				text: "En optimal utmaning för att bevisa att gränser är flytande.",
				type: "Trapesoid",
			},
			{
				text: "En analytisk utmaning som kräver en omedelbar riskbedömning.",
				type: "Uggla",
			},
			{
				text: "En möjlighet att förstärka teamets samhörighet genom en gemensam uppgift.",
				type: "Vaffla",
			},
			{
				text: "En spännande utmaning som jag kan lösa innan dagen är slut!",
				type: "Komet",
			},
		],
	},
	{
		id: 6,
		question: "Din primära uppgift i ett team är:",
		answers: [
			{
				text: "Att upprätthålla dynamisk spänning mellan process och kaos.",
				type: "Trapesoid",
			},
			{
				text: "Att minimera risk genom rigorös rapportering och data-drivna slutsatser.",
				type: "Uggla",
			},
			{
				text: "Att säkerställa kollektivt välbefinnande i alla stakeholder-möten.",
				type: "Vaffla",
			},
			{
				text: "Att uppnå maximal 'impact' omedelbart, oavsett konsekvens.",
				type: "Komet",
			},
		],
	},
];

// ---- RESULTAT: Satiriska PAKE-profiler ----
const results = {
	Trapesoid: {
		title: "Den Kvant-Dynamiska Trapesoiden",
		description:
			"Du är en paradox som frodas i skärningspunkten mellan kaos och struktur.",
		traits: [
			"Du är metodiskt agil, vilket innebär att du rör dig snabbt men bara i cirklar.",
			"Din förmåga att 'go with the flow' är så stark att du inte vet var flowet leder.",
			"Du är 92% kompatibel med roller som kräver 'friktion' men 8% med de som kräver 'klart syfte'.",
			"Din optimala arbetsmiljö är en som är *både* extremt reglerad *och* totalt anarkistisk.",
		],
		advice:
			"Slutsats: Du är en sällsynt profil som kan 'bygga flygplanet medan det lyfter', troligen samtidigt som du jonglerar med Rubiks kuber. Din flexibilitet är ett hot mot alla processer.",
		encouragement:
			"Ditt andedjur på arbetsplatsen: Schrödingers chef. Du är anställningsbar. Kanske.",
	},
	Uggla: {
		title: "Den Strategiska Ugglan",
		description:
			"Du är en analytisk arkebuserare som värderar data över den mänskliga faktorn.",
		traits: [
			"Du har en mapp med analyser för varje personlighetstest du någonsin tagit.",
			"Du kan hitta 17 olika betydelser i en enkel 'Tack för din ansökan'-email.",
			"Ditt motto: 'Mät först, agera aldrig.'",
			"Din intervjuförberedelse inkluderar att analysera intervjuarens LinkedIn-aktivitet under de senaste tre åren.",
		],
		advice:
			"Slutsats: Du behöver inte mer data, du behöver ett beslut. Lita på den 'intuition' du analyserat dig fram till. Ditt värde mäts inte i rader av Excel-data.",
		encouragement:
			"Du är starkast när du litar på att du vet mer än du tror. Du är en 100% felfri visionär, även om ingen förstår det.",
	},
	Vaffla: {
		title: "Den Holistiska Våfflan",
		description:
			"Du är en inkluderande kraft som ser harmonin i alla processer. Konflikter är ditt kryptonit.",
		traits: [
			"Ditt CV använder orden 'synergi' och 'empatisk' oftare än ditt eget namn.",
			"Du tror genuint att alla problem kan lösas med ett gruppmöte och en whiteboard.",
			"Du undviker aktivt all feedback som kan leda till 'obehagliga känslor'.",
			"Du är 100% inriktad på att alla i rummet ska må bra, även på bekostnad av ett resultat.",
		],
		advice:
			"Slutsats: Du är utmärkt på att undvika friktion! Men ibland är det enda som leder till framsteg lite sund konflikt. Sluta oroa dig för allas känslor, och fokusera på din egen framgång. Det är okej att skapa friktion.",
		encouragement:
			"Fortsätt vara lagets lim! Men kom ihåg att det limmet är starkast när du får vara stark själv först.",
	},
	Komet: {
		title: "Den Proaktiva Kometen",
		description:
			"Du är en ostoppbar, proaktiv kraft som lever i morgondagen och ignorerar detaljer.",
		traits: [
			"Du kan skicka in en ansökan snabbare än de flesta kan läsa annonsen.",
			"Ditt motto: 'Gör det nu, be om förlåtelse senare, om någon märker det.'",
			"Du har oavsiktligt sökt samma jobb tre gånger i olika städer.",
			"Du är 100% inriktad på att uppnå maximal 'impact' omedelbart, oavsett konsekvens.",
		],
		advice:
			"Slutsats: Din entusiasm gör att du bränner ut dig själv. Sakta ner och sikta in dig på kvalitet över kvantitet. Ditt värde ligger i precision, inte i fart.",
		encouragement:
			"Din energi är din superkraft! Du är en 'doer' - arbetsgivare älskar det. Men glöm inte att ta lunch. Frukost är inte onödig overhead.",
	},
};

export default function PersonalityTest() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState<string[]>([]);
	const [showResult, setShowResult] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleAnswer = (answerType: string) => {
		setIsTransitioning(true);
		const newAnswers = [...answers, answerType];
		setAnswers(newAnswers);
		setTimeout(() => {
			const newAnswers = [...answers, answerType];
			setAnswers(newAnswers);

			if (currentQuestion < questions.length - 1) {
				setCurrentQuestion(currentQuestion + 1);
			} else {
				setShowResult(true);
			}
			setIsTransitioning(false); // Start fade in
		}, 300);
	};

	const getResult = () => {
		const counts = answers.reduce((acc: { [key: string]: number }, answer) => {
			acc[answer] = (acc[answer] || 0) + 1;
			return acc;
		}, {});

		const resultType = Object.keys(counts).reduce((a, b) =>
			counts[a] > counts[b] ? a : b
		);
		return results[resultType as keyof typeof results];
	};

	const resetTest = () => {
		setCurrentQuestion(0);
		setAnswers([]);
		setShowResult(false);
	};

	if (showResult) {
		const result = getResult();
		const resultIcons: { [key: string]: React.ElementType } = {
			Trapesoid: RefreshCw,
			Uggla: Eye,
			Vaffla: Grid,
			Komet: Rocket,
		};
		const ResultIcon = resultIcons[result.title.split(" ")[2]] || Sparkles;
		return (
			<AppLayout>
				<PageContainer>
					<div className='text-center mb-8'>
						<h1 className='text-4xl font-bold text-pink-800 mb-4 flex items-center justify-center gap-3'>
							{/* <Sparkles className='w-8 h-8' /> */}
							Ditt Absurda Resultat!
						</h1>
					</div>

					<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-xl p-8 max-w-3xl mx-auto'>
						<div className='text-center mb-6'>
							<h2 className='text-3xl font-bold text-pink-700 mb-2 flex items-center justify-center gap-3'>
								<ResultIcon className='w-8 h-8' />
								{result.title}
							</h2>
							<p className='text-lg text-gray-600 italic'>
								{result.description}
							</p>
						</div>

						<div className='mb-8'>
							<h3 className='text-xl font-bold text-pink-600 mb-4'>
								Din Kvantifierade Profil:
							</h3>
							<ul className='space-y-3'>
								{result.traits.map((trait, index) => (
									<li key={index} className='flex items-center'>
										<Sparkles className='w-4 h-4 mr-2 text-pink-500' />
										<span className='text-gray-700'>{trait}</span>
									</li>
								))}
							</ul>
						</div>

						<div
							className='border-l-4 p-6 rounded-2xl sm:rounded-[3rem] mb-6'
							style={{
								background: "var(--wine-plum-50)",
								borderColor: "var(--wine-plum-400)",
							}}
						>
							<h3
								className='text-lg font-bold mb-2 flex items-center gap-2'
								style={{ color: "var(--wine-plum-700)" }}
							>
								<Brain className='w-5 h-5' /> Varför detta är Skitsnack (Din
								Analys):
							</h3>
							<ul
								className='space-y-2 text-sm'
								style={{ color: "var(--wine-plum-600)" }}
							>
								<li>
									<strong>Total irrelevans:</strong> Frågorna om Rubiks kuber
									och gem skapar scenarier så långt från verkligheten att de
									blir meningslösa, bara för att &apos;mäta&apos; kreativitet.
								</li>
								<li>
									<strong>Omöjliga dygder:</strong> Valen tvingar dig att välja
									mellan absurd arrogans eller obehörig innovation. Det är ren
									&apos;Catch-22&apos;-logik.
								</li>
								<li>
									<strong>Pseudovetenskap:</strong> Att koppla geometriska
									former till frukostvanor och din sälj-arketype är 2020-talets
									frenologi. Det säger allt om testet, och inget om dig.
								</li>
							</ul>
						</div>

						<div
							className='rounded-2xl p-6 mb-6'
							style={{ background: "var(--tangerine-dream-50)" }}
						>
							<h3
								className='text-lg font-bold mb-2 flex items-center gap-2'
								style={{ color: "var(--tangerine-dream-700)" }}
							>
								<MessageCircle className='w-5 h-5' /> Vår Analytiska Slutsats:
							</h3>
							<p className='text-gray-700'>{result.advice}</p>
						</div>

						<div
							className='rounded-2xl p-6 mb-8'
							style={{ background: "var(--wine-plum-50)" }}
						>
							<h3
								className='text-lg font-bold mb-2 flex items-center gap-2'
								style={{ color: "var(--wine-plum-600)" }}
							>
								<Sparkles className='w-5 h-5' /> Pepp-Boost:
							</h3>
							<p className='text-gray-700'>{result.encouragement}</p>
						</div>

						<div className='text-center'>
							<button
								onClick={resetTest}
								className='bg-linear-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg mr-4 flex items-center justify-center gap-2'
							>
								<RefreshCw className='w-5 h-5' /> Ta om Testet
							</button>
						</div>
					</div>
				</PageContainer>
			</AppLayout>
		);
	}

	return (
		<AppLayout>
			<PageContainer>
				<div className='text-center mb-8'>
					<h1
						className='text-4xl font-bold mb-4 flex items-center justify-center gap-3'
						style={{ color: "var(--wine-plum-700)" }}
					>
						Synerg-Align™ Personlighetssyntes
					</h1>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto flex items-center justify-center gap-2'>
						Välkommen till Absurditets-galleriet! Svara ärligt på dessa omöjliga
						frågor för att upptäcka din sanna Corporate-Arketyp. Kom ihåg:
						svaret säger mer om testet än om dig!{" "}
						{/* <Sparkles className='w-5 h-5 text-pink-500' /> */}
					</p>
				</div>

				<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-xl p-8 max-w-3xl mx-auto'>
					<div className='mb-6'>
						<div className='flex justify-between items-center mb-4'>
							<span className='text-sm font-medium text-pink-600'>
								Fråga {currentQuestion + 1} av {questions.length}
							</span>
							<div className='w-64 bg-gray-200 rounded-full h-2'>
								<div
									className='bg-linear-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300'
									style={{
										width: `${
											((currentQuestion + 1) / questions.length) * 100
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>

					<div className='mb-8'>
						<h2 className='text-xl font-bold text-gray-800 mb-6 leading-relaxed'>
							{questions[currentQuestion].question}
						</h2>

						<div
							className={`space-y-4 ${
								isTransitioning ? "opacity-0" : "opacity-100"
							}`}
						>
							{questions[currentQuestion].answers.map((answer, index) => (
								<button
									key={`${questions[currentQuestion].id}-${index}`}
									onClick={() => handleAnswer(answer.type)}
									className='w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50/80 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent '
								>
									<span className='text-gray-700 font-medium'>
										{answer.text}
									</span>
								</button>
							))}
						</div>
					</div>

					<div className='text-center'>
						<p className='text-gray-500 text-sm flex items-center justify-center gap-2'>
							Välj det påstående som är mest absurt. Det finns inga rätt svar,
							bara meningslösa. <Smile className='w-4 h-4 text-pink-500' />
						</p>
					</div>
				</div>
			</PageContainer>
		</AppLayout>
	);
}
