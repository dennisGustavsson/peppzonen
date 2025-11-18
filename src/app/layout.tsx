import type { Metadata } from "next";
import { Lilita_One, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const lilitaOne = Lilita_One({
	variable: "--font-lilita-one",
	subsets: ["latin"],
	weight: "400",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title: "Peppzonen - Upplyftande stöd för arbetssökande",
	description:
		"En glad hemsida som hjälper dig att höja humöret efter jobbavslag med uppmuntrande citat, stödresurser, användbara tips och roliga personlighetstester.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${lilitaOne.variable} ${inter.variable} antialiased font-inter`}
			>
				{children}
			</body>
		</html>
	);
}
