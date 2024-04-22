"use client";
import { FaHouse, FaHeart, FaRegSquarePlus } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import clsx from "clsx";

export default function MainNav({
	hrefs = ["/username", "/username/profile"],
}) {
	const pathname = usePathname();
	return (
		<div className="p-5 order-3 sm:order-first border-t-2 w-full sm:w-fit lg:min-w-[280px] sm:h-screen sm:border-r-2">
			<nav className="flex justify-between items-center sm:items-start sm:justify-start sm:flex-col sm:gap-5">
				<Logo size="hidden lg:block text-3xl" />
				<Link
					className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
					href={hrefs[0]}
				>
					<FaHouse className="size-8" />
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
				>
					<FaHeart className="size-8" />
					<span className="text-lg hidden lg:block">Notifications</span>
				</button>
				<button className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg">
					<FaRegSquarePlus className="size-8" />
					<span className="text-lg hidden lg:block">Create</span>
				</button>
				<Link
					className="flex items-center gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
					href={hrefs[1]}
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
