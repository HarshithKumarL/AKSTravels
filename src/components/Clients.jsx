import React from "react";
import img1 from "../assets/Elanco_Logo.png";
import img2 from "../assets/Merkle.png";
import img3 from "../assets/ugam.png";
import img4 from "../assets/qualitest.png";

function Clients() {
  return (
    <div
      id="clients"
      className="pt-5 relative w-full min-h-screen md:h-screen bg-black"
    >
      {/* First Half - Gradient Background */}
      <div className="h-1/2 bg-gradient-to-b from-black via-gray-800 to-black flex justify-center items-center">
        <h1 className="text-3xl text-white font-bold dancing-script-regular">
          Our Clients
        </h1>
      </div>

      {/* Overlapping Boxes for Web and Mobile */}
      <div
        className="absolute w-full left-0 right-0 flex justify-center"
        style={{ top: "40%" }}
      >
        <div className="hidden md:grid max-w-7xl grid-cols-4 gap-4 px-4">
          {/* Use your actual images in the boxes */}
          {[
            { img: img1, name: "Elanco" },
            { img: img2, name: "Merkle" },
            { img: img3, name: "Ugam" },
            { img: img4, name: "Qualitest" },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200"
            >
              {/* Image inside the box */}
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-20 object-contain rounded-lg" // You can adjust the height if needed
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View Boxes */}
      <div className="block md:hidden relative w-full mt-4 mb-5 px-4">
        <div className="grid grid-cols-1 gap-3">
          {/* Use your actual images in the boxes */}
          {[
            { img: img1, name: "Elanco" },
            { img: img2, name: "Merkle" },
            { img: img3, name: "Ugam" },
            { img: img1, name: "Elanco" }, // Repeat for a fourth box, or use another image if needed
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200"
            >
              {/* Image inside the box */}
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-32 object-contain rounded-lg" // Adjust height here as well for mobile
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Half - White Background */}
      <div className="h-1/2 bg-white flex justify-center items-center">
        <div className="text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-black dm-serif-text-regular">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 mt-2 text-md justify-center font-semibold titillium-web-light">
            At AKS Travels, we combine reliability, comfort, and affordability
            to make every journey seamless. Our well-maintained fleet and
            experienced drivers ensure safety and punctuality, while
            customizable packages cater to your unique needs. With 24/7 customer
            support and years of proven expertise, we’re committed to delivering
            exceptional travel experiences. Choose us for hassle-free rides and
            unmatched service, every time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clients;
