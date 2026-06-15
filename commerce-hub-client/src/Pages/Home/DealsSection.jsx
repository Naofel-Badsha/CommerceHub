import { useState, useEffect } from "react";
const TARGET_DATE = new Date("2026-07-01T00:00:00"); // আপনি আপনার পছন্দমতো ডেট দিন

const DealsSection = () => {

    const calculateTimeLeft = () => {
        const difference = +TARGET_DATE - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, mins: 0, secs: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            // প্রতি ১ সেকেন্ড পর পর স্টেট আপডেট হবে, ফলে সেকেন্ড ও মিনিট সাথে সাথে লাইভ চেঞ্জ হবে
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num || 0).padStart(2, "0");



    return (
        <section className="w-full container mx-auto">
            <div className="bg-[#c7fff7] py-4 md:py-0 rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 relative min-h-[450px]">
                {/*------------Image----------*/}
                <div className="w-full flex items-center justify-center self-end">
                    <img
                        src="https://i.ibb.co.com/GvNnsDYY/imageye-imgi-55-banner-4-2-removebg-preview.png"
                        alt="Women Fashion"
                        className="w-full max-w-[380px] h-auto object-cover object-top"
                    />
                </div>

                {/*-----------------Content & Countdown-------------*/}
                <div className="w-full flex flex-col justify-center items-start space-y-5">
                    <span className="text-[#1de4d9] font-montserrat font-semibold text-sm tracking-wide">
                        Get Up To 20% Discount
                    </span>

                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1A1A1A]">
                        Deals Of This Month
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                        Our Women's Fashion Deals of the Month are here to make your style
                        dreams a reality without breaking the bank. Discover a curated collection
                        of exquisite clothing, accessories, and footwear, all handpicked to elevate
                        your wardrobe.
                    </p>

                    {/*------------Updating Countdown Timer-----------------*/}
                    <div className="flex gap-4 pt-4 flex-wrap">
                        {/*----------Days------------*/}
                        <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-md border border-gray-100">
                            <span className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                                {formatNumber(timeLeft.days)}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">Days</span>
                        </div>

                        {/*----------Hours------------*/}
                        <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-md border border-gray-100">
                            <span className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                                {formatNumber(timeLeft.hours)}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">Hours</span>
                        </div>

                        {/*------------Mins------------*/}
                        <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-md border border-gray-100">
                            <span className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                                {formatNumber(timeLeft.mins)}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">Mins</span>
                        </div>

                        {/*------------Secs--------------*/}
                        <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-md border border-gray-100">
                            <span className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                                {formatNumber(timeLeft.secs)}
                            </span>
                            <span className="text-xs text-gray-500 font-medium">Secs</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DealsSection
