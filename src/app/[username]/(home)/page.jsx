import Card from "@/app/_ui/home/Card";
import Suggested from "@/app/_ui/home/Suggested";
import MobileHeader from "@/app/_ui/home/MobileHeader";

export default function Home() {
	return (
		<>
			<MobileHeader />
			<div className="flex justify-center gap-x-20 w-full">
				<div>
					{[...Array(10)].map((_, i) => (
						<Card key={i} />
					))}
				</div>
				<Suggested />
			</div>
		</>
	);
}
