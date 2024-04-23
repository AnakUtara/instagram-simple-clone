import Link from "next/link";
import { suggested } from "@/app/_lib/placeholder-data";

export default function Suggested() {
	return (
		<div className="hidden min-[1080px]:block p-3">
			<div className="flex flex-row gap-3">
				<div>
					<img
						className="inline-block size-10 rounded-full"
						src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
						alt="foto user"
					></img>
				</div>
				<div className="text-left mr-4">
					<h3 className="text-sm text-black font-bold">Cornelia Mustika</h3>
					<p className="text-sm">Cornelia Mustika</p>
				</div>
				<div className="ml-2">
					<Link className="text-sm text-blue-500" href="">
						Switch
					</Link>
				</div>
			</div>
			<div className=" flex flex-row text-sm font-semibold text-gray-400 gap-16 mt-3 ">
				<h3 className="text-left mb-4">Suggested for you </h3>
				<Link className="mr-3" href="">
					See All
				</Link>
			</div>
			<div className="flex flex-col gap-2">
				{suggested.map((user, index) => (
					<div key={index} className=" flex flex-row gap-3 mb-2">
						<div>
							<img
								className="inline-block size-10 rounded-full object-cover"
								src={user.image}
								alt="foto user"
							/>
						</div>
						<div className="text-left text-sm mr-5">
							<h3 className="text-black font-bold">{user.name}</h3>
							<p>Suggested for you</p>
						</div>
						<div className=" mt-3">
							<Link className="text-sm text-blue-500" href="">
								Follow
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
