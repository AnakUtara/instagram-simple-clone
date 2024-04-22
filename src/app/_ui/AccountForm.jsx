import Link from "next/link";
import Logo from "./Logo";

export default function AccountForm({ children, isLogin = true }) {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-[320px] p-5">
				<center>
					<Logo />
					{children}
					<div className="relative divider">
						<span className="text-sm font-bold">OR</span>
					</div>
					<center className="text-sm">
						<p>{isLogin ? "Don't have an account?" : "Have an account?"}</p>
						<Link
							className="font-bold ml-2 text-sm text-[#1da1f2]"
							href={isLogin ? "/sign-up" : "/"}
						>
							{isLogin ? "Register" : "Login"}
						</Link>
					</center>
				</center>
			</div>
		</div>
	);
}
