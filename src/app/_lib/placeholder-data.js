export const posts = [
	{
		id: 1,
		username: "Nyenyenye",
		handle: "nye_nye",
		caption:
			"Lorem ipsum dolor sit ametBacon ipsum dolor amet et deserunt in, id velit andouille biltong sed ad frankfurter. Porchetta non turkey short loin, laboris deserunt ribeye shoulder. Occaecat shankle exercitation, pig esse alcatra in. Laboris frankfurter bacon tri-tip.",
		contentUrl:
			"https://images.pexels.com/photos/20866039/pexels-photo-20866039/free-photo-of-a-black-and-white-photo-of-a-whale-tail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 2,
		username: "Nyonyonyi",
		handle: "nyo_nyi",
		caption:
			"Lorem ipsum dolor sit ametBacon ipsum dolor amet et deserunt in, id velit andouille biltong sed ad frankfurter. Porchetta non turkey short loin, laboris deserunt ribeye shoulder. Occaecat shankle exercitation, pig esse alcatra in. Laboris frankfurter bacon tri-tip.",
		contentUrl:
			"https://images.pexels.com/photos/18206912/pexels-photo-18206912/free-photo-of-couple-by-house-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		id: 3,
		username: "Nyinyonye",
		handle: "nyo_nyi_nye",
		caption:
			"Lorem ipsum dolor sit ametBacon ipsum dolor amet et deserunt in, id velit andouille biltong sed ad frankfurter. Porchetta non turkey short loin, laboris deserunt ribeye shoulder. Occaecat shankle exercitation, pig esse alcatra in. Laboris frankfurter bacon tri-tip.",
		contentUrl:
			"https://images.pexels.com/photos/20211127/pexels-photo-20211127/free-photo-of-glaciers-and-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
];

export const suggested = [
	{
		id: 1,
		name: "reginaeva",
		password: "hello123",
		email: "hello@reginaeva.de",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s",
	},
	{
		id: 2,
		name: "cornelialia",
		password: "hello1234",
		email: "hello@cornelia.gmail.com",
		image:
			"https://media.istockphoto.com/id/1372281808/photo/woman-face-profile-young-girl-portrait-with-smooth-healthy-skin-model-facial-side-view-over.jpg?s=612x612&w=0&k=20&c=0sycwPGkFcwXL75kdHCy52c2jX7r9qJwPXqS4J3PZb8=",
	},
	{
		id: 3,
		name: "Alice",
		password: "alice123",
		email: "alice@example.com",
		image:
			"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=",
	},
	{
		id: 4,
		name: "Kevin",
		password: "Kevin1234",
		email: "kevin@example.com",
		image:
			"https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp",
	},
	{
		id: 5,
		name: "Charlie",
		password: "Charlie123",
		email: "charlie@example.com",
		image:
			"https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg",
	},
];

export const photosData = [
	{ id: 1, img: "https://source.unsplash.com/random/?metro" },
	{ id: 2, img: "https://source.unsplash.com/random/?tokyo" },
	{ id: 3, img: "https://source.unsplash.com/random/?japan-aesthetic" },
	{ id: 4, img: "https://source.unsplash.com/random/?nagoya" },
	{ id: 5, img: "https://source.unsplash.com/random/?kyoto" },
	{ id: 6, img: "https://source.unsplash.com/random/?hokkaido" },
	{ id: 7, img: "https://source.unsplash.com/random/?saitama" },
	{ id: 8, img: "https://source.unsplash.com/random/?sapporo" },
	{ id: 9, img: "https://source.unsplash.com/random/?nara" },
];

export const instaUser = {
	id: 1,
	userName: "hohoho_udin",
	fullName: "Nama Saya Udin",
	bio: "Saya umurnya 20",
	post: photosData ? photosData.length : 0,
	followers: 200,
	following: 50,
	ava: "https://i.ibb.co/hctzd61/webpnet-resizeimage-2021-12-0-20211205034247.jpg",
};

export const instaFriend = {
	id: 1,
	userName: "wkwkwk",
	fullName: "Harry Potter",
	bio: "No comment",
	post: photosData ? photosData.length : 0,
	followers: 400,
	following: 400,
	followedBy: "anies, prabowo, ganjar",
};
