import Card from "@/app/_ui/home/Card";

export default function Home() {
	return (
		<div className="flex justify-center w-full">
			<div>
				{[...Array(10)].map((_, i) => (
					<Card key={i} />
				))}
			</div>
		</div>
	);
}
