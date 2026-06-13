        <section className=" px-4 py-12">
            {/* ৩ কলামের রেসপন্সিভ গ্রিড লেআউট */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {promoData.map((item) => (

                ))}
            </div>
        </section>

                    //         <div
                    //     key={item.id}
                    //     className="relative group overflow-hidden rounded-sm flex items-center w-full h-full py-28"
                    // >
                    //     {/* বাম পাশের টেক্সট কন্টেন্ট */}
                    //     <div className="relative z-10 pl-8 ">
                    //         <span className="text-xs font-semibold text-gray-500 tracking-wider">
                    //             {item.discount}
                    //         </span>
                    //         <h3 className="text-2xl xl:text-4xl font-medium text-[#233238] mt-2 mb-1">
                    //             {item.title}
                    //         </h3>
                    //         <p className="text-sm text-gray-500 mb-6 italic">
                    //             {item.subtitle}
                    //         </p>
                    //         <a
                    //             href={item.link}
                    //             className="inline-block text-xs font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors uppercase"
                    //         >
                    //             Shop Now
                    //         </a>
                    //     </div>
                    //     {/* ডান পাশের ইমেজ এবং হোভার জুম ইফেক্ট (duration-500) */}
                    //     <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
                    //         <img
                    //             src={item.img}
                    //             alt={item.title}
                    //             className=" object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                    //         />
                    //     </div>
                    // </div>