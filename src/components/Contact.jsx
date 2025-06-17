import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="xl:max-w-[1200px] mx-auto p-6">
      <div className="text-sm text-gray-500 mb-4">
        Home <span className="mx-2">/</span> <span className="font-medium text-black">Contact</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-8">
          {/* Call Us */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#DB4444] text-white p-3 rounded-full">
              <Phone />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Call To Us</h4>
              <p className="text-sm text-gray-600 mb-2">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm font-medium text-gray-800">Phone: +8801611112222</p>
            </div>
          </div>

          <hr />

          {/* Write To Us */}
          <div className="flex items-start space-x-4">
            <div className="bg-[#DB4444] text-white p-3 rounded-full">
              <Mail />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Write To US</h4>
              <p className="text-sm text-gray-600 mb-2">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm text-gray-800">Emails: customer@exclusive.com</p>
              <p className="text-sm text-gray-800">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white shadow-md rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#DB4444] mb-4"
          />
          <button className="bg-[#DB4444] hover:bg-[#000] text-white px-6 py-3 rounded-md float-right font-medium">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
