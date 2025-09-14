import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import contact_image from "../assets/contact_image.png"; // <-- replace with your actual image name

const Contact = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-12">CONTACT US</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={contact_image}
              alt="Contact Us"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Info */}
          <div>
            {/* Office Info */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">OUR OFFICE</h3>
              <p className="text-gray-600">
                24A Kingston St, Los Vegas NC 28202, USA
              </p>
              <p className="mt-2 text-gray-600">
                Tel: +1 234 456 7890 <br />
                Email: support@prescripto.com
              </p>
            </div>

            {/* Careers */}
            <div>
              <h3 className="text-xl font-semibold mb-4">CAREERS AT PRESCRIPTO</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our teams and job openings.
              </p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
