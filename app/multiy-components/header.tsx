import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { GoChevronDown } from "react-icons/go";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="w-full px-4 md:px-6 py-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <h2 className="text-2xl font-bold">Bandage</h2>

          {/* Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex gap-x-6">
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <Link href={"/"} className="hover:text-blue-500">
                  Shop
                </Link>
                <GoChevronDown />
              </li>
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-x-6">
            {/* Login */}
            <div className="flex items-center gap-x-2 text-[#23A6F0]">
              <IoPersonOutline size={20} />
              <p>Login / Register</p>
            </div>

            {/* Icons */}
            <ul className="flex items-center gap-x-4 text-[#23A6F0]">
              <li>
                <IoSearch size={24} />
              </li>
              <li className="flex items-center gap-x-1">
                <FiShoppingCart size={24} />
                <p>1</p>
              </li>
              <li className="flex items-center gap-x-1">
                <CiHeart size={28} />
                <p>1</p>
              </li>
            </ul>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-x-4">
            {/* Search */}
            <IoSearch size={24} className="text-[#23A6F0]" />
            {/* Cart */}
            <FiShoppingCart size={24} className="text-[#23A6F0]" />

            {/* Toggle Button */}
            <Sheet>
              <SheetTrigger>
                <HiBars3BottomRight size={30} className="text-black" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                    <div className="flex justify-center items-center gap-y-6 text-2xl font-sans font-semibold text-[#39393a]">
                      <ul className="flex flex-col items-center gap-8">
                        <li>
                          <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Product</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Pricing</Link>
                        </li>
                        <li>
                          <Link href={"/"}>Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
