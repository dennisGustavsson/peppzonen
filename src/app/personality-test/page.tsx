"use client";
import Link from "next/link";
import { useState } from "react";

interface Question {
	id: number;
	question: string;
	answers: {
		text: string;
		type: string;
	}[];
}

const questions: Question[] = [
	{
		id: 1,
		question:
			"How do you typically respond when you see a job posting that looks perfect?",
		answers: [
			{
				text: "Screenshot it immediately and spend 3 hours perfecting my application",
				type: "perfectionist",
			},
			{
				text: "Apply within 5 minutes with my standard resume and hope for the best",
				type: "speedster",
			},
			{
				text: "Save it to read later... and then forget about it for 2 weeks",
				type: "procrastinator",
			},
			{
				text: "Send it to 5 friends asking if I'm qualified enough",
				type: "overthinker",
			},
		],
	},
	{
		id: 2,
		question: "What's your go-to outfit for a video interview?",
		answers: [
			{
				text: "Business professional from head to toe (yes, including pants)",
				type: "perfectionist",
			},
			{
				text: "Business casual on top, pajama pants on bottom",
				type: "speedster",
			},
			{
				text: "Whatever's clean and within arm's reach",
				type: "procrastinator",
			},
			{
				text: "7 outfit changes before settling on the first one",
				type: "overthinker",
			},
		],
	},
	{
		id: 3,
		question:
			"How do you prepare for the dreaded 'Tell me about yourself' question?",
		answers: [
			{
				text: "Memorize a 2-minute speech and practice it 47 times",
				type: "perfectionist",
			},
			{
				text: "Wing it with confidence and hope my charm carries me through",
				type: "speedster",
			},
			{
				text: "Think about it in the waiting room... if I remember",
				type: "procrastinator",
			},
			{
				text: "Write 15 different versions and still panic when they ask",
				type: "overthinker",
			},
		],
	},
	{
		id: 4,
		question: "Your approach to networking events:",
		answers: [
			{
				text: "Research every attendee and have conversation starters ready",
				type: "perfectionist",
			},
			{
				text: "Show up and make friends with whoever's at the snack table",
				type: "speedster",
			},
			{
				text: "Register for them but rarely actually attend",
				type: "procrastinator",
			},
			{
				text: "Stand in the corner analyzing everyone's networking strategies",
				type: "overthinker",
			},
		],
	},
	{
		id: 5,
		question: "When you get a rejection email, your first thought is:",
		answers: [
			{
				text: "What could I have done differently? *analyzes every interview moment*",
				type: "perfectionist",
			},
			{ text: "Their loss! On to the next one!", type: "speedster" },
			{
				text: "Maybe job searching can wait another week...",
				type: "procrastinator",
			},
			{
				text: "This confirms all my fears about not being good enough",
				type: "overthinker",
			},
		],
	},
	{
		id: 6,
		question: "Your LinkedIn strategy is:",
		answers: [
			{
				text: "Post thoughtful industry insights every Tuesday at 9am",
				type: "perfectionist",
			},
			{
				text: "Share memes and hope someone finds me entertaining enough to hire",
				type: "speedster",
			},
			{
				text: "Log in once every three months and feel overwhelmed",
				type: "procrastinator",
			},
			{
				text: "Draft 20 posts but never publish because they're not perfect",
				type: "overthinker",
			},
		],
	},
];

const results = {
	perfectionist: {
		title: "The Perfect Planner 📋",
		description: "You've color-coded your job search spreadsheet, haven't you?",
		traits: [
			"Your resume has been through more revisions than a bestselling novel",
			"You research the company's coffee preferences before applying",
			"You have backup plans for your backup plans",
			"Your interview prep includes practicing in front of a mirror for hours",
		],
		advice:
			"Your attention to detail is amazing! Just remember that 'good enough' sometimes IS perfect. You've got this! 🌟",
		encouragement:
			"Fun fact: Most successful people aren't perfect - they just start before they feel ready!",
	},
	speedster: {
		title: "The Rapid Responder 🚀",
		description: "You're probably applying to jobs while taking this quiz!",
		traits: [
			"You can submit an application faster than most people can read the job description",
			"Your motto: 'Apply first, read requirements later'",
			"You've accidentally applied to the same job three times",
			"You treat job applications like a video game - gotta catch 'em all!",
		],
		advice:
			"Your enthusiasm is contagious! Maybe slow down just a tiny bit to make sure you're hitting the right targets. Quality over quantity! 💫",
		encouragement:
			"Your energy and optimism are your superpowers - employers love that enthusiasm!",
	},
	procrastinator: {
		title: "The Tomorrow Starter 📅",
		description:
			"Your browser has 47 open tabs of job postings you'll 'definitely apply to later'",
		traits: [
			"You have a folder called 'Jobs to Apply To' that's basically a digital museum",
			"You're an expert at finding reasons to update your resume instead of using it",
			"You know every job board intimately but have applied to surprisingly few positions",
			"Your career planning happens in 3am anxiety sessions",
		],
		advice:
			"You're not lazy - you're just scared of rejection, and that's totally human! Start with just one application. Just one. You can do it! 💪",
		encouragement:
			"Every expert was once a beginner, and every pro was once an amateur. Today is the perfect day to start!",
	},
	overthinker: {
		title: "The Analysis Expert 🤔",
		description:
			"You've googled the interviewer's childhood pet's name, haven't you?",
		traits: [
			"You can find 17 different meanings in a simple 'Thanks for your application' email",
			"You've practiced answering questions they probably won't even ask",
			"You analyze your handshake technique more than most people analyze stocks",
			"You have theories about what your interviewer's office plant says about company culture",
		],
		advice:
			"Your thoughtfulness is a gift! But sometimes your brain needs a vacation from all that thinking. Trust yourself - you know more than you think you do! ✨",
		encouragement:
			"Your analytical skills are actually a huge strength - you just need to turn them toward your victories instead of your worries!",
	},
};

export default function PersonalityTest() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState<string[]>([]);
	const [showResult, setShowResult] = useState(false);

	const handleAnswer = (answerType: string) => {
		const newAnswers = [...answers, answerType];
		setAnswers(newAnswers);

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResult(true);
		}
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
		return (
			<div className='min-h-screen bg-linear-to-br from-pink-50 to-yellow-50'>
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
								href='/support'
								className='text-purple-600 hover:text-purple-800 transition-colors'
							>
								Support
							</Link>
							<Link
								href='/actions'
								className='text-purple-600 hover:text-purple-800 transition-colors'
							>
								Actions
							</Link>
						</div>
					</div>
				</nav>

				<main className='max-w-4xl mx-auto px-4 py-12'>
					<div className='text-center mb-8'>
						<h1 className='text-4xl font-bold text-pink-800 mb-4'>
							Your Job Seeker Personality! 🎭
						</h1>
					</div>

					<div className='bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto'>
						<div className='text-center mb-6'>
							<h2 className='text-3xl font-bold text-pink-700 mb-2'>
								{result.title}
							</h2>
							<p className='text-lg text-gray-600 italic'>
								{result.description}
							</p>
						</div>

						<div className='mb-8'>
							<h3 className='text-xl font-bold text-pink-600 mb-4'>
								Your Job Seeking Traits:
							</h3>
							<ul className='space-y-3'>
								{result.traits.map((trait, index) => (
									<li key={index} className='flex items-start'>
										<span className='text-pink-500 mr-2'>•</span>
										<span className='text-gray-700'>{trait}</span>
									</li>
								))}
							</ul>
						</div>

						<div className='bg-pink-50 rounded-lg p-6 mb-6'>
							<h3 className='text-lg font-bold text-pink-700 mb-2'>
								Friendly Advice:
							</h3>
							<p className='text-gray-700'>{result.advice}</p>
						</div>

						<div className='bg-yellow-50 rounded-lg p-6 mb-8'>
							<h3 className='text-lg font-bold text-yellow-700 mb-2'>
								Encouragement Boost:
							</h3>
							<p className='text-gray-700'>{result.encouragement}</p>
						</div>

						<div className='text-center'>
							<button
								onClick={resetTest}
								className='bg-linear-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg mr-4'
							>
								Take Test Again 🔄
							</button>
							<Link
								href='/'
								className='bg-linear-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block'
							>
								Back to Home 🏠
							</Link>
						</div>
					</div>
				</main>

				<footer className='bg-pink-700 text-white text-center py-8 mt-16'>
					<p className='text-lg font-medium'>
						Remember: Every job seeker personality is valid and valuable! 💖
					</p>
				</footer>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-linear-to-br from-pink-50 to-yellow-50'>
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
							href='/support'
							className='text-purple-600 hover:text-purple-800 transition-colors'
						>
							Support
						</Link>
						<Link
							href='/actions'
							className='text-purple-600 hover:text-purple-800 transition-colors'
						>
							Actions
						</Link>
					</div>
				</div>
			</nav>

			<main className='max-w-4xl mx-auto px-4 py-12'>
				<div className='text-center mb-8'>
					<h1 className='text-4xl font-bold text-pink-800 mb-4'>
						What Kind of Job Seeker Are You? 🤔
					</h1>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto'>
						Take this fun (and slightly ridiculous) personality test to discover
						your job-seeking style! Don't worry - all types are awesome in their
						own way! 🌟
					</p>
				</div>

				<div className='bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto'>
					<div className='mb-6'>
						<div className='flex justify-between items-center mb-4'>
							<span className='text-sm font-medium text-pink-600'>
								Question {currentQuestion + 1} of {questions.length}
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

						<div className='space-y-4'>
							{questions[currentQuestion].answers.map((answer, index) => (
								<button
									key={index}
									onClick={() => handleAnswer(answer.type)}
									className='w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
								>
									<span className='text-gray-700 font-medium'>
										{answer.text}
									</span>
								</button>
							))}
						</div>
					</div>

					<div className='text-center'>
						<p className='text-gray-500 text-sm'>
							Choose the answer that sounds most like you! There are no wrong
							answers - only funny ones! 😄
						</p>
					</div>
				</div>
			</main>

			<footer className='bg-pink-700 text-white text-center py-8 mt-16'>
				<p className='text-lg font-medium'>
					Every personality type has its strengths in the job market! 💪
				</p>
			</footer>
		</div>
	);
}
