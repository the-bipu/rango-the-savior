import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from '@/context/userContext.js';
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Rango",
    description: `Rango – The Savior;`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <UserProvider>
                    <Toaster />
                    {children}
                </UserProvider>
            </body>
        </html>
    );
}
