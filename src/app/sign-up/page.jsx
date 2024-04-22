import AccountForm from "../_components/_ui/AccountForm";
import { Input, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignUp() {
	return (
		<AccountForm isLogin={false}>
			<form>
				<Input placeholder="E-mail" name="email" rounded={"2px"} mb={"8px"} />
				<Input
					placeholder="Full Name"
					name="fullname"
					rounded={"2px"}
					mb={"8px"}
				/>
				<Input
					placeholder="Username"
					name="username"
					rounded={"2px"}
					mb={"8px"}
				/>
				<Input
					placeholder="Password"
					name="password"
					rounded={"2px"}
					mb={"8px"}
				/>
				<Button colorScheme={"twitter"} className="w-full">
					Sign-up
				</Button>
			</form>
		</AccountForm>
	);
}
