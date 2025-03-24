// src/components/ui/Card.tsx
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="border border-gray-200 p-4 rounded-lg shadow-md mb-4">
            {children}
        </div>
    );
}
