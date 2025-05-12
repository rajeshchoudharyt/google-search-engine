import Image from "next/image";
import GoogleApp from "./GoogleApp";

import moreIcon from "../public/more.svg";
import googleLogo from "../public/google.svg";
import youtubeLogo from "../public/youtube.svg";
import driveLogo from "../public/drive.svg";
import mapsLogo from "../public/location.svg";
import gmailLogo from "../public/gmail.svg";
import chromeLogo from "../public/chrome.svg";
import photosLogo from "../public/photos.svg";
import earthLogo from "../public/earth.svg";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function GooglePowerups() {
	return (
		<div className="hidden md:block">
			<Popover className="relative flex">
				<PopoverButton className="outline-none cursor-pointer">
					<Image alt="icon" src={moreIcon} className="w-5 h-3.5" />
				</PopoverButton>

				<PopoverPanel
					anchor="bottom"
					className="absolute mt-8 w-72 h-96 flex flex-col items-center bg-[#f8f9fa] rounded-4xl">
					<p className="font-bold text-xl text-[#4285f4] mt-8 mb-4">
						Google Powerups
					</p>
					<hr className="h-0.5 w-full bg-[#f1f1f1] border-0 mb-12" />
					<div className="grid grid-cols-3 gap-10 mb-8">
						<GoogleApp
							key="search"
							name="Search"
							src={googleLogo}
						/>
						<GoogleApp key="maps" name="Maps" src={mapsLogo} />
						<GoogleApp
							key="photos"
							name="Photos"
							src={photosLogo}
						/>
						<GoogleApp
							key="youtube"
							name="YouTube"
							src={youtubeLogo}
						/>
						<GoogleApp key="gmail" name="Gmail" src={gmailLogo} />
						<GoogleApp key="earth" name="Earth" src={earthLogo} />
						<GoogleApp key="drive" name="Drive" src={driveLogo} />
						<GoogleApp
							key="chrome"
							name="Chrome"
							src={chromeLogo}
						/>
					</div>
					<p className="font-bold text-sm text-[#4285f4]">
						More from Google
					</p>
				</PopoverPanel>
			</Popover>
		</div>
	);
}
