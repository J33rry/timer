import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
    variable: "--font-red-hat-text",
    subsets: ["latin"],
    weight: ["700"],
});

export const metadata = {
    title: "Clockz",
    description: "Flip-Clock",
    icons: {
        icon: "./favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${redHatText.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
