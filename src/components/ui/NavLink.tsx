export default function NavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <a
            href={href}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={onClick}
        >
            {children}
        </a>
    );
}
