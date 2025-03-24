import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/ui/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <main>{children}</main>
                <footer className="text-center py-2 bg-gray-100">
                    © 2025 Ted Nguyen
                </footer>
            </body>
        </html>
    );
}
