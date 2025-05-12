"use client";

import CategoryTabs from "@/component/CategoryTabs";
import Footer from "@/component/Footer";
import NavHeader from "@/component/NavHeader";
import SearchBar, { search } from "@/component/Searchbar";
import SearchResult from "@/component/SearchResult";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
	const [data, setData] = useState([]);
	const [selectedTab, setSelectedTab] = useState(0);
	const [query, setQuery] = useState("");

	const getResult = async () => {
		const params = new URLSearchParams(location?.search);
		if (!params.get("query")) redirect("/");

		setQuery((prev) => params.get("query"));

		const result = await search(params.get("query"), selectedTab);
		setData(result);
	};

	useEffect(() => {
		getResult();
	}, []);

	useEffect(() => {
		getResult();
	}, [selectedTab]);

	return (
		<div>
			<NavHeader />
			<SearchBar
				query={query}
				setQuery={setQuery}
				setData={setData}
				selectedTab={selectedTab}
			/>
			<div className="flex max-lg:flex-col w-full">
				<div className="lg:min-w-40 lg:max-w-40">
					<CategoryTabs
						selectedIndex={selectedTab}
						setSelectedIndex={setSelectedTab}
					/>
				</div>
				<div>{data && <SearchResult data={data} />}</div>
			</div>
			<Footer />
		</div>
	);
}
