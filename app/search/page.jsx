"use client";

import CategoryTabs from "@/component/CategoryTabs";
import NavHeader from "@/component/NavHeader";
import SearchBar, { search } from "@/component/Searchbar";
import SearchResult from "@/component/SearchResult";

import { redirect, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Search() {
	const params = useSearchParams();
	if (!params.get("query")) redirect("/");

	const [data, setData] = useState([]);
	const [selectedTab, setSelectedTab] = useState(0);
	const [query, setQuery] = useState(
		params.get("query") ? params.get("query") : ""
	);

	const getResult = async () => {
		const result = await search(query, selectedTab);
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
			<Suspense>
				<SearchBar
					query={query}
					setQuery={setQuery}
					setData={setData}
					selectedTab={selectedTab}
				/>
			</Suspense>
			<div className="flex max-lg:flex-col w-full">
				<div className="lg:min-w-40 lg:max-w-40">
					<CategoryTabs
						selectedIndex={selectedTab}
						setSelectedIndex={setSelectedTab}
					/>
				</div>
				<div className="">{data && <SearchResult data={data} />}</div>
			</div>
		</div>
	);
}
