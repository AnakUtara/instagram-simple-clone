import {
	BiDotsHorizontalRounded,
	BiSolidHeart,
	BiMessageRounded,
	BiPaperPlane,
	BiBookmark,
} from "react-icons/bi";
import Link from "next/link";

export default function Card() {
	return (
		<div className="card max-w-[470px] bg-base-100 border-b-2 rounded-none mb-3">
			<div className="flex justify-between items-center py-4 px-1">
				<div className="flex items-center gap-x-4">
					<div className="avatar">
						<div className="w-8 rounded-full ring ring-primary">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
					<h2 className="font-bold text-sm">username</h2>
				</div>
				<BiDotsHorizontalRounded className="size-7" />
			</div>
			<figure>
				<img
					className="w-full rounded-sm"
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div className="px-4 sm:p-0">
				<div className="flex items-center justify-between py-2">
					<div className="flex items-center gap-x-3">
						<BiSolidHeart className="size-7 fill-red-500" />
						<BiMessageRounded className="size-7" />
						<BiPaperPlane className="size-7" />
					</div>
					<BiBookmark className="size-7" />
				</div>
				<p className="text-sm">
					<Link href="/username" className="font-bold">
						username
					</Link>{" "}
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nostrum
					nulla autem velit reiciendis suscipit earum eius saepe sint,
					temporibus porro fuga, pariatur possimus itaque architecto ad rerum
					repellendus omnis?
				</p>
				<p className="text-neutral-500 no-underline cursor-pointer text-sm font-medium py-2">
					View all {"400"} comments..
				</p>
				<form className="flex justify-between items-center">
					<input
						type="text"
						placeholder="Add a comment..."
						className="outline-none focus:outline-none text-sm w-full"
					/>
					<button className="btn btn-link btn-secondary p-0 no-underline">
						Post
					</button>
				</form>
			</div>
		</div>
	);
}
