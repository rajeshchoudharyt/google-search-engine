"use client";

import Image from "next/image";

import searchIcon from "../public/search.svg";
import cameraIcon from "../public/camera.svg";
import microphoneIcon from "../public/microphone.svg";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { Input } from "@headlessui/react";

import { tabListItems } from "./CategoryTabs";

export default function SearchBar(
	{ query, setQuery, setData = () => {} },
	selectedTab = 0
) {
	const ref = useRef();
	const path = usePathname();
	const router = useRouter();

	const handleSearch = async (e) => {
		e.preventDefault();
		if (path === "/") redirect("/search?query=" + query);

		if (query.trim() === "") return;

		const data = await search(query, selectedTab);
		if (data) {
			router.replace("/search?query=" + query);
			setData(data);
		}
	};

	return (
		<div
			className="lg:absolute lg:top-0 lg:left-40 flex items-center max-w-xl w-full h-12 p-3 gap-x-1 border-[1px]
					 border-[#dfe1e5] rounded-full m-3">
			<Image
				src={searchIcon}
				alt="icon"
				className="h-5 w-5 hover:cursor-pointer"
				onClick={() => ref.current.focus()}
			/>

			<form onSubmit={(e) => handleSearch(e)} className="w-full">
				<Input
					name="search_query"
					type="text"
					className="w-full px-2 py-1 text-sm leading-3 outline-none"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					ref={ref}
					required
					minLength={1}
				/>
			</form>
			<Image
				src={microphoneIcon}
				alt="icon"
				className="h-5 w-5 hover:cursor-pointer"
			/>
			<Image
				src={cameraIcon}
				alt="icon"
				className="h-5 w-5 hover:cursor-pointer"
			/>
		</div>
	);
}

const headers = new Headers();
headers.append("X-API-KEY", "9298f78137aeca11aab0e884a92853073bf0bb5e");
headers.append("Content-Type", "application/json");

export async function search(query = "", selectedTab) {
	const category = tabListItems[selectedTab];
	let endpoint = "search";

	if (category === "IMAGES") endpoint = "images";
	else if (category === "NEWS") endpoint = "news";
	else if (category === "VIDEOS") endpoint = "videos";

	try {
		const response = await fetch(`https://google.serper.dev/${endpoint}`, {
			method: "POST",
			headers,
			body: JSON.stringify({ q: query }),
		});
		const result = await response.json();
		console.log(endpoint, result);
		return result ? result : null;
		//
	} catch (error) {
		console.error(error);
	}
	return null;
}
