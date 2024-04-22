"use client";
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Flex,
	Avatar,
	Box,
	IconButton,
	Text,
	Image,
	Button,
	Heading,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
	BiLike,
	BiShare,
	BiChat,
	BiHeart,
	BiSave,
	BiBookmark,
} from "react-icons/bi";

export default function PostCard({
	username = "Segun Adebayo",
	handle = "seg_adby",
	profileUrl = "https://bit.ly/sage-adebayo",
	caption = " With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
	contentUrl = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
}) {
	return (
		<Card maxW="md">
			<CardHeader>
				<Flex spacing="4">
					<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
						<Avatar name={username} src={profileUrl} />
						<Box>
							<Heading size="sm">{username}</Heading>
							<Text>{`@${handle}`}</Text>
						</Box>
					</Flex>
					<IconButton
						variant="ghost"
						colorScheme="gray"
						aria-label="See menu"
						icon={<BsThreeDotsVertical />}
					/>
				</Flex>
			</CardHeader>
			<Image objectFit="cover" src={contentUrl} alt="Chakra UI" />
			<CardBody p={"none"}>
				<Flex justify={"space-between"}>
					<Flex justify={"space-between"}>
						<Button variant="ghost" leftIcon={<BiHeart />} />
						<Button variant="ghost" leftIcon={<BiChat />} />
						<Button variant="ghost" leftIcon={<BiShare />} />
					</Flex>
					<Button variant="ghost" leftIcon={<BiBookmark />} />
				</Flex>
				<Text fontSize={"xs"} paddingX={"5px"}>
					{caption}
				</Text>
			</CardBody>
			<CardFooter>
				<Avatar size="2xs" name={username} />
			</CardFooter>
		</Card>
	);
}
