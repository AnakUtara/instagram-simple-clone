import AccountForm from "../_ui/login/AccountForm";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignUp() {
	return (
		<AccountForm isLogin={false}>
			<form className="flex flex-col gap-5">
				<input
					className="input input-bordered input-info input-md"
					placeholder="E-mail"
					name="email"
				/>
				<input
					className="input input-bordered input-info input-md"
					placeholder="Full Name"
					name="fullname"
				/>
				<input
					className="input input-bordered input-info input-md"
					placeholder="Username"
					name="username"
				/>
				<input
					className="input input-bordered input-info input-md"
					placeholder="Password"
					name="password"
				/>
				<Link href="/profile" className="btn btn-block btn-info text-white">
					Sign-up
				</Link>
			</form>
		</AccountForm>
	);
}
