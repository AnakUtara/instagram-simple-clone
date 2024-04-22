import MainNav from "../_ui/home/MainNav";
import MobileHeader from "../_ui/home/MobileHeader";
import { inter } from "../_utils/fonts";

export default function ProfileLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body className={`${inter.className}`}>
				<div className="overflow-hidden h-screen flex flex-col sm:flex-row">
					<MobileHeader />
					<MainNav />
					{children}
				</div>
			</body>
		</html>
	);
}
