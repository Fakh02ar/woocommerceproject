import React from 'react';
import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const Service = () => {
  const benefits = [
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="bg-gray-300 rounded-full p-4 mb-4">
              <div className="bg-black rounded-full p-4">
                {benefit.icon}
              </div>
            </div>
            <h3 className="text-sm font-bold tracking-wide mb-1">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
