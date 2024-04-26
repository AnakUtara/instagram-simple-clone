import Link from "next/link";
import React from "react";

function Edit() {
  return (
    <div className="flex flex-col gap-10 w-1/2 h-56 m-10">
      <div className="flex flex-col gap-8">
        <h1 className="text-lg font-bold">Edit Profile</h1>
        <div className="flex flex-row gap-3 w-full justify-between">
          <div className="flex flex-row gap-2">
            <img
              className="inline-block size-10 rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="foto user"
            ></img>
            <div className="text-left mr-4">
              <h3 className="text-sm text-black font-bold">Cornelia Mustika</h3>
              <p className="text-sm">Cornelia Mustika</p>
            </div>
          </div>
          <div className="text-right">
            <Link className="text-sm text-blue-500" href="">
              <button className="btn bg-blue-500 btn-sm text-white ">
                Change photo
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-bold">Website</h1>
          <input
            type="text"
            placeholder="Website"
            className="input input-bordered w-full max-w-xs"
            disabled
          />
          <p className="text-xs">
            Editing your links is only available on mobile. Visit the Instagram
            app and edit your profile to change the websites in your bio.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Bio</h1>
          <input
            type="text"
            placeholder="Bio"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-bold">Gender</h1>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              Prefer Not Say
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Female</a>
              </li>
              <li>
                <a>Male</a>
              </li>
              <li>
                <a>Custom</a>
                <input
                  type="text"
                  placeholder=""
                  className="input w-full bg-gray-700 max-w-xs"
                />
              </li>
              <li>
                <a>Prefer not to say</a>
              </li>
            </ul>
          </div>
          <p className="text-xs">This won’t be part of your public profile.</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold">
          Show account suggestions on profiles
        </h1>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-semibold">
              Show account suggestions on profiles
            </h1>
            <p className="text-xs">
              Choose whether people can see similar account suggestions on your
              profile, and whether your account can be suggested on other
              profiles.
            </p>
          </div>
          <input
            class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            class="inline-block ps-[0.15rem] hover:cursor-pointer"
            for="flexSwitchCheckDefault"
          ></label>
        </div>
      </div>
      <div className=" text-right">
        <Link className="text-sm text-blue-500" href="">
          <button className="btn bg-blue-500 btn-sm text-white ">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Edit;
