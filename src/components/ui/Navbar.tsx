export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">
                    MyProfile
                </a>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="text-white hover:text-gray-300">
                        Home
                    </a>
                    <a
                        href="/projects"
                        className="text-white hover:text-gray-300"
                    >
                        Projects
                    </a>
                    <a href="/about" className="text-white hover:text-gray-300">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
}
