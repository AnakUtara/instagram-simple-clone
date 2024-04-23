import Header from "@/app/_ui/profile/Header";
import PhotoGrid from "@/app/_ui/profile/PhotoGrid";

export default function UserProfile() {
	return (
		<div className="flex justify-center w-full">
			<div className="max-w-5xl md:p-7">
				<Header />
				<PhotoGrid />
			</div>
		</div>
	);
}
