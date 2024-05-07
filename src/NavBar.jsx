const NavBar = () => {
	const NavItems = ['About', 'Experience', 'Development', 'Contact'];
	return (
		<div className='flex justify-center space-x-6 bg-blue-600 rounded-full w-[28rem] mt-8 drop-shadow-[0px_2px_7px_rgba(37,99,235,0.90)] p-2'>
			{NavItems.map((item) => (
				<div className='text-white font-sans cursor-pointer font-semibold tracking-[.08em]'>
					{item}
				</div>
			))}
		</div>
	);
};
export default NavBar;
