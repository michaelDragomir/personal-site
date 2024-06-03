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
