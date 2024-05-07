import pic from './assets/me.png';
import gmail from './assets/gmail.svg';
import linkedIn from './assets/linedIn.svg';

const MainPage = () => {
	return (
		<main className=''>
			<section>
				<header className='text-white text-5xl mt-[75px]'>
					<h1 className='font-extrabold font-sans'>
						Hi👋, I'm Michael Dragomir
					</h1>
					<h2 className='text-[28px] mt-3'>
						I am a Web developer from Los Angeles, CA.
					</h2>
				</header>
				<div className=''>
					<p className='text-white text-xl font-sans'>
						I have a keen interest in building JavaScript-based frontend
						technologies for all kinds of devices. I have mostly been working on
						Video Streaming software for the last six years. Currently, I am a
						lead engineer (P4) at Disney Streaming, on the applied R&D team
						building next-gen ad experiences.
						<p>
							I transitioned to engineering from a background in music
							performance as a classical bassist and punk/metal guitarist and
							vocalist. Outside of work, I love the outdoors and am a humble
							surfer when I’m not hanging out with my amazing wife and daughter.
						</p>
						<p>
							<br />
							If any of these things strike a chord with you say hi or let’s
							connect!
						</p>
					</p>
					<p className='text-white text-xl'>
						I joined the Disney+ web team as a senior engineer slightly more
						than a year after Disney+ was launched. Some contributions I made
						included building out the age verification system used in South
						Korea, facilitated backward incompatible API migrations, and
						produced new releases and production deployments. Tech used included
						React, NodeJS and GraphQL. The next team I joined (Content
						Discovery) built the Disney Streaming Design System. It was a fun
						project that included building a standalone multi-variant NPM
						package currently still in use. In addition to building the tool, we
						scoured every nook and cranny of the Disney+ codebase integrating
						the design system, one CSS class at a time. Tech used here was
						primarily SASS and NodeJS. More recently I’ve been fortunate enough
						to work on and lead greenfield projects covering a variety of
						codebases and platforms, including mobile and TV devices. Projects
						that I hope I can share with the world soon. Motortrend (Discovery
						Communications) 2018 - 2020 I joined Motortrend right after
						Discovery acquired the business in 2018. <br />I was the 4th hire on
						the Connected Devices team and represented JavaScript platforms.
						During my time at Motortrend, I had the privilege of working on
						Discovery’s custom TV framework that powered all their browser-based
						TVs, STBs, and gaming consoles. I built the Motortrend On Demand
						streaming app using this framework for Xbox, Android TV, FireTV,
						Comcast STBs, and Samsung. I also maintained a high traffic
						multi-variant React Native app called Buyer's Guide and Automobile.
						During this time I also supported Discovery brands like the
						Eurosport Player, Food Network Kitchen and worked on the Discovery+
						AdTech SDK (living room devices) during its development as a
						maintainer/ contributor of the core framework. <br />
						HOTB Software 2017 - 2018 HOTB Software is a software and investment
						firm that helps get startups off the ground. I was hired as a React
						Native developer and built a cross-platform iOS/Android app called
						FlipTix, a platform that "flips" time left on live event tickets. I
						architected and built the mobile app, and handled the app store
						submissions and internal enterprise distributions. Topflight Apps
						Early 2017 Topflight Apps was my first coding gig. I worked mostly
						on Wordpress sites, extending themes, improving UI or fixing bugs. I
						also migrated a MySQL database which scared me to death at the time.
						Till this day I am grateful to Joe Tuan for this opportunity, he
						took the risk and hired a self-taught dev and it changed the course
						of my life significantly. Development I enjoy building for the
						frontend. I love learning about consumer devices and the hardware
						that powers them. Building for such a variety of devices has
						ultimately made me a better developer. If you’ve built for Samsung
						2016 TVs, I’m sure you would agree 😉. <br />I use React for
						building UIs when not building for TV. I am familiar with it and its
						inner workings. I have tried building a renderer for it in Rust,
						using Netflix’s React Gibbon (C++ with a JS view layer architecture)
						as inspiration, but Rust’s memory safeness made it very difficult.
						For better or worse, I have learned a lot from React and it has
						influenced my frontend work more than any other codebase. I’ve been
						playing around with Svelte’s Repl though, and am intrigued to learn
						more. There was a time where <br />I was excited about building the
						entire stack from the ground up, but these days services like Vercel
						and Netlify make it too easy to build, deploy and manage something
						quick (for personal projects of course). I’ve used NextJS
						extensively both at Disney and in my side projects. I built
						ask-carl.com using NextJS deployed to Vercel, and my current project
						bugchain.io is built with RedwoodJS and deployed to Vercel as well.
						I have built my own self-hosted infrastructure and deployment/data
						pipelines too, mostly on AWS. Redwood is an opinionated framework
						built on React, Node, GraphQL, and Prisma and has quite literally
						reduced my coding time by half (a single command builds the REST
						endpoints, forms, and GraphQL queries for a given database model). I
						am a big fan of functional programming. I am by no means a master,
						but I apply concepts like composition, piping, and point-free in my
						work whenever possible. JavaScript’s feature of creating closures
						lends itself beautifully to the FP paradigm. I also like RxJS (and
						reactive programming in general), it is one of the best libraries
						I’ve used and extremely useful for event-driven (like video players)
						programs. Tooling-wise, I’ve been using Rollup for standalone NPM
						libraries and packages, and Vite (love it!) for applications and
						sites, but I’ve used Webpack more in production (Webpack + Yarn
						Workspaces = awesome DX). Contact If you’re looking for a solid
						frontend staff level engineer for your team or a technical
						co-founder to build an impressive MVP I’d love to connect. You can
						email me at jschuster.dev@gmail.com
					</p>
				</div>
			</section>
			<aside>
				<img src={pic} alt='pic of me' />
				<div className='flex space-x-3'>
					<img className='hover:scale-110' src={gmail} alt='' />
					<img className='hover:scale-110' src={linkedIn} alt='' />
				</div>
			</aside>
		</main>
	);
};
export default MainPage;
