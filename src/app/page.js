import AccountForm from "./_ui/login/AccountForm";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignIn() {
	return (
		<AccountForm>
			<form className="flex flex-col gap-5">
				<input
					className="input input-bordered input-info input-md"
					placeholder="Username or email"
					name="username"
					required
				/>
				<input
					type="password"
					className="input input-bordered input-info input-md"
					placeholder="Password"
					name="password"
					required
				/>
				<Link href="/username" className="btn btn-block btn-info text-white">
					Submit
				</Link>
			</form>
		</AccountForm>
	);
}
