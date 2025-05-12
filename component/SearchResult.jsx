"use client";

import Image from "next/image";

export default function SearchResult({ data }) {
	const category = data?.searchParameters?.type;

	if (!category) return null;

	if (category === "news") data = data.news;
	else if (category === "images") data = data.images;
	else if (category === "videos") data = data.videos;
	else data = data.organic;

	return (
		<div className="flex flex-col bg-[#f8f9fa] gap-y-2.5 p-2.5">
			{category !== "images" && data.length > 0
				? data.map((item, index) => (
						<a
							className=""
							key={index}
							href={item.link}
							target="_blank">
							<div className="bg-white rounded-2xl p-2.5 cursor-pointer">
								{category === "news" && (
									<p className="text-[#333333] text-xs">
										{item.date}
									</p>
								)}
								<p className="text-lg text-[#1158d6]">
									{item.title}
								</p>
								<p className="text-xs text-[#828282]">
									{item.link}
								</p>
								<p className="text-sm text-[#4f4f4f]">
									{item.snippet}
								</p>
							</div>
						</a>
				  ))
				: category !== "images" && "No result"}

			{category === "images" && (
				<div className="flex gap-4 max-w-full flex-wrap">
					{data.length > 0
						? data.map((item, index) => (
								<a
									href={item.imageUrl}
									target="_blank"
									key={index}>
									<Image
										alt="image"
										src={item.thumbnailUrl}
										height={item.thumbnailHeight}
										width={item.thumbnailWidth}
										className="w-auto"
									/>
								</a>
						  ))
						: "No images"}
				</div>
			)}
		</div>
	);
}
