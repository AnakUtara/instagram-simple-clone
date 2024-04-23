import { photosData } from "@/app/_lib/placeholder-data";

export default function Photos() {
	return (
		<div className="pt-2 flex justify-center">
			<div className="grid grid-cols-3 gap-2 mb-12">
				{photosData.length ? (
					photosData.map((photo) => (
						<div key={photo.id} className="relative group">
							<img src={photo.img} className="aspect-square object-cover" />
						</div>
					))
				) : (
					<div className="mt-10 col-span-3 flex items-center justify-center">
						<p className="text-center text-2xl text-gray-500">No Posts Yet</p>
					</div>
				)}
			</div>
		</div>
	);
}
