"use client";

import Image from "next/image";
import GooglePowerups from "./GooglePowerups";

import avatar from "../public/avatar.png";
import googleLogo from "../public/google.svg";
import hamburgerIcon from "../public/hamburger.svg";

import { useState } from "react";

export default function NavHeader() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<header className="flex px-3 py-2 h-14 lg:h-[4.5rem]">
			<nav className="grid grid-cols-3 lg:grid-cols-2 w-full items-center justify-end">
				<>
					<Image
						alt="icon"
						src={hamburgerIcon}
						className="w-5 h-2.5 cursor-pointer lg:hidden"
					/>
				</>
				<>
					<Image
						alt="icon"
						src={googleLogo}
						className="w-7 h-7 cursor-pointer mx-auto lg:mx-0"
					/>
				</>
				<div className="flex justify-end items-center gap-x-4">
					<GooglePowerups />
					{isLoggedIn ? (
						<Image
							alt="icon"
							src={avatar}
							className="w-[1.875rem] h-[1.875rem] cursor-pointer"
							onClick={() => setIsLoggedIn(!isLoggedIn)}
						/>
					) : (
						<button
							className="bg-[#1a73e8] text-white px-5 py-2 whitespace-nowrap font-bold text-sm rounded-sm cursor-pointer"
							onClick={() => setIsLoggedIn(!isLoggedIn)}>
							Sign in
						</button>
					)}
				</div>
			</nav>
		</header>
	);
}
