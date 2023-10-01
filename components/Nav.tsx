const Nav = () => {
	return (
		<header className="w-[90%] mx-auto text-white">
			<nav className="flex  items-center w-full justify-between px-2 h-20">
				<div className="">
					<a className="relative group cursor-pointer">
						<span className="relative group-hover:hidden text-3xl transition-all duration-600 ">Nelson Mudanya</span>
						<span className="w-fit  text-3xl hidden group-hover:inline-block transition-all duration-600 ">Download Resume</span>
					</a>
				</div>

				<div className="flex  gap-20">
					<a className="text-3xl cursor-pointer">Home</a>
					<a className="text-3xl cursor-pointer">Resume</a>
					<a className="text-3xl cursor-pointer">Works</a>
					<a className="text-3xl cursor-pointer">Contacts</a>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
