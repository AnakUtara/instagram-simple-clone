import CreateModal from "../_ui/home/CreateModal";
import MainNav from "../_ui/home/MainNav";
import MobileHeader from "../_ui/home/MobileHeader";

export default function ProfileLayout({ children }) {
	return (
		<>
			<div className="flex flex-col sm:flex-row">
				<MobileHeader />
				<CreateModal />
				{children}
				<MainNav />
			</div>
		</>
	);
}
