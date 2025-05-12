import { Tab, TabGroup, TabList } from "@headlessui/react";

export const tabListItems = ["ALL", "IMAGES", "NEWS", "VIDEOS"];

export default function CategoryTabs({ selectedIndex, setSelectedIndex }) {
	return (
		<TabGroup
			defaultIndex={0}
			selectedIndex={selectedIndex}
			onChange={setSelectedIndex}>
			<TabList
				className="flex lg:flex-col lg:pl-8 lg:pt-4 overflow-x-auto font-bold text-xs
							 text-[#828282] space-x-4 lg:space-y-4 mt-2">
				{tabListItems.map((item, index) => (
					<Tab
						key={index}
						className="w-14 px-0.5 py-1.5 text-center lg:text-left whitespace-nowrap
								 data-selected:text-[#2f80ed] border-0 outline-none data-selected:border-b-2
								 data-selected:border-b-[#2f80ed] min-w-10 cursor-pointer">
						{item}
					</Tab>
				))}
			</TabList>
		</TabGroup>
	);
}
