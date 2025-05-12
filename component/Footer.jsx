import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Footer() {
	return (
		<footer
			className={`relative bottom-0 w-full bg-[#f2f2f2] text-sm text-[#8ba2b1] gap-y-1 
								flex flex-col items-center py-1 ${roboto.className}`}>
			<ul className="flex gap-x-7 py-1 px-2">
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a href="/">Advertising</a>
				</li>
				<li>
					<a href="/">Business</a>
				</li>
			</ul>
			<hr className="w-full h-0 text-[#dadada]" />
			<ul className="flex gap-x-7 py-1 px-2">
				<li>
					<a href="/">Privacy</a>
				</li>
				<li>
					<a href="/">Terms</a>
				</li>
				<li>
					<a href="/">Settings</a>
				</li>
			</ul>
		</footer>
	);
}
