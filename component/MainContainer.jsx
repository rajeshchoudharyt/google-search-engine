"use client";

import Image from "next/image";

import googleIcon from "../public/google.svg";
import SearchBar from "@/component/Searchbar";
import LocationAndWeather from "@/component/LocationAndWeather";

import { useState } from "react";

export default function MainContainer() {
	const [query, setQuery] = useState("");

	return (
		<section className="flex flex-col items-center grow pt-16 px-5 gap-y-[1.125rem] overflow-auto">
			<div className="flex flex-col w-full items-center gap-y-9">
				<Image
					alt="icon"
					src={googleIcon}
					className="w-24 h-24 lg:invisible"
				/>
				<SearchBar query={query} setQuery={setQuery} />
			</div>
			<LocationAndWeather />

			<p className="text-xs px-4 max-w-xl ">
				Google services are available in these languages:
				<a href="/" className="pl-1 text-[#4285f4]">
					polski
				</a>
			</p>
		</section>
	);
}
