import Image from "next/image";

export default function Our_Product() {
  return (
    <main className="overflow-hidden">
      {/* Section Browse The Range */}
      <div className="my-20 text-[#1d1d1d]">

        {/* Section Our Products */}
        <div>
            <p className="text-lg text-center font-sans font-semibold text-[#5e5d5d]">Featured Products</p>
          <h1 className="text-3xl text-center font-sans font-bold my-5">BESTSELLER PRODUCTS</h1>
          <p className="text-lg text-center font-sans font-semibold text-[#5e5d5d] px-3">Problems trying to resolve the conflict between</p>

          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap:5 lg:gap-6">
              {/* Common Product Container */}
              {[
                { src: "/one.png", alt: "img-one" },
                { src: "/two.png", alt: "img-two" },
                { src: "/three.png", alt: "img-three" },
                { src: "/four-img.png", alt: "img-four" },
                { src: "/five.png", alt: "img-five" },
                { src: "/six.png", alt: "img-six" },
                { src: "/seven.png", alt: "img-seven" },
                { src: "/eight.png", alt: "img-eight" },
              ].map((product, index) => (
                <div key={index} className="w-[200] h-[550px] flex flex-col">
                  <div className="flex justify-center items-center">
                    <Image
                      src={product.src}
                      alt={product.alt}
                      width={250}  
                      height={550}
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
