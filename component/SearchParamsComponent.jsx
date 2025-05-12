"use client";

import { redirect, useSearchParams } from "next/navigation";

export default function SearchParamsComponent({ setQuery }) {
	const params = useSearchParams();
	if (!params.get("query")) redirect("/");

	return null;
}
