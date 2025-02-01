import React, { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { client } from '@/sanity/lib/client';
import { Product } from '../productlistpage/shop-cart';
import { addToWishlist } from '@/app/store/features/wishlistSlice';
import { FiHeart } from 'react-icons/fi';

function WishAdd({ id }: { id: string }) {
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch = useDispatch();

    // Fetch single product by ID
    useEffect(() => {
        const fetchProduct = async () => {
            const query = `*[_type == "product" && _id == $id][0] {
        _id,
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;
            try {
                const data = await client.fetch(query, { id });
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const notify = () => toast.success('Product added to wishlist! ❤️', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const handleAddToWishlist = () => {
        if (product) {
            // Add to Redux wishlist state
            dispatch(addToWishlist(product));

            // Update localStorage for wishlist
            const storedWishlist = localStorage.getItem("wishlist");
            const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
            wishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            notify();
        }
    };

    return (
        <div>
            <FiHeart
                onClick={handleAddToWishlist}
                className="cursor-pointer font-bold transform transition-all duration-300 hover:-translate-y-3 hover:text-blue-500" />

            <ToastContainer />
        </div>
    );
}

export default WishAdd;