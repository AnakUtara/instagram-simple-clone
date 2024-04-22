import Card from "@/app/_ui/home/Card";

export default function Home() {
	return (
		<div className="flex order-2 justify-center w-full h-screen overflow-y-scroll">
			<div>
				{[...Array(5)].map((_, i) => (
					<Card key={i} />
				))}
			</div>
		</div>
	);
}
