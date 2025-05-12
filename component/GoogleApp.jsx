import Image from "next/image";

export default function GoogleApp({ src, name }) {
	return (
		<a
			className="flex flex-col justify-end items-center w-7 h-7 text-[#011627] text-xs gap-1"
			href="/">
			<Image alt="logo" src={src} className="object-contain" />
			<p>{name}</p>
		</a>
	);
}
