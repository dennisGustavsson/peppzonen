"use client";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import PageContainer from "@/components/PageContainer";

const moodBoosters = [
	{
		category: "Physical Activity",
		emoji: "🏃‍♂️",
		actions: [
			"Take a 10-minute walk outside",
			"Do 5 minutes of stretching",
			"Dance to your favorite song",
			"Try some jumping jacks",
			"Go for a bike ride",
			"Practice yoga poses",
		],
	},
	{
		category: "Creative Expression",
		emoji: "🎨",
		actions: [
			"Draw or doodle something fun",
			"Write in a journal",
			"Take photos of beautiful things",
			"Cook or bake something new",
			"Play a musical instrument",
			"Try origami or crafts",
		],
	},
	{
		category: "Social Connection",
		emoji: "👥",
		actions: [
			"Call a friend or family member",
			"Send a thoughtful text message",
			"Video chat with someone you miss",
			"Write a thank you note",
			"Join an online community",
			"Volunteer for a cause you care about",
		],
	},
	{
		category: "Mindfulness & Relaxation",
		emoji: "🧘‍♀️",
		actions: [
			"Practice deep breathing for 5 minutes",
			"Do a guided meditation",
			"Take a warm bath or shower",
			"Listen to calming music",
			"Practice gratitude journaling",
			"Try progressive muscle relaxation",
		],
	},
	{
		category: "Learning & Growth",
		emoji: "📚",
		actions: [
			"Read an inspiring article",
			"Watch an educational video",
			"Learn 5 words in a new language",
			"Take a free online course",
			"Listen to a motivating podcast",
			"Read positive news stories",
		],
	},
	{
		category: "Self-Care",
		emoji: "💆‍♀️",
		actions: [
			"Give yourself a face mask",
			"Organize a small space",
			"Make your favorite healthy snack",
			"Take a power nap (15-20 minutes)",
			"Do something that makes you laugh",
			"Practice positive self-talk",
		],
	},
];

const quickWins = [
	"Make your bed",
	"Drink a glass of water",
	"Smile at yourself in the mirror",
	"Take three deep breaths",
	"Clean one small area",
	"Text someone you appreciate",
	"Step outside for fresh air",
	"Listen to one uplifting song",
	"Write down one thing you're grateful for",
	"Do one minute of stretching",
];

export default function Actions() {
	const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
	const [completedActions, setCompletedActions] = useState(new Set<string>());

	const toggleAction = (action: string) => {
		const newCompleted = new Set(completedActions);
		if (newCompleted.has(action)) {
			newCompleted.delete(action);
		} else {
			newCompleted.add(action);
		}
		setCompletedActions(newCompleted);
	};

	const getRandomQuickWin = () => {
		const randomWin = quickWins[Math.floor(Math.random() * quickWins.length)];
		return randomWin;
	};

	const [currentQuickWin, setCurrentQuickWin] = useState(getRandomQuickWin());

	return (
		<AppLayout>
			<PageContainer>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-green-800 mb-4'>
						Take Action, Feel Better! 🎯
					</h1>
					<p className='text-xl text-gray-700 max-w-3xl mx-auto'>
						Sometimes the best way to feel better is to do something positive.
						Here are some quick actions you can take right now to boost your
						mood!
					</p>
				</div>

				{/* Quick Win Section */}
				<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-xl p-8 max-w-4xl mx-auto mb-12'>
					<h2 className='text-2xl font-bold text-center text-green-700 mb-6'>
						5-Minute Mood Booster 🚀
					</h2>
					<div className='text-center'>
						<div className='bg-green-50/80 backdrop-blur-sm rounded-lg p-6 mb-6'>
							<p className='text-lg text-green-800 font-medium mb-4'>
								Right now, try this simple action:
							</p>
							<p className='text-2xl text-green-700 font-bold mb-4'>
								{currentQuickWin}
							</p>
							<div className='flex justify-center space-x-4'>
								<button
									onClick={() => toggleAction(currentQuickWin)}
									className={`px-6 py-3 rounded-full font-semibold transition-all ${
										completedActions.has(currentQuickWin)
											? "bg-green-500 text-white"
											: "bg-green-100 text-green-700 hover:bg-green-200"
									}`}
								>
									{completedActions.has(currentQuickWin)
										? "✅ Done!"
										: "Mark as Done"}
								</button>
								<button
									onClick={() => setCurrentQuickWin(getRandomQuickWin())}
									className='px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200 transition-colors'
								>
									Get New Action
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Categories Grid */}
				<div className='mb-12'>
					<h2 className='text-3xl font-bold text-center text-green-800 mb-8'>
						Choose Your Mood Booster Category 📋
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
						{moodBoosters.map((category, index) => (
							<button
								key={index}
								onClick={() =>
									setSelectedCategory(selectedCategory === index ? null : index)
								}
								className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-105 ${
									selectedCategory === index
										? "ring-4 ring-green-300 bg-green-50/80"
										: ""
								}`}
							>
								<div className='text-4xl mb-3'>{category.emoji}</div>
								<h3 className='text-lg font-bold text-green-700'>
									{category.category}
								</h3>
								<p className='text-gray-600 text-sm mt-2'>
									{category.actions.length} actions available
								</p>
							</button>
						))}
					</div>

					{/* Selected Category Actions */}
					{selectedCategory !== null && (
						<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-lg p-8'>
							<h3 className='text-2xl font-bold text-green-700 mb-6 text-center'>
								{moodBoosters[selectedCategory].emoji}{" "}
								{moodBoosters[selectedCategory].category}
							</h3>
							<div className='grid md:grid-cols-2 gap-4'>
								{moodBoosters[selectedCategory].actions.map(
									(action, actionIndex) => (
										<div
											key={actionIndex}
											className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
												completedActions.has(action)
													? "border-green-300 bg-green-50/80 text-green-800"
													: "border-gray-200 hover:border-green-300 hover:bg-green-50/80"
											}`}
											onClick={() => toggleAction(action)}
										>
											<div className='flex items-center justify-between'>
												<span className='font-medium'>{action}</span>
												<span className='text-xl'>
													{completedActions.has(action) ? "✅" : "⭕"}
												</span>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					)}
				</div>

				{/* Progress Section */}
				{completedActions.size > 0 && (
					<div className='bg-green-50/80 backdrop-blur-sm border-l-4 border-green-400 p-6 rounded-2xl sm:rounded-[3rem]'>
						<div className='flex'>
							<div className='shrink-0'>
								<span className='text-2xl'>🎉</span>
							</div>
							<div className='ml-3'>
								<h3 className='text-lg font-medium text-green-800'>
									Amazing Progress!
								</h3>
								<p className='mt-2 text-green-700'>
									You've completed {completedActions.size} mood-boosting action
									{completedActions.size > 1 ? "s" : ""}! Keep up the fantastic
									work - every small step counts! 💪
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Tips Section */}
				<div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-[3rem] shadow-lg p-8 mt-8'>
					<h2 className='text-2xl font-bold text-green-700 mb-6 text-center'>
						Pro Tips for Success 💡
					</h2>
					<div className='grid md:grid-cols-2 gap-8'>
						<div>
							<h3 className='text-lg font-semibold text-green-600 mb-3'>
								🎯 Start Small
							</h3>
							<p className='text-gray-700'>
								Pick one action that feels easy right now. Success builds
								momentum, and small wins lead to bigger changes!
							</p>
						</div>
						<div>
							<h3 className='text-lg font-semibold text-green-600 mb-3'>
								⏰ Set a Timer
							</h3>
							<p className='text-gray-700'>
								Give yourself just 5-10 minutes for each action. You'll be
								surprised how much you can accomplish in a short time!
							</p>
						</div>
						<div>
							<h3 className='text-lg font-semibold text-green-600 mb-3'>
								🔄 Make it Routine
							</h3>
							<p className='text-gray-700'>
								Try to do one mood-boosting action every day. Building positive
								habits creates lasting change in how you feel.
							</p>
						</div>
						<div>
							<h3 className='text-lg font-semibold text-green-600 mb-3'>
								🎊 Celebrate Wins
							</h3>
							<p className='text-gray-700'>
								Acknowledge every action you complete, no matter how small.
								You're taking care of yourself, and that's worth celebrating!
							</p>
						</div>
					</div>
				</div>
			</PageContainer>
		</AppLayout>
	);
}
