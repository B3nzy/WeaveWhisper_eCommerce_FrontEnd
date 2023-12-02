import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";

export default function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex flex-row items-center justify-between">
      <Link to={"/"} className="font-bold sm:ml-10 sm:text-xl">
        <span className="text-orange-800">Weave</span>
        <span className="text-slate-700">Whisper</span>
      </Link>
      <div className="font-bold flex gap-8 text-xs text-slate-700">
        <p className="hidden md:inline hover:text-orange-600">MEN</p>
        <p className="hidden md:inline hover:text-orange-600">WOMEN</p>
        <p className="hidden md:inline hover:text-orange-600">KIDS</p>
      </div>
      <form className="px-4 p-2 w-40 md:w-[400px] flex items-center justify-between bg-gray-100 rounded-md focus-within:bg-transparent focus-within:border">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent w-full"
        />
        <IoSearch className="text-slate-400 text-xl" />
      </form>
      <div className="flex gap-6 sm:mr-10 text-center">
        <Menu>
          <MenuHandler>
            <ul className=" flex flex-col items-center cursor-pointer hover:text-orange-600">
              <BsPerson className="text-2xl" />
              <li className="text-xs font-semibold">Profile</li>
            </ul>
          </MenuHandler>
          <MenuList className="p-6 flex flex-col gap-2 text-gray-600 outline-none shadow-md">
            <MenuItem className="flex items-center gap-4 hover:text-orange-600">
              <BsPerson className="text-xl" />
              <Typography variant="small" className="font-medium">
                My Profile
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-4 hover:text-orange-600">
              <IoSettingsOutline className="text-xl" />
              <Typography variant="small" className="font-medium">
                Edit Profile
              </Typography>
            </MenuItem>

            <MenuItem className="flex items-center gap-4 hover:text-orange-600">
              <LiaShoppingBagSolid className="text-2xl" />
              <Typography variant="small" className="font-medium">
                My Orders
              </Typography>
            </MenuItem>
            <hr className="my-2 border-blue-gray-50" />
            <MenuItem className="flex items-center gap-4 text-orange-400 hover:text-orange-600">
              <GoSignOut className="text-xl" />
              <Typography variant="small" className="font-medium">
                Sign Out
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>

        <ul className=" flex flex-col items-center hover:text-orange-600">
          <CiHeart className="text-2xl" />
          <li className="text-xs font-semibold">Wishlist</li>
        </ul>
        <ul className=" flex flex-col items-center hover:text-orange-600">
          <LiaShoppingBagSolid className="text-2xl" />
          <li className="text-xs font-semibold">Bag</li>
        </ul>
      </div>
    </div>
  );
}
