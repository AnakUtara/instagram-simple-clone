import { instaUser } from "@/app/_lib/placeholder-data";
import { IoIosSettings, IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	const profile = instaUser;
	const postCount = profile.post;
	const followerCount = profile.followers;
	const followingCount = profile.following;
	const bio = profile.bio;
	const fullName = profile.fullName;
	const userName = profile.userName;
	const followed = profile.followedBy;
	const ava = profile.ava
		? profile.ava
		: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";

	const isOwnProfile = instaUser.userName === profile.userName;
	const infoTabData = [
		{ type: "posts", value: postCount },
		{ type: "followers", value: followerCount },
		{ type: "following", value: followingCount },
	];

	return (
		<>
			{/* mobile toolbar */}
			<div className="flex sticky top-0 bg-white z-50 border-b w-full h-10 md:hidden justify-between px-8 items-center ">
				{isOwnProfile ? (
					<>
						<p className="text-2xl">
							<IoIosSettings />
						</p>
						<p className="font-semibold text-md flex items-center gap-1">
							<span>{userName}</span>
							<span className="text-gray-400">
								{" "}
								<IoIosArrowDown />
							</span>
						</p>
						<p className="text-xl">
							<FaThreads />
						</p>
					</>
				) : (
					<>
						<Link href={"/username"} className="text-2xl">
							<IoIosArrowBack />
						</Link>
						<p className="font-semibold text-md">{userName}</p>
					</>
				)}
			</div>

			<div className="flex w-full justify-center items-center md:gap-10 gap-5 p-3 md:pt-0 ">
				<Image
					width={169}
					height={169}
					className="rounded-full aspect-square size-24 md:size-40 lg:size-44 object-cover border-1 border-grey"
					src={
						"https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					}
					alt={`${userName}'s avatar`}
				/>
				<div className="flex justify-center flex-col gap-2 md:gap-4">
					<div className="flex flex-col md:flex-row md:items-center gap-2">
						<p className="text-lg">{userName}</p>
						<div className="flex gap-1">
							<button className="btn btn-xs sm:btn-sm">
								{isOwnProfile ? "Edit profile" : "Follow"}
							</button>
							<button className="btn btn-xs sm:btn-sm">
								{isOwnProfile ? "View archive" : "Message"}
							</button>
						</div>
					</div>
					<div className="hidden md:flex">
						{infoTabData.map((info, i) => (
							<p key={i} className="mr-10">
								<span className="font-bold">{info.value.toString()}</span>{" "}
								{info.type}
							</p>
						))}
					</div>

					<div className="text-xs md:text-sm">
						<p className="font-bold">{fullName}</p>
						<p className="font-normal">{bio}</p>
					</div>

					{!isOwnProfile && (
						<div className="container mt-4 text-xs hidden md:block">
							<p className="font-normal">
								<span className="text-gray-500">Followed by</span>
								<span className="font-semibold"> {followed}</span>
								<span className="text-gray-500"> +84 more</span>
							</p>
						</div>
					)}
				</div>
			</div>

			<div className="divider my-0" />

			{/* mobile info tab  */}
			<div className="flex items-center text-xs w-full justify-center gap-16 md:hidden">
				{infoTabData.map((info, i) => (
					<div key={i} className="flex flex-col justify-center items-center">
						<p className="font-bold">{info.value.toString()}</p>
						<p className="text-gray-500">{info.type}</p>
					</div>
				))}
			</div>

			<hr className="mt-2 p-0 mb-0 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 md:hidden" />
		</>
	);
}
