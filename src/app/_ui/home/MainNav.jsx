"use client";
import { BiSolidHome, BiSolidHeart } from "react-icons/bi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import clsx from "clsx";

export default function MainNav({
	hrefs = ["/username", "/username/profile"],
}) {
	const [isClicked, setIsClicked] = useState(false);
	const pathname = usePathname();
	return (
		<div className="p-5 sticky order-last sm:order-first bg-white bottom-0 sm:top-0 sm:left-0 border-t-2 w-full sm:w-fit lg:w-[270px] sm:h-screen sm:border-r-2">
			<nav className="flex justify-between items-center sm:items-start sm:justify-start sm:flex-col sm:gap-5">
				<Logo size="hidden lg:block text-3xl" />
				<Link
					className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
					href={hrefs[0]}
					onClick={() => setIsClicked(false)}
				>
					<BiSolidHome
						className={clsx(
							"size-8 fill-none stroke-2",
							hrefs[0] === pathname && "fill-black stroke-none"
						)}
					/>
					<span
						className={clsx(
							"text-lg hidden lg:block",
							hrefs[0] === pathname && "font-bold"
						)}
					>
						Home
					</span>
				</Link>
				<button
					type="button"
					className="sm:flex items-center hidden sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
					onClick={() => setIsClicked(!isClicked)}
				>
					<BiSolidHeart
						className={clsx(
							"size-8 fill-none stroke-2",
							isClicked && "fill-black stroke-none"
						)}
					/>
					<span
						className={clsx(
							"text-lg hidden lg:block",
							isClicked && "font-bold"
						)}
					>
						Notifications
					</span>
				</button>
				<button
					className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
					onClick={() => {
						setIsClicked(false);
						document.getElementById("createPost").showModal();
					}}
				>
					<FaRegSquarePlus className="size-8" />
					<span className="text-lg hidden lg:block">Create</span>
				</button>
				<Link
					className="flex items-center gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
					href={hrefs[1]}
					onClick={() => setIsClicked(false)}
				>
					<div className="size-8 rounded-full bg-slate-400" />
					<span
						className={clsx(
							"text-lg hidden lg:block",
							hrefs[1] === pathname && "font-bold"
						)}
					>
						Profile
					</span>
				</Link>
			</nav>
		</div>
	);
}
