export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow z-10">
            <ul className="flex space-x-6 p-4 justify-center">
                <li>
                    <a href="#home" className="text-blue-500 hover:underline">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-blue-500 hover:underline">
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-blue-500 hover:underline"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="text-blue-500 hover:underline"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
