import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	weight: "variable",
	style: ["italic", "normal"],
	display: "swap",
	subsets: ["latin"],
	variable: "--open-sans-font",
});

export const metadata: Metadata = {
	title: "Auto onderdelen van Winparts - Morgen thuisbezorgd",
	description:
		"Auto onderdelen bestellen op kenteken ✔ Snelle levering ✔ Onderdelen voor ruim 40.500 autotypes ✔ 24/7 bereikbaar  ✔ Gratis omruilen.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.className} h-full antialiased`}>
			<body className="">{children}</body>
		</html>
	);
}
