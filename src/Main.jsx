import pic from './assets/me.png';
import gmail from './assets/gmail.svg';
import linkedIn from './assets/linedIn.svg';

const MainPage = ({ experienceRef, developmentRef, contactRef, aboutRef }) => {
	return (
		<main className='flex mb-[80px] py-[80px] phone:px-[60px] lg:px-[180px]'>
			<div className='container flex flex-col'>
				<div className='mt-4 flex flex-col items-center gap-4 lg:absolute lg:right-[200px] justify-end'>
					<img
						className='rounded-lg border-4 border-sky-600 drop-shadow-[0px_2px_7px_rgba(37,99,235,0.90)]'
						src={pic}
						alt='pic of me'
						width={200}
					/>
					<div className='flex space-x-3'>
						<a href='mailto:michaeldragomir@gmail.com'>
							<img className='hover:scale-110' src={gmail} alt='gmail' />
						</a>
						<a href='https://www.linkedin.com/in/michaeldragomir/'>
							<img className='hover:scale-110' src={linkedIn} alt='linkedIn' />
						</a>
					</div>
				</div>
				<div className='prose prose-gray max-w-none text-gray-200 flex flex-col md:w-[74%]'>
					<h1
						ref={aboutRef}
						className='sm:text-[40px] font-semibold phone:text-[30px] phone:mt-4'
					>
						Hi👋, I'm Michael Dragomir
					</h1>
					<h2 className='mb-8 phone:text-[18px] sm:text-[24px] font-semibold text-gray-400'>
						I'm a Web developer living in Los Angeles, CA.
					</h2>
					<div className='flex flex-col items-center'>
						<section>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								I have a keen interest in building full stack technologies, love
								putting my skills to good use through open source contributions
								with companies making a true difference in this world.
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								I transitioned to engineering from a background in music
								performance as a classical bassist and punk/metal guitarist and
								vocalist. Outside of work, I love the outdoors and am a humble
								surfer when I’m not hanging out with my amazing wife and twin
								daughters.
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								If any of these things strike a chord with you say hi or let’s
								connect!
							</p>
						</section>
						<div className='mt-[40px]'></div>
						<div className='flex mt-[24px] mb-[12px] p-[8px] rounded-full text-[12px] border border-gray-300 items-center self-start'>
							<div className='h-[6px] w-[6px] rounded-full bg-green-400 mr-[4px]'></div>
							<span ref={experienceRef}>Experience</span>
						</div>
						<section>
							<div className='mt-[8px]'>
								<h3 className='text-[24px] font-bold'>Coding Temple</h3>
								<span className='text-[14px] font-semibold text-gray-400'>
									2023-present
								</span>
								<p>
									Over the years, I've had the chance to work with some amazing
									teams and // collaborate with talented individuals from all
									over the world. I've // learned a lot along the way, and I'm
									always eager to continue expanding // my knowledge and skills.
									Whether it's exploring new programming // languages, diving
									into the latest frameworks and technologies, or // tackling
									complex technical challenges, I'm always up for a new
									adventure.
								</p>
								<p>
									When I'm not coding, you can find me exploring the great
									outdoors, // reading a good book, or trying my hand at a new
									hobby. I'm a passionate // traveler, and I love to immerse
									myself in different cultures and learn // about the world
									around me. I'm also an avid photographer, and I enjoy //
									capturing the beauty of the natural world through my lens.
								</p>
								<p>
									Overall, I'm a curious and driven individual who is always
									striving to // learn and grow. I'm excited to connect with
									others who share my passion // for technology and innovation,
									and I look forward to collaborating on // exciting new
									projects in the future.
								</p>
								<p className='mt-4 tracking-[.04em] text-[17px]'>
									Now, I'm a career coach, mentor, and educator at Coding
									Temple, where I guide aspiring developers on their own coding
									journeys. I believe that strong technical skills are just one
									piece of the puzzle;
								</p>
								<p className='mt-4 tracking-[.04em] text-[17px]'>
									Now, I'm a career coach, mentor, and educator at Coding
									Temple, where I guide aspiring developers on their own coding
									journeys. I believe that strong technical skills are just one
									piece of the puzzle;
								</p>
								<p className='mt-4 tracking-[.04em] text-[17px]'>
									I'm driven by a desire to empower others to achieve their full
									potential. As a career coach and mentor, I combine my
									technical expertise with insightful guidance, helping
									individuals navigate the tech industry and craft fulfilling
									careers. I'm passionate about fostering growth mindsets,
									cultivating technical skills, and unlocking hidden talents.
								</p>
							</div>
							<div className='mt-[20px]'>
								<h3 className='text-[24px] font-bold'>
									Motortrend (Warner Bros. Discovery)
								</h3>
								<span className='text-[14px] font-semibold text-gray-400'>
									2019-2023
								</span>
							</div>
							<div className='mt-[20px]'>
								<h3 className='text-[24px] font-bold'>
									UCLA extension program
								</h3>
								<span className='text-[14px] font-semibold text-gray-400'>
									2018-2019
								</span>
							</div>
						</section>
						<div className='flex mt-[24px] mb-[12px] p-[8px] rounded-full text-[12px] border border-gray-300 items-center self-start'>
							<div className='h-[6px] w-[6px] rounded-full bg-yellow-400 mr-[4px]'></div>
							<span ref={developmentRef}>Development</span>
						</div>
						<section>
							<p>
								When I'm not coding, you can find me exploring the great
								outdoors, // reading a good book, or trying my hand at a new
								hobby. I'm a passionate // traveler, and I love to immerse
								myself in different cultures and learn // about the world around
								me. I'm also an avid photographer, and I enjoy // capturing the
								beauty of the natural world through my lens.
							</p>
							<p>
								Overall, I'm a curious and driven individual who is always
								striving to // learn and grow. I'm excited to connect with
								others who share my passion // for technology and innovation,
								and I look forward to collaborating on // exciting new projects
								in the future.
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								Now, I'm a career coach, mentor, and educator at Coding Temple,
								where I guide aspiring developers on their own coding journeys.
								I believe that strong technical skills are just one piece of the
								puzzle;
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								Now, I'm a career coach, mentor, and educator at Coding Temple,
								where I guide aspiring developers on their own coding journeys.
								I believe that strong technical skills are just one piece of the
								puzzle;
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								Now, I'm a career coach, mentor, and educator at Coding Temple,
								where I guide aspiring developers on their own coding journeys.
								I believe that strong technical skills are just one piece of the
								puzzle;
							</p>
						</section>
						<div className='flex mt-[24px] mb-[12px] p-[8px] rounded-full text-[12px] border border-gray-300 items-center self-start'>
							<div className='h-[6px] w-[6px] rounded-full bg-blue-400 mr-[4px]'></div>
							<span ref={contactRef}>Contact</span>
						</div>
						<section>
							<p>
								When I'm not coding, you can find me exploring the great
								outdoors, // reading a good book, or trying my hand at a new
								hobby. I'm a passionate // traveler, and I love to immerse
								myself in different cultures and learn // about the world around
								me. I'm also an avid photographer, and I enjoy // capturing the
								beauty of the natural world through my lens.
							</p>
							<p>
								Overall, I'm a curious and driven individual who is always
								striving to // learn and grow. I'm excited to connect with
								others who share my passion // for technology and innovation,
								and I look forward to collaborating on // exciting new projects
								in the future.
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								Now, I'm a career coach, mentor, and educator at Coding Temple,
								where I guide aspiring developers on their own coding journeys.
								I believe that strong technical skills are just one piece of the
								puzzle;
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								Now, I'm a career coach, mentor, and educator at Coding Temple,
								where I guide aspiring developers on their own coding journeys.
								I believe that strong technical skills are just one piece of the
								puzzle;
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								Now, I'm a career coach, mentor, and educator at Coding Temple,
								where I guide aspiring developers on their own coding journeys.
								I believe that strong technical skills are just one piece of the
								puzzle;
							</p>
							<p className='mt-4 tracking-[.04em] text-[17px]'>
								I'm always eager to connect with fellow developers or aspiring
								tech professionals. If you’re looking for a solid frontend staff
								level engineer for your team or a technical co-founder to build
								an impressive MVP I’d love to connect. You can email me at{' '}
								<a
									href='mailto:michaeldragomir@gmail.com'
									className='text-violet-400 active:text-violet-700'
								>
									michaeldragomir@gmail.com
								</a>
							</p>
						</section>
						<p>
							I am a full-stack software engineer with a knack for turning lines
							of code into engaging user experiences. My journey started at
							Motortrend, where I worked with amazing engineers building web
							applications and services for a high-traffic platform. We served
							two million unique weekly viewers. I thrived on the challenges of
							developing robust systems, from building streaming applications to
							working on multi-variant React apps. But my passion for sharing
							knowledge and empowering others led me down a new path.
						</p>
						<p>
							Now, I'm a career coach, mentor, and educator at Coding Temple,
							where I guide aspiring developers on their own coding journeys. I
							believe that strong technical skills are just one piece of the
							puzzle; a successful career also requires effective communication,
							problem-solving, and a growth mindset. I'm dedicated to fostering
							these qualities in my students, drawing from my own diverse
							experiences in the tech industry.
						</p>
						<p>
							Outside of coding and coaching, I'm a lifelong learner with an
							entrepreneurial spirit. I constantly seek out new knowledge,
							whether it's delving into the latest tech trends or exploring a
							new hobby. My diverse interests include playing music, staying
							active, reading, and spending quality time with my family.
						</p>
						{/* TALK ABOUT THE PROJECTS YOU'RE WORKING ON.  LOOK AT JOHAN'S SITE. BREAK IT DOWN INTO SECTIONS. Resume STYLE.  break them up in sections.*/}
					</div>
				</div>
			</div>
		</main>
	);
};
export default MainPage;

// <main className=''>
// 	<section>
// 		<header className='text-white text-5xl mt-[75px]'>
// 			<h1 className='font-extrabold font-sans'>
// 				Hi👋, I'm Michael Dragomir
// 			</h1>
// 			<h2 className='text-[28px] mt-3'>
// 				I am a Web developer from Los Angeles, CA.
// 			</h2>
// 		</header>
// 		<div className=''>
// 			<p className='text-white text-xl font-sans'>
// 				I have a keen interest in building Full Stack applications. Most
// 				recently, I've been focused on Node.js and JavaScript-based frontend
// 				technologies for all kinds of devices. Currently, I work at a coding
// 				bootcamp as a coding mentor, educator and career coach helping
// 				others achieve their goals and aspirations to work in this exciting
// 				and dynamic field.
// 				<p>
// 					I transitioned to engineering from a background in entertainment
// 					where I worked as a talent manager in Hollywood. I have an
// 					ENTREPRENEURIAL spirit, still believe in the Ameirican Dream and
// 					always strive to be a better version of myself. When not coding or
// 					helping others, I spend time with my family, read, play music and
// 					live an active lifestyle.
// 				</p>
// 				<p>
// 					<br />
// 					If any of these things strike a chord with you say hi or let’s
// 					connect!
// 				</p>
// 			</p>
// 			<p className='text-white text-xl'>
// 				I joined the Disney+ web team as a senior engineer slightly more
// 				than a year after Disney+ was launched. Some contributions I made
// 				included building out the age verification system used in South
// 				Korea, facilitated backward incompatible API migrations, and
// 				produced new releases and production deployments. Tech used included
// 				React, NodeJS and GraphQL. The next team I joined (Content
// 				Discovery) built the Disney Streaming Design System. It was a fun
// 				project that included building a standalone multi-variant NPM
// 				package currently still in use. In addition to building the tool, we
// 				scoured every nook and cranny of the Disney+ codebase integrating
// 				the design system, one CSS class at a time. Tech used here was
// 				primarily SASS and NodeJS. More recently I’ve been fortunate enough
// 				to work on and lead greenfield projects covering a variety of
// 				codebases and platforms, including mobile and TV devices. Projects
// 				that I hope I can share with the world soon. Motortrend (Discovery
// 				Communications) 2018 - 2020 I joined Motortrend right after
// 				Discovery acquired the business in 2018. <br />I was the 4th hire on
// 				the Connected Devices team and represented JavaScript platforms.
// 				During my time at Motortrend, I had the privilege of working on
// 				Discovery’s custom TV framework that powered all their browser-based
// 				TVs, STBs, and gaming consoles. I built the Motortrend On Demand
// 				streaming app using this framework for Xbox, Android TV, FireTV,
// 				Comcast STBs, and Samsung. I also maintained a high traffic
// 				multi-variant React Native app called Buyer's Guide and Automobile.
// 				During this time I also supported Discovery brands like the
// 				Eurosport Player, Food Network Kitchen and worked on the Discovery+
// 				AdTech SDK (living room devices) during its development as a
// 				maintainer/ contributor of the core framework. <br />
// 				HOTB Software 2017 - 2018 HOTB Software is a software and investment
// 				firm that helps get startups off the ground. I was hired as a React
// 				Native developer and built a cross-platform iOS/Android app called
// 				FlipTix, a platform that "flips" time left on live event tickets. I
// 				architected and built the mobile app, and handled the app store
// 				submissions and internal enterprise distributions. Topflight Apps
// 				Early 2017 Topflight Apps was my first coding gig. I worked mostly
// 				on Wordpress sites, extending themes, improving UI or fixing bugs. I
// 				also migrated a MySQL database which scared me to death at the time.
// 				Till this day I am grateful to Joe Tuan for this opportunity, he
// 				took the risk and hired a self-taught dev and it changed the course
// 				of my life significantly. Development I enjoy building for the
// 				frontend. I love learning about consumer devices and the hardware
// 				that powers them. Building for such a variety of devices has
// 				ultimately made me a better developer. If you’ve built for Samsung
// 				2016 TVs, I’m sure you would agree 😉. <br />I use React for
// 				building UIs when not building for TV. I am familiar with it and its
// 				inner workings. I have tried building a renderer for it in Rust,
// 				using Netflix’s React Gibbon (C++ with a JS view layer architecture)
// 				as inspiration, but Rust’s memory safeness made it very difficult.
// 				For better or worse, I have learned a lot from React and it has
// 				influenced my frontend work more than any other codebase. I’ve been
// 				playing around with Svelte’s Repl though, and am intrigued to learn
// 				more. There was a time where <br />I was excited about building the
// 				entire stack from the ground up, but these days services like Vercel
// 				and Netlify make it too easy to build, deploy and manage something
// 				quick (for personal projects of course). I’ve used NextJS
// 				extensively both at Disney and in my side projects. I built
// 				ask-carl.com using NextJS deployed to Vercel, and my current project
// 				bugchain.io is built with RedwoodJS and deployed to Vercel as well.
// 				I have built my own self-hosted infrastructure and deployment/data
// 				pipelines too, mostly on AWS. Redwood is an opinionated framework
// 				built on React, Node, GraphQL, and Prisma and has quite literally
// 				reduced my coding time by half (a single command builds the REST
// 				endpoints, forms, and GraphQL queries for a given database model). I
// 				am a big fan of functional programming. I am by no means a master,
// 				but I apply concepts like composition, piping, and point-free in my
// 				work whenever possible. JavaScript’s feature of creating closures
// 				lends itself beautifully to the FP paradigm. I also like RxJS (and
// 				reactive programming in general), it is one of the best libraries
// 				I’ve used and extremely useful for event-driven (like video players)
// 				programs. Tooling-wise, I’ve been using Rollup for standalone NPM
// 				libraries and packages, and Vite (love it!) for applications and
// 				sites, but I’ve used Webpack more in production (Webpack + Yarn
// 				Workspaces = awesome DX). Contact If you’re looking for a solid
// 				frontend staff level engineer for your team or a technical
// 				co-founder to build an impressive MVP I’d love to connect. You can
// 				email me at{' '}
// 				<a
// 					href='mailto:michaeldragomir@gmail.com'
// 					className='text-violet-400 active:text-violet-700'
// 				>
// 					michaeldragomir@gmail.com
// 				</a>
// 			</p>
// 		</div>
// 	</section>
// 	<aside>
// 		<img src={pic} alt='pic of me' width={200} />
// 		<div className='flex space-x-3'>
// 			<img className='hover:scale-110' src={gmail} alt='' />{' '}
// 			{/* add email linl */}
// 			<img className='hover:scale-110' src={linkedIn} alt='' />{' '}
// 			{/* add linkedIn linl */}
// 		</div>
// 	</aside>
// </main>;

// <main className='pt-36 pb-12 md:pt-40 md:pb-16 lg:pt-44 lg:pb-24 absolute'>
// 	<div className='mt-4 flex flex-col items-center gap-4 mt fixed'>
// 		<img
// 			className='rounded-lg border-4 border-sky-600'
// 			src={pic}
// 			alt='pic of me'
// 			width={200}
// 		/>
// 		<div className='flex space-x-3'>
// 			<a href='mailto:michaeldragomir@gmail.com'>
// 				<img className='hover:scale-110' src={gmail} alt='gmail' />
// 			</a>
// 			<a href='https://www.linkedin.com/in/michaeldragomir/'>
// 				<img className='hover:scale-110' src={linkedIn} alt='linkedIn' />
// 			</a>
// 		</div>
// 	</div>
// 	<div className='container grid mx-auto lg:grid-cols-[300px_1fr] md:grid-cols-none lg:pr-12'>
// 		<div className='prose prose-gray mx-auto max-w-none text-gray-300'>
// 			<h1 className='text-[40px] font-semibold'>Hi👋, I'm Michael Dragomir,</h1>
// 			<h2 className='mb-8 text-[24px] font-semibold text-gray-400'>
// 				I am a Web developer from Los Angeles, CA.
// 			</h2>
// 			<p>
// 				A passionate software engineer with a diverse background and a wide
// 				range of interests. I've been working in the tech industry for over a
// 				decade, and during that time, I've had the opportunity to work on a
// 				variety of projects, from web applications to mobile apps and everything
// 				in between.
// 			</p>
// 			<p>
// 				My journey in the world of technology began when I was just a kid,
// 				tinkering with computers and learning to code. I've always been
// 				fascinated by the way technology can be used to solve problems and
// 				improve people's lives. That's why I decided to pursue a career in
// 				software engineering, where I could put my problem-solving skills and
// 				creativity to the test.
// 			</p>
// 			<p>
// 				Over the years, I've had the chance to work with some amazing teams and
// 				collaborate with talented individuals from all over the world. I've
// 				learned a lot along the way, and I'm always eager to continue expanding
// 				my knowledge and skills. Whether it's exploring new programming
// 				languages, diving into the latest frameworks and technologies, or
// 				tackling complex technical challenges, I'm always up for a new
// 				adventure.
// 			</p>
// 			<p>
// 				When I'm not coding, you can find me exploring the great outdoors,
// 				reading a good book, or trying my hand at a new hobby. I'm a passionate
// 				traveler, and I love to immerse myself in different cultures and learn
// 				about the world around me. I'm also an avid photographer, and I enjoy
// 				capturing the beauty of the natural world through my lens.
// 			</p>
// 			<p>
// 				Overall, I'm a curious and driven individual who is always striving to
// 				learn and grow. I'm excited to connect with others who share my passion
// 				for technology and innovation, and I look forward to collaborating on
// 				exciting new projects in the future.
// 			</p>
// 			<p>
// 				Hi there! I'm John Doe, a passionate software engineer with a diverse
// 				background and a wide range of interests. I've been working in the tech
// 				industry for over a decade, and during that time, I've had the
// 				opportunity to work on a variety of projects, from web applications to
// 				mobile apps and everything in between.
// 			</p>
// 			<p>
// 				My journey in the world of technology began when I was just a kid,
// 				tinkering with computers and learning to code. I've always been
// 				fascinated by the way technology can be used to solve problems and
// 				improve people's lives. That's why I decided to pursue a career in
// 				software engineering, where I could put my problem-solving skills and
// 				creativity to the test.
// 			</p>
// 			<p>
// 				Over the years, I've had the chance to work with some amazing teams and
// 				collaborate with talented individuals from all over the world. I've
// 				learned a lot along the way, and I'm always eager to continue expanding
// 				my knowledge and skills. Whether it's exploring new programming
// 				languages, diving into the latest frameworks and technologies, or
// 				tackling complex technical challenges, I'm always up for a new
// 				adventure.
// 			</p>
// 			<p>
// 				When I'm not coding, you can find me exploring the great outdoors,
// 				reading a good book, or trying my hand at a new hobby. I'm a passionate
// 				traveler, and I love to immerse myself in different cultures and learn
// 				about the world around me. I'm also an avid photographer, and I enjoy
// 				capturing the beauty of the natural world through my lens.
// 			</p>
// 			<p>
// 				Overall, I'm a curious and driven individual who is always striving to
// 				learn and grow. I'm excited to connect with others who share my passion
// 				for technology and innovation, and I look forward to collaborating on
// 				exciting new projects in the future.
// 			</p>
// 			<p>
// 				Hi there! I'm John Doe, a passionate software engineer with a diverse
// 				background and a wide range of interests. I've been working in the tech
// 				industry for over a decade, and during that time, I've had the
// 				opportunity to work on a variety of projects, from web applications to
// 				mobile apps and everything in between.
// 			</p>
// 			<p>
// 				My journey in the world of technology began when I was just a kid,
// 				tinkering with computers and learning to code. I've always been
// 				fascinated by the way technology can be used to solve problems and
// 				improve people's lives. That's why I decided to pursue a career in
// 				software engineering, where I could put my problem-solving skills and
// 				creativity to the test.
// 			</p>
// 			<p>
// 				Over the years, I've had the chance to work with some amazing teams and
// 				collaborate with talented individuals from all over the world. I've
// 				learned a lot along the way, and I'm always eager to continue expanding
// 				my knowledge and skills. Whether it's exploring new programming
// 				languages, diving into the latest frameworks and technologies, or
// 				tackling complex technical challenges, I'm always up for a new
// 				adventure.
// 			</p>
// 			<p>
// 				When I'm not coding, you can find me exploring the great outdoors,
// 				reading a good book, or trying my hand at a new hobby. I'm a passionate
// 				traveler, and I love to immerse myself in different cultures and learn
// 				about the world around me. I'm also an avid photographer, and I enjoy
// 				capturing the beauty of the natural world through my lens.
// 			</p>
// 			<p>
// 				Overall, I'm a curious and driven individual who is always striving to
// 				learn and grow. I'm excited to connect with others who share my passion
// 				for technology and innovation, and I look forward to collaborating on
// 				exciting new projects in the future.
// 			</p>
// 			<p>
// 				Hi there! I'm John Doe, a passionate software engineer with a diverse
// 				background and a wide range of interests. I've been working in the tech
// 				industry for over a decade, and during that time, I've had the
// 				opportunity to work on a variety of projects, from web applications to
// 				mobile apps and everything in between.
// 			</p>
// 			<p>
// 				My journey in the world of technology began when I was just a kid,
// 				tinkering with computers and learning to code. I've always been
// 				fascinated by the way technology can be used to solve problems and
// 				improve people's lives. That's why I decided to pursue a career in
// 				software engineering, where I could put my problem-solving skills and
// 				creativity to the test.
// 			</p>
// 			<p>
// 				Over the years, I've had the chance to work with some amazing teams and
// 				collaborate with talented individuals from all over the world. I've
// 				learned a lot along the way, and I'm always eager to continue expanding
// 				my knowledge and skills. Whether it's exploring new programming
// 				languages, diving into the latest frameworks and technologies, or
// 				tackling complex technical challenges, I'm always up for a new
// 				adventure.
// 			</p>
// 			<p>
// 				When I'm not coding, you can find me exploring the great outdoors,
// 				reading a good book, or trying my hand at a new hobby. I'm a passionate
// 				traveler, and I love to immerse myself in different cultures and learn
// 				about the world around me. I'm also an avid photographer, and I enjoy
// 				capturing the beauty of the natural world through my lens.
// 			</p>
// 			<p>
// 				Overall, I'm a curious and driven individual who is always striving to
// 				learn and grow. I'm excited to connect with others who share my passion
// 				for technology and innovation, and I look forward to collaborating on
// 				exciting new projects in the future. You can email me at{' '}
// 				<a
// 					href='mailto:michaeldragomir@gmail.com'
// 					className='text-violet-400 active:text-violet-700'
// 				>
// 					michaeldragomir@gmail.com
// 				</a>
// 			</p>
// 		</div>
// 	</div>
// </main>;
