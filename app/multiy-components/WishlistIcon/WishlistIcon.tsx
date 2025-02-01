// app/components/WishlistIcon.tsx
"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

export default function WishlistIcon() {
    const wishlist = useSelector((state: RootState) => state.wishlist.items);

    return (
        <div className="relative">
            <Link href="/wishList">
                <FiHeart size={24} className="text-[#23A6F0] cursor-pointer" />
            </Link>
            {/* Quantity Badge - Always show, even if wishlist is empty */}
            <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full px-1">
                {wishlist.length}
            </span>
        </div>
    );
}