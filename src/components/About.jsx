import React from "react";

function About() {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen md:h-screen bg-cover bg-center bg-black bg-fixed"
      style={{
        backgroundImage: "url(/assets/bg-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full w-full px-4">
        {/* Three Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-7">
          {/* Block 1 */}
          <div>
            <h1 className="dm-serif-text-regular text-2xl text-[#d16002]">
              01.
            </h1>
            <h1 className="uppercase dm-serif-text-regular text-xl">
              Employee
            </h1>
            <h1 className="uppercase dm-serif-text-regular text-xl">
              Pick up and drop
            </h1>
            <p className="titillium-web-light text-sm mt-2">
              Most convenient and economical way to get a hassle-free commute to
              and from work.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h1 className="dm-serif-text-regular text-2xl text-[#d16002]">
              02.
            </h1>
            <h1 className="uppercase dm-serif-text-regular text-xl">Airport</h1>
            <h1 className="uppercase dm-serif-text-regular text-xl">
              Pick up and drop
            </h1>
            <p className="titillium-web-light text-sm mt-2">
              24/7 facility with competitive pricing from your doorstep.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h1 className="dm-serif-text-regular text-2xl text-[#d16002]">
              03.
            </h1>
            <h1 className="uppercase dm-serif-text-regular text-xl">Local /</h1>
            <h1 className="uppercase dm-serif-text-regular text-xl">
              Oustation Rides
            </h1>
            <p className="titillium-web-light text-sm mt-2">
              Comfortable rides to match your requirement within Bengaluru and
              other places alike.
            </p>
          </div>
        </div>

        {/* New Block with Image on Left and Text on Right */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mt-12">
          {/* Left Image - 40% width */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img
              src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/11/suits-harvey-mike.jpg" // Change this to your image path
              className="w-full h-auto object-cover rounded-lg"
              alt="img"
            />
          </div>

          {/* Right Text - 60% width */}
          <div className="w-full md:w-3/5 md:pl-6">
            <h1 className="text-md titillium-web-light leading-tight tracking-tight text-white">
              Drive your dreams!
            </h1>
            <h1 className="text-4xl mt-2 protest-strike-regular uppercase">
              {Array.from("Experience freedom on your wheels").map(
                (char, index) => (
                  <span
                    key={index}
                    style={{
                      color: `rgba(209, 96, 2, ${0.5 + index * 0.02})`, // Adjusts opacity for light-to-dark effect
                    }}
                  >
                    {char}
                  </span>
                )
              )}
            </h1>

            <p className="titillium-web-light mt-3 text-md">
              AKS Travels provides reliable transport services in Bangalore,
              specializing in meeting the employee transportation needs of many
              leading IT and BPO companies in the area. With eight years of
              expertise in corporate services, AKS Travels brings together a
              dedicated, experienced team committed to exceptional service. Our
              fleet includes well-maintained, technology-equipped vehicles from
              top local vendors, ensuring smooth and efficient transport for
              employees. By combining advanced technology with fleet
              integration, AKS Travels offers a streamlined, single-point
              solution for employee transportation in Bangalore, delivering
              dependable value with every ride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
