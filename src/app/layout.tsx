// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/ui/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <NavBar />
                </header>
                <main>{children}</main>
                <footer className="text-center py-2 bg-gray-100">
                    © 2025 Ted Nguyen
                </footer>
            </body>
        </html>
    );
}
