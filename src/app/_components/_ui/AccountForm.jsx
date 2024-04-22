"use client";
import { Box, Heading, Divider, AbsoluteCenter } from "@chakra-ui/react";
import Link from "next/link";

export default function AccountForm({ children, isLogin = true }) {
	return (
		<div className="flex justify-center items-center h-screen">
			<Box maxW={"320px"} padding={"20px"}>
				<center>
					<Heading mb={"8px"}>Nistagram</Heading>
					{children}
					<Box position="relative" py="25px">
						<Divider />
						<AbsoluteCenter bg="white" px="4">
							<span className="text-sm font-bold">OR</span>
						</AbsoluteCenter>
					</Box>
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
			</Box>
		</div>
	);
}
