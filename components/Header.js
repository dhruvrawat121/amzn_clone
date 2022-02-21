import React from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux"
import {selectItems} from "../redux/basket"

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items= useSelector(selectItems)
  return (
    <div className="sticky top-0 z-50">
      {/* upper nav */}
      <div className="flex items-center bg-amazon_blue pt-2 flex-grow">
        <div
          onClick={() => router.push("/")}
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <img
            src="https://links.papareact.com/f90"
            width={140}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            alt="#"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer self-center	">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none"
          ></input>
          <SearchIcon className="h-12 p-3 cursor-pointer " />
        </div>
        {/* right part */}
        <div className="text-white flex items-center p-2 ml-2 mr-2">
          {/* first div */}
          <div onClick={signIn} className="m-1 link">
            <p className="text-sm">
              {session ? `Hello,${session.user.name}` : "SignIn"}
            </p>
            <p className="font-bold text-sm">Account and lists</p>
          </div>
          {/* second div */}
          <div className="m-1 link">
            <p className="text-sm">Returns</p>
            <p className="font-bold text-sm">and orders</p>
          </div>
          {/* third div */}
          <div onClick={() => router.push("/checkout")} className="m-1 link flex">
            <ShoppingCartIcon className="h-7 cursor-pointer" />
            <sub className="text-yellow-500 font-bold">{items.length}</sub>
            <span className="font-bold text-sm">Cart</span>
            {session ? <p onClick={signOut}>SignOut</p> : ""}
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-5 bg-amazon_blue-light text-white">
        <p className="flex item-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="mt-2 mb-2 link">Amazon pay</p>
        <p className="mt-2 mb-2 link">Gifts Cards</p>
        <p className="mt-2 mb-2 link">Todays deals</p>
        <p className="hidden lg:inline-flex ml-5 link">Buy Again</p>
        <p className="hidden lg:inline-flex ml-5 link">Kindle eBooks</p>
        <p className="hidden lg:inline-flex ml-5 link">baby</p>
        <p className="hidden lg:inline-flex ml-5 link">
          Grocery and Gourmet foods
        </p>
      </div>
    </div>
  );
}
