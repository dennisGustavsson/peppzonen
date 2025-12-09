"use client";
import Link from "next/link";
import AppLayout from "@/components/AppLayout"; // Antar att du har denna
import PageContainer from "@/components/PageContainer"; // Antar att du har denna

export default function HomePage() {
	return (
		<AppLayout>
			<PageContainer>
				{/* Hero Section */}
				<div className='flex flex-col items-center justify-center text-center min-h-[70vh] py-12'>
					{/* En liten "badge" ovanför titeln för att sätta tonen */}
					<div className='inline-block px-4 py-1.5 mb-6 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold tracking-wide shadow-sm backdrop-blur-md border border-purple-200/50'>
						För oss som kämpar på arbetsmarknaden
					</div>

					{/* Huvudrubrik - Stor, tydlig och emotionell */}
					<h1 className='text-4xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight max-w-4xl'>
						Jobbsökandet är en storm. <br />
						<span className='text-transparent font-black text-7xl bg-clip-text bg-linear-to-r from-purple-600 to-orange-500'>
							Här är ditt andrum.
						</span>
					</h1>

					{/* Underrubrik - Förklarar syftet kortfattat */}
					<p className='text-xl md:text-2xl text-gray-700 max-w-2xl mb-12 leading-relaxed'>
						Trött på kalla auto-svar och tystnad? Vi har skapat en frizon från
						algoritmer, där du kan hämta kraft, perspektiv och lite välbehövlig
						mänsklig pepp.
					</p>

					{/* CTA-Knapp (Huvudfokus) */}
					<div className='flex flex-col sm:flex-row gap-6 items-center w-full justify-center'>
						{/* Länka denna till sidan där citat-generatorn finns (t.ex. /pepp) */}
						<Link
							href='/boost'
							className='group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto'
						>
							<span>Jag behöver en boost nu!</span>
							{/* En liten pil som animeras vid hover */}
							<svg
								className='w-6 h-6 ml-3 transition-transform duration-200 group-hover:translate-x-1'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M13 7l5 5m0 0l-5 5m16-5H3'
								/>
							</svg>

							{/* En subtil "glöd" bakom knappen */}
							<div className='absolute -inset-0.5 bg-linear-to-r from-purple-600 to-orange-500 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition duration-200 -z-10'></div>
						</Link>

						{/* Sekundär knapp (t.ex. till testet eller "om oss") */}
						<Link
							href='/personality-test'
							className='px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 bg-white/50 backdrop-blur-md border-2 border-gray-200 rounded-full hover:bg-white/80 hover:border-gray-300 focus:outline-none shadow-sm hover:shadow-md w-full sm:w-auto'
						>
							Ta absurditets-testet
						</Link>
					</div>

					{/* En liten "trust signal" längst ner */}
					{/* <p className='mt-16 text-gray-500 text-xs font-mono uppercase tracking-widest'>
						Inga loggar. Inga data sparas. Bara ren pepp.
					</p> */}
				</div>
			</PageContainer>
		</AppLayout>
	);
}
