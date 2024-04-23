import React from "react";
import "tailwindcss/tailwind.css";
import { instaFriend, instaUser } from "../_sources/profileData";
import { IoIosSettings, IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";


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

  const isOwnProfile = instaUser && instaUser.userName === profile.userName;

  return (
    <>
      {isOwnProfile ? (
        <div className="topbar flex flex-row border-b w-full h-10 md:hidden justify-between px-8 items-center ">
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
        </div>
      ) : (
        <div className="topbar flex flex-row border-b w-full h-10 md:hidden justify-between px-8 items-center ">
          <p className="text-2xl">
            <IoIosArrowBack />
          </p>
          <p className="font-semibold text-md">{userName}</p>
          <p></p>
        </div>
      )}

      <div className="flex md:gap-10 gap-5 mx-auto max-w-screen-lg mt-5 sm:mt-8 px-8">
        <div className="container flex md:w-1/4 w-20 justify-center items-center">
          <img
            className="rounded-full h-20 w-20 md:h-40 md:w-40 border-1 border-grey flex md:p-3"
            src={ava}
            alt=""
          />
        </div>

        <div className="flex items-center justify-center flex-col md:w-3/4">
          <div className="container flex flex-col md:flex-row gap-4 flex-start">
            <p className="text-xl mr-4">{userName}</p>

            <div className="flex gap-4">
              {isOwnProfile ? (
                <>
                  <button className="bg-neutral-100 font-semibold text-xs md:text-sm rounded text-black w-30 h-9 px-5">
                    Edit profile
                  </button>
                  <button className="bg-neutral-100 font-semibold text-xs md:text-sm rounded text-black w-30 h-9 px-5">
                    View archive
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-blue-400 font-semibold text-xs md:text-sm rounded text-black w-30 h-9 px-5">
                    Follow
                  </button>
                  <button className="bg-neutral-100 font-semibold text-xs md:text-sm rounded text-black w-30 h-9 px-5">
                    Message
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="container mt-4 hidden md:flex">
            <p className="mr-10">
              <span className="font-bold">{postCount}</span> posts
            </p>

            <p className="mr-10">
              <span className="font-bold">{followerCount}</span> followers
            </p>

            <p className="mr-10">
              <span className="font-bold">{followingCount}</span> following
            </p>
          </div>

          <div className="container mt-4 hidden md:block text-sm">
            <p className="font-bold">{fullName}</p>
            <p className="font-normal">{bio}</p>
          </div>

          {/* INI YANG DI MOBILE */}
          {!isOwnProfile ? (
            <div className="container mt-4 text-xs hidden md:block">
              <p className="font-normal">
                <span className="text-gray-500">Followed by</span>
                <span className="font-semibold"> {followed}</span>
                <span className="text-gray-500"> +84 more</span>
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="container mt-4 text-sm px-8 md:hidden">
        <p className="font-bold">{fullName}</p>
        <p className="font-normal">{bio}</p>
      </div>

      {/* INI YANG DI WEB */}
      {!isOwnProfile ? (
        <div className="container mt-4 text-xs px-8 md:hidden">
          <p className="font-normal">
            <span className="text-gray-500">Followed by</span>
            <span className="font-semibold"> user1, user2, user 3,</span>
            <span className="text-gray-500"> +84 more</span>
          </p>
        </div>
      ) : null}

      <hr className="mt-4 mb-2 md:mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <div className="container flex flex-row items-center text-xs w-full justify-center gap-16 md:hidden">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">{postCount}</p>
          <p className="text-gray-500">posts</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">{followerCount}</p>
          <p className="text-gray-500">followers</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">{followingCount}</p>
          <p className="text-gray-500">following</p>
        </div>
      </div>

      <hr className="mt-2 p-0 mb-0 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 md:hidden" />
    </>
  );
}

