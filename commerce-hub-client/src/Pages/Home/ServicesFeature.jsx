import { FiTruck, FiHeadphones } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';
import { RiDiscountPercentLine } from 'react-icons/ri';

const ServicesFeature = () => {
    const features = [
        {
            id: 1,
            icon: <FiTruck className="text-black" size={28} />,
            title: "Free Shipping",
            desc: "Free Shipping for orders over $130"
        },
        {
            id: 2,
            icon: <BiDollar className="text-black" size={28} />,
            title: "Free Returns",
            desc: "Within 30 days for an exchange."
        },
        {
            id: 3,
            icon: <FiHeadphones className="text-black" size={26} />,
            title: "Flexible Payment",
            desc: "Pay with Multiple Credit Cards"
        },
        {
            id: 4,
            icon: <RiDiscountPercentLine className="text-black" size={28} />,
            title: "Support Online",
            desc: "24 hours a day, 7 days a week"
        }
    ];
    return (
        <section className="container mx-auto px-4 py-8 bg-white">
            <div className="border border-gray-200/80 rounded-sm px-6 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0">

                {features.map((feature, idx) => (
                    <div
                        key={feature.id}
                        className={`flex items-start gap-4 px-2 lg:px-4 ${idx !== features.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                            }`}
                    >
                        <div className="shrink-0 mt-1">
                            {feature.icon}
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-black font-bold text-base tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-snug">
                                {feature.desc}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default ServicesFeature
