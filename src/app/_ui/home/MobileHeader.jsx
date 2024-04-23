import Logo from "../Logo";
import { FaHeart } from "react-icons/fa6";

export default function MobileHeader() {
	return (
		<header className="border-b-2 flex justify-between items-center w-full p-2 sticky top-0 z-50 bg-white sm:hidden">
			<Logo size="text-3xl mb-0 p-2" />
			<button
				type="button"
				className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
			>
				<FaHeart className="size-8" />
				<span className="text-lg hidden lg:block">Notifications</span>
			</button>
		</header>
	);
}
