import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Google search engine",
	description: "A clone of google search engine.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${ptSans.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
