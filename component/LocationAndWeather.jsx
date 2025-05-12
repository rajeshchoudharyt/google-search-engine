import Image from "next/image";

import locationIcon from "../public/location.svg";
import weatherIcon from "../public/weather.svg";

export default function LocationAndWeather() {
	return (
		<div className="flex justify-between items-center px-2 max-w-xl w-full">
			<div className="flex items-center">
				<Image src={locationIcon} alt="icon" className="h-7 w-7" />
				<p className="font-semibold text-[#011627] text-xs">
					India <br />
					<span className="font-normal text-[#8ba2b1]">
						Bengaluru, Karnataka
					</span>
				</p>
			</div>
			<div className="flex">
				<Image src={weatherIcon} alt="icon" className="h-7 w-7" />
				<p className="text-[#4285f4] text-xl">-9</p>
			</div>
		</div>
	);
}
