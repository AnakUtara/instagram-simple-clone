import CreateModal from "../_ui/home/CreateModal";
import MainNav from "../_ui/home/MainNav";

export default function ProfileLayout({ children }) {
	return (
		<div className="flex flex-col sm:flex-row">
			<CreateModal />
			{children}
			<MainNav />
		</div>
	);
}
