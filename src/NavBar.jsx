const NavBar = () => {
	const NavItems = ['about', 'experience', 'development', 'contact'];
	return (
		<div className='uppercase flex justify-center space-x-6 bg-blue-600 rounded-full w-[35rem] mt-8 drop-shadow-[0px_2px_7px_rgba(37,99,235,0.90)]'>
			{NavItems.map((item) => (
				<div className='text-white font-sans p-2 cursor-pointer tracking-[.08em]'>
					{item}
				</div>
			))}
		</div>
	);
};
export default NavBar;
