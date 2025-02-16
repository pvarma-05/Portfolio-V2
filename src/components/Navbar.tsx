export const Navbar = () => {
    return (
        <div className="flex justify-center items-center sm:top-12  fixed w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#" className="font-outfit px-4 py-1.5 rounded-full text-white/70 text-sm md:text-base lg:text-lg font-medium hover:bg-white/10 hover:text-white transition duration-300" >Home</a>
                <a href="#" className="font-outfit px-4 py-1.5 rounded-full text-white/70 text-sm md:text-base lg:text-lg font-medium hover:bg-white/10 hover:text-white transition duration-300" >About</a>
                <a href="#" className="font-outfit px-4 py-1.5 rounded-full text-white/70 text-sm md:text-base lg:text-lg font-medium hover:bg-white/10 hover:text-white transition duration-300" >Projects</a>
                <a href="#" className="font-outfit px-4 py-1.5 rounded-full text-sm md:text-base lg:text-lg font-medium bg-white text-gray-900 hover:bg-white/70" >Contact</a>
            </nav>
        </div>
    )
}