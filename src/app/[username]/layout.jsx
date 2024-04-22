import Logo from "../_ui/Logo";
import MainNav from "../_ui/MainNav";
import { inter } from "../_utils/fonts";
import { FaHeart } from "react-icons/fa6";

export default function ProfileLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body className={`${inter.className}`}>
				<div className="overflow-hidden h-screen flex flex-col sm:flex-row">
					<header className="border-b-2 order-first flex justify-between items-center w-full p-5 sticky top-0 sm:hidden">
						<Logo size="text-3xl mb-0" />
						<button
							type="button"
							className="flex items-center sm:gap-4 hover:bg-gray-300 sm:w-full p-2 rounded-lg"
						>
							<FaHeart className="size-8" />
							<span className="text-lg hidden lg:block">Notifications</span>
						</button>
					</header>
					<MainNav />
					{children}
				</div>
			</body>
		</html>
	);
}
