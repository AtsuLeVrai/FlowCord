"use client";
import {ArrowRight, Cloud, Code, GitBranch, Package, Plus, Shield, Zap,} from "lucide-react";
import dynamic from "next/dynamic";
import {Inter, Poppins} from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import {useRef, useState} from "react";

// Dynamically import ReactFlow components to avoid SSR issues
const ReactFlowDemo = dynamic(() => import("../components/ReactFlowDemo"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-[500px] flex items-center justify-center bg-[#0a1018] rounded-lg border border-gray-700">
			<div className="flex flex-col items-center">
				<div className="h-8 w-8 border-t-2 border-l-2 border-blue-400 rounded-full animate-spin mb-4" />
				<div className="text-blue-400">Loading editor...</div>
			</div>
		</div>
	),
});

// Define fonts
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
});

export default function Home() {
	const featureRef = useRef<HTMLDivElement>(null);
	const [showDemoTooltip, setShowDemoTooltip] = useState(false);

	function scrollToFeatures() {
		featureRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div
			className={`min-h-screen bg-[#0c1521] text-slate-50 ${inter.variable} ${poppins.variable} font-sans`}
		>
			<Head>
				<title>FlowCord | Visual Discord Bot Builder</title>
				<meta
					name="description"
					content="Create powerful Discord bots without code using a visual flow-based editor"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<header className="fixed z-50 w-full border-gray-800 border-b bg-[#0c1521]/80 backdrop-blur-lg">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<Link href="/" className="flex items-center">
								<span className="font-poppins bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text font-bold text-2xl text-transparent">
									Flow<span className="text-slate-200">Cord</span>
								</span>
							</Link>
							<div className="ml-10 hidden md:block">
								<div className="flex space-x-8">
									<button
										type="button"
										onClick={scrollToFeatures}
										className="px-3 py-2 font-medium text-slate-300 text-sm transition-colors hover:text-blue-400"
									>
										Features
									</button>
									<Link
										href="/templates"
										className="px-3 py-2 font-medium text-slate-300 text-sm transition-colors hover:text-blue-400"
									>
										Templates
									</Link>
									<Link
										href="/pricing"
										className="px-3 py-2 font-medium text-slate-300 text-sm transition-colors hover:text-blue-400"
									>
										Pricing
									</Link>
									<Link
										href="/docs"
										className="px-3 py-2 font-medium text-slate-300 text-sm transition-colors hover:text-blue-400"
									>
										Docs
									</Link>
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="flex items-center space-x-4">
								<Link
									href="/login"
									className="rounded-md border border-blue-500/30 px-4 py-2 font-medium text-blue-400 text-sm transition-colors hover:text-blue-300"
								>
									Sign In
								</Link>
								<Link
									href="/signup"
									className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 font-medium text-sm text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-indigo-700"
								>
									Get Started
								</Link>
							</div>
						</div>
						<div className="flex items-center md:hidden">
							<button type="button" className="text-slate-300 hover:text-white">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<div className="relative overflow-hidden pt-16">
				{/* Background elements */}
				<div className="absolute inset-0 bg-[#0c1521]">
					{/* Grid background */}
					<div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:50px_50px] opacity-25" />

					{/* Subtle gradient */}
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_70%)]" />

					{/* Bottom gradient */}
					<div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a1018] to-transparent" />
				</div>

				<div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
					<div className="text-center">
						<div className="mb-4 inline-block">
							<span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-medium text-blue-400 text-sm">
								<Zap size={16} className="mr-2" />
								Visual Bot Development
							</span>
						</div>

						<h1 className="font-poppins font-extrabold text-4xl tracking-tight md:text-6xl">
							<span className="block">Build Discord Bots</span>
							<span className="mt-2 block bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
								Without Writing Code
							</span>
						</h1>

						<p className="mx-auto mt-6 max-w-2xl text-slate-300 text-xl">
							FlowCord combines the power of visual programming with Discord's
							API. Create powerful bots by connecting blocks in an intuitive
							flow-based editor.
						</p>

						<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
							<Link
								href="/signup"
								className="group inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-indigo-700"
							>
								<span className="flex items-center">
									Get Started Free
									<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								</span>
							</Link>
							<button
								type="button"
								onClick={() => setShowDemoTooltip(!showDemoTooltip)}
								className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 px-8 py-3 font-medium text-blue-400 transition-colors hover:border-blue-500/30 hover:text-blue-300 relative"
							>
								Try Demo
								{showDemoTooltip && (
									<div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg text-sm whitespace-nowrap">
										Interactive demo available below!
										<div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800" />
									</div>
								)}
							</button>
						</div>
					</div>

					{/* Flow Editor Showcase */}
					<div className="relative mx-auto mt-16 max-w-6xl">
						<div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-700 shadow-2xl bg-[#0a1018] relative">
							<ReactFlowDemo />

							{/* Grid overlay to enhance the blueprint feel */}
							<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(10,16,24,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(10,16,24,0.5)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
						</div>

						{/* Floating Add Node badge */}
						<div className="absolute -top-6 -right-6 rounded-lg border border-blue-900/30 bg-blue-900/20 p-3 shadow-xl animate-pulse">
							<div className="flex items-center">
								<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
									<Plus className="h-6 w-6 text-white" />
								</div>
								<div className="ml-3">
									<p className="font-medium text-white text-sm">Add Node</p>
									<p className="text-slate-400 text-xs">
										220+ components available
									</p>
								</div>
							</div>
						</div>

						{/* Floating Deploy badge */}
						<div className="absolute -bottom-6 -left-6 rounded-lg border border-green-900/30 bg-green-900/20 p-3 shadow-xl">
							<div className="flex items-center">
								<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
									<Cloud className="h-6 w-6 text-white" />
								</div>
								<div className="ml-3">
									<p className="font-medium text-white text-sm">Deploy Bot</p>
									<p className="text-slate-400 text-xs">One-click deployment</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div ref={featureRef} className="bg-[#0a1018] py-24" id="features">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-medium text-blue-400 text-xs">
							<Package size={14} className="mr-1" />
							Features
						</span>
						<h2 className="font-poppins mt-4 font-bold text-3xl text-slate-50 sm:text-4xl">
							Everything You Need to Build Discord Bots
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-slate-300 text-xl">
							A comprehensive suite of tools that makes Discord bot development
							accessible to everyone.
						</p>
					</div>

					<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{/* Feature 1 */}
						<div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 group">
							<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
								<GitBranch size={24} />
							</div>
							<h3 className="font-poppins mb-3 text-xl font-bold text-white">
								Visual Flow Editor
							</h3>
							<p className="text-slate-300">
								Create complex bot logic by connecting nodes in an intuitive
								drag-and-drop interface. No coding required.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 group">
							<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
								<Package size={24} />
							</div>
							<h3 className="font-poppins mb-3 text-xl font-bold text-white">
								220+ Ready Components
							</h3>
							<p className="text-slate-300">
								Choose from our extensive library of pre-built components for
								common Discord bot functionality.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 group">
							<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
								<Zap size={24} />
							</div>
							<h3 className="font-poppins mb-3 text-xl font-bold text-white">
								One-Click Deploy
							</h3>
							<p className="text-slate-300">
								Deploy your bot to our cloud or your own server with a single
								click. No server configuration needed.
							</p>
						</div>

						{/* Feature 4 */}
						<div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 group">
							<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
								<Cloud size={24} />
							</div>
							<h3 className="font-poppins mb-3 text-xl font-bold text-white">
								Real-time Testing
							</h3>
							<p className="text-slate-300">
								Test your bot directly in the browser before deploying to
								Discord. Instantly see how commands respond.
							</p>
						</div>

						{/* Feature 5 */}
						<div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 group">
							<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
								<Code size={24} />
							</div>
							<h3 className="font-poppins mb-3 text-xl font-bold text-white">
								Custom Code Support
							</h3>
							<p className="text-slate-300">
								For advanced users, easily integrate custom JavaScript code
								alongside your visual flows when needed.
							</p>
						</div>

						{/* Feature 6 */}
						<div className="rounded-lg border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 group">
							<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
								<Shield size={24} />
							</div>
							<h3 className="font-poppins mb-3 text-xl font-bold text-white">
								Version Control
							</h3>
							<p className="text-slate-300">
								Track changes and revert to previous versions of your bot.
								Collaborate safely with team members.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Workflow Section - Clean and Simple */}
			<div className="bg-[#0c1521] py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center mb-16">
						<span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-medium text-indigo-400 text-xs">
							<GitBranch size={14} className="mr-1" />
							Workflow
						</span>
						<h2 className="font-poppins mt-4 font-bold text-3xl text-slate-50 sm:text-4xl">
							How FlowCord Works
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-slate-300 text-xl">
							Create, test, and deploy your Discord bot in minutes with our
							visual flow editor.
						</p>
					</div>

					{/* Simple Step Workflow - Desktop */}
					<div className="hidden md:block">
						<div className="flex justify-between items-center mb-10">
							{/* Step 1 */}
							<div className="flex flex-col items-center">
								<div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
									1
								</div>
							</div>

							{/* Line 1-2 */}
							<div className="h-0.5 bg-blue-600 w-full mx-4"></div>

							{/* Step 2 */}
							<div className="flex flex-col items-center">
								<div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
									2
								</div>
							</div>

							{/* Line 2-3 */}
							<div className="h-0.5 bg-purple-600 w-full mx-4"></div>

							{/* Step 3 */}
							<div className="flex flex-col items-center">
								<div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
									3
								</div>
							</div>

							{/* Line 3-4 */}
							<div className="h-0.5 bg-green-600 w-full mx-4"></div>

							{/* Step 4 */}
							<div className="flex flex-col items-center">
								<div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
									4
								</div>
							</div>
						</div>

						{/* Step Descriptions */}
						<div className="flex justify-between">
							{/* Step 1 Content */}
							<div className="w-64 text-center">
								<h3 className="text-white text-lg font-bold mb-2">
									Choose Components
								</h3>
								<p className="text-slate-300 text-sm">
									Select from over 220 pre-built components designed for Discord
									bot functionality.
								</p>
							</div>

							{/* Step 2 Content */}
							<div className="w-64 text-center">
								<h3 className="text-white text-lg font-bold mb-2">
									Connect Nodes
								</h3>
								<p className="text-slate-300 text-sm">
									Drag and connect nodes to create the logic flow for your bot's
									behavior.
								</p>
							</div>

							{/* Step 3 Content */}
							<div className="w-64 text-center">
								<h3 className="text-white text-lg font-bold mb-2">
									Test Your Bot
								</h3>
								<p className="text-slate-300 text-sm">
									Test your bot's functionality in real-time directly in the
									browser before deploying.
								</p>
							</div>

							{/* Step 4 Content */}
							<div className="w-64 text-center">
								<h3 className="text-white text-lg font-bold mb-2">
									Deploy & Monitor
								</h3>
								<p className="text-slate-300 text-sm">
									One-click deployment to our cloud or your server, with full
									monitoring and analytics.
								</p>
							</div>
						</div>
					</div>

					{/* Simple Mobile Workflow */}
					<div className="md:hidden">
						<div className="space-y-12">
							{/* Step 1 */}
							<div className="flex">
								<div className="mr-4">
									<div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
										1
									</div>
									<div className="w-0.5 h-12 bg-blue-600 mx-auto mt-2"></div>
								</div>
								<div>
									<h3 className="text-white text-lg font-bold mb-1">
										Choose Components
									</h3>
									<p className="text-slate-300 text-sm">
										Select from over 220 pre-built components designed for
										Discord bot functionality.
									</p>
								</div>
							</div>

							{/* Step 2 */}
							<div className="flex">
								<div className="mr-4">
									<div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
										2
									</div>
									<div className="w-0.5 h-12 bg-indigo-600 mx-auto mt-2"></div>
								</div>
								<div>
									<h3 className="text-white text-lg font-bold mb-1">
										Connect Nodes
									</h3>
									<p className="text-slate-300 text-sm">
										Drag and connect nodes to create the logic flow for your
										bot's behavior.
									</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className="flex">
								<div className="mr-4">
									<div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
										3
									</div>
									<div className="w-0.5 h-12 bg-purple-600 mx-auto mt-2"></div>
								</div>
								<div>
									<h3 className="text-white text-lg font-bold mb-1">
										Test Your Bot
									</h3>
									<p className="text-slate-300 text-sm">
										Test your bot's functionality in real-time directly in the
										browser before deploying.
									</p>
								</div>
							</div>

							{/* Step 4 */}
							<div className="flex">
								<div className="mr-4">
									<div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
										4
									</div>
								</div>
								<div>
									<h3 className="text-white text-lg font-bold mb-1">
										Deploy & Monitor
									</h3>
									<p className="text-slate-300 text-sm">
										One-click deployment to our cloud or your server, with full
										monitoring and analytics.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="relative overflow-hidden bg-[#0c1521] py-24">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:50px_50px] opacity-25" />
				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl rounded-2xl border border-blue-500/20 bg-[#0a1018]/70 p-12 text-center backdrop-blur-sm">
						<h2 className="font-poppins text-4xl font-bold text-white mb-6">
							Ready to Build Your Bot?
						</h2>
						<p className="mx-auto mb-10 max-w-2xl text-slate-300 text-xl">
							Join thousands of creators who are building Discord bots without
							writing code. Get started today for free.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link
								href="/signup"
								className="group inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-indigo-700"
							>
								<span className="flex items-center">
									Create Your First Bot
									<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								</span>
							</Link>
							<Link
								href="/templates"
								className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-gray-800/50 px-8 py-3 font-medium text-blue-400 transition-colors hover:border-blue-500/30 hover:text-blue-300"
							>
								Browse Templates
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="border-t border-gray-800 bg-[#0a1018]">
				<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						<div>
							<h3 className="font-poppins text-sm font-semibold text-white">
								Product
							</h3>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/features"
										className="text-slate-400 hover:text-blue-400"
									>
										Features
									</Link>
								</li>
								<li>
									<Link
										href="/templates"
										className="text-slate-400 hover:text-blue-400"
									>
										Templates
									</Link>
								</li>
								<li>
									<Link
										href="/pricing"
										className="text-slate-400 hover:text-blue-400"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										href="/changelog"
										className="text-slate-400 hover:text-blue-400"
									>
										Changelog
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-poppins text-sm font-semibold text-white">
								Resources
							</h3>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/docs"
										className="text-slate-400 hover:text-blue-400"
									>
										Documentation
									</Link>
								</li>
								<li>
									<Link
										href="/tutorials"
										className="text-slate-400 hover:text-blue-400"
									>
										Tutorials
									</Link>
								</li>
								<li>
									<Link
										href="/api"
										className="text-slate-400 hover:text-blue-400"
									>
										API
									</Link>
								</li>
								<li>
									<Link
										href="/community"
										className="text-slate-400 hover:text-blue-400"
									>
										Community
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-poppins text-sm font-semibold text-white">
								Company
							</h3>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/about"
										className="text-slate-400 hover:text-blue-400"
									>
										About
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="text-slate-400 hover:text-blue-400"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="text-slate-400 hover:text-blue-400"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="text-slate-400 hover:text-blue-400"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-poppins text-sm font-semibold text-white">
								Legal
							</h3>
							<ul className="mt-4 space-y-2">
								<li>
									<Link
										href="/privacy"
										className="text-slate-400 hover:text-blue-400"
									>
										Privacy
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="text-slate-400 hover:text-blue-400"
									>
										Terms
									</Link>
								</li>
								<li>
									<Link
										href="/cookies"
										className="text-slate-400 hover:text-blue-400"
									>
										Cookies
									</Link>
								</li>
								<li>
									<Link
										href="/licenses"
										className="text-slate-400 hover:text-blue-400"
									>
										Licenses
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
						<p className="text-slate-400 text-sm">
							&copy; {new Date().getFullYear()} FlowCord. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								href="https://twitter.com"
								className="text-slate-400 hover:text-blue-400"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</Link>
							<Link
								href="https://github.com"
								className="text-slate-400 hover:text-blue-400"
							>
								<span className="sr-only">GitHub</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
							<Link
								href="https://discord.gg"
								className="text-slate-400 hover:text-blue-400"
							>
								<span className="sr-only">Discord</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
