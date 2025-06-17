import React from 'react'
import { FaStore, FaDollarSign, FaShoppingBag, FaMoneyBillWave } from 'react-icons/fa'

const stats = [
  {
    icon: <FaStore className="text-2xl" />,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    icon: <FaDollarSign className="text-2xl" />,
    value: "33k",
    label: "Monthly Product Sale",
  },
  {
    icon: <FaShoppingBag className="text-2xl" />,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl" />,
    value: "25k",
    label: "Annual gross sale on our site",
  },
]

const Selling = () => {
  return (
    <div className="px-3 pb-20 xl:max-w-[1200px] mx-auto">
      <div className="flex flex-wrap justify-between gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-60 h-40 rounded-md border border-[#ebebeb] flex flex-col items-center justify-center bg-white transition-all duration-300 hover:bg-[#DB4444] group"  >
            <div className="w-12 h-12 border-6 border-gray-300 rounded-full flex items-center justify-center mb-4 bg-black group-hover:bg-white transition-colors duration-300">
              <div className="text-white group-hover:text-red-500">
                {stat.icon}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">
              {stat.value}
            </h2>
            <p className="text-sm text-center text-black group-hover:text-white transition-colors duration-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Selling
