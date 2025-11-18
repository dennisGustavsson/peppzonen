"use client";
import Link from "next/link";
import { useState } from "react";

const affirmations = [
	"I am resilient and bounce back from setbacks stronger than before.",
	"My worth is not determined by one job application or interview.",
	"Every 'no' brings me closer to the perfect 'yes'.",
	"I have unique skills and talents that the right employer will value.",
	"This is just a detour, not a dead end.",
	"I trust the timing of my life and career journey.",
	"I am exactly where I need to be in this moment.",
	"My dream job is out there looking for me too.",
	"I choose to see rejection as redirection to something better.",
	"I am worthy of success and happiness.",
];

const resources = [
	{
		title: "National Suicide Prevention Lifeline",
		description: "24/7 support for those in emotional distress",
		link: "988",
		type: "crisis",
	},
	{
		title: "Crisis Text Line",
		description: "Text HOME to 741741 for crisis support",
		link: "741741",
		type: "crisis",
	},
	{
		title: "BetterHelp",
		description: "Online counseling and therapy services",
		link: "https://www.betterhelp.com",
		type: "therapy",
	},
	{
		title: "Headspace",
		description: "Meditation and mindfulness app",
		link: "https://www.headspace.com",
		type: "wellness",
	},
	{
		title: "NAMI - National Alliance on Mental Illness",
		description: "Mental health support and resources",
		link: "https://www.nami.org",
		type: "support",
	},
];

export default function Support() {
	const [currentAffirmation, setCurrentAffirmation] = useState(0);

	const nextAffirmation = () => {
		setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
	};

	const prevAffirmation = () => {
		setCurrentAffirmation(
			(prev) => (prev - 1 + affirmations.length) % affirmations.length
		);
	};

	return (
		<div className='min-h-screen bg-linear-to-br from-blue-50 to-purple-50'>
			<nav className='bg-white shadow-lg'>
				<div className='max-w-6xl mx-auto px-4 py-3 flex justify-between items-center'>
					<Link href='/' className='text-2xl font-bold text-purple-600'>
						😊 CheerMeUp
					</Link>
					<div className='flex space-x-6'>
						<Link
							href='/'
							className='text-purple-600 hover:text-purple-800 transition-colors'
						>
							Home
						</Link>
						<Link
							href='/actions'
							className='text-purple-600 hover:text-purple-800 transition-colors'
						>
							Actions
						</Link>
						<Link
							href='/personality-test'
							className='text-purple-600 hover:text-purple-800 transition-colors'
						>
							Fun Test
						</Link>
					</div>
				</div>
			</nav>

			<main className='max-w-6xl mx-auto px-4 py-12'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-purple-800 mb-4'>
						You're Not Alone 🤗
					</h1>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto'>
						Job searching can be tough, but remember - you're stronger than you
						know. Here are some resources and affirmations to help you through
						this journey.
					</p>
				</div>

				{/* Affirmation Cards */}
				<div className='bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-12'>
					<h2 className='text-2xl font-bold text-center text-purple-700 mb-6'>
						Daily Affirmations 💫
					</h2>
					<div className='flex items-center justify-between'>
						<button
							onClick={prevAffirmation}
							className='bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors'
						>
							←
						</button>
						<div className='flex-1 text-center px-6'>
							<p className='text-lg text-gray-800 leading-relaxed'>
								{affirmations[currentAffirmation]}
							</p>
						</div>
						<button
							onClick={nextAffirmation}
							className='bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors'
						>
							→
						</button>
					</div>
					<div className='flex justify-center mt-4 space-x-2'>
						{affirmations.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentAffirmation(index)}
								className={`w-3 h-3 rounded-full ${
									index === currentAffirmation ? "bg-purple-500" : "bg-gray-300"
								}`}
							/>
						))}
					</div>
				</div>

				{/* Mental Health Resources */}
				<div className='mb-12'>
					<h2 className='text-3xl font-bold text-center text-purple-800 mb-8'>
						Support Resources 🆘
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{resources.map((resource, index) => (
							<div
								key={index}
								className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow'
							>
								<div className='flex items-center mb-3'>
									<span className='text-2xl mr-2'>
										{resource.type === "crisis" && "🚨"}
										{resource.type === "therapy" && "🗣️"}
										{resource.type === "wellness" && "🧘"}
										{resource.type === "support" && "🤝"}
									</span>
									<h3 className='text-lg font-bold text-purple-700'>
										{resource.title}
									</h3>
								</div>
								<p className='text-gray-600 mb-4'>{resource.description}</p>
								<div className='text-purple-600 font-semibold'>
									{resource.type === "crisis" ? (
										<span>Call: {resource.link}</span>
									) : (
										<a
											href={resource.link}
											target='_blank'
											rel='noopener noreferrer'
											className='hover:text-purple-800'
										>
											Visit Website →
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Immediate Help Section */}
				<div className='bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-8'>
					<div className='flex'>
						<div className='shrink-0'>
							<span className='text-2xl'>⚠️</span>
						</div>
						<div className='ml-3'>
							<h3 className='text-lg font-medium text-red-800'>
								Need Immediate Help?
							</h3>
							<p className='mt-2 text-red-700'>
								If you're having thoughts of self-harm or suicide, please reach
								out immediately:
							</p>
							<ul className='mt-2 text-red-700 font-semibold'>
								<li>• Call 988 (Suicide & Crisis Lifeline)</li>
								<li>• Text HOME to 741741 (Crisis Text Line)</li>
								<li>• Call 911 or go to your nearest emergency room</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Tips Section */}
				<div className='bg-white rounded-xl shadow-lg p-8'>
					<h2 className='text-2xl font-bold text-purple-700 mb-6 text-center'>
						Tips for Tough Days 💡
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<h3 className='text-lg font-semibold text-purple-600 mb-3'>
								🌅 Morning Routine
							</h3>
							<ul className='text-gray-700 space-y-2'>
								<li>• Start with 3 deep breaths</li>
								<li>• Say one affirmation</li>
								<li>• Set a small, achievable goal</li>
								<li>• Drink water and eat something nutritious</li>
							</ul>
						</div>
						<div>
							<h3 className='text-lg font-semibold text-purple-600 mb-3'>
								🌙 Evening Wind-Down
							</h3>
							<ul className='text-gray-700 space-y-2'>
								<li>• Write down 3 things you're grateful for</li>
								<li>• Reflect on one positive moment from today</li>
								<li>• Do a 5-minute meditation or stretching</li>
								<li>• Prepare for tomorrow without pressure</li>
							</ul>
						</div>
					</div>
				</div>
			</main>

			<footer className='bg-purple-700 text-white text-center py-8 mt-16'>
				<p className='text-lg font-medium'>
					You matter, you're valued, and better days are ahead! 💜
				</p>
			</footer>
		</div>
	);
}
