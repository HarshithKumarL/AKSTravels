import React, { useEffect, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (status === "success") {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false); // Hide after 5 seconds
      }, 5000);
    }
  }, [status]);

  // Validation Logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your name!";
    if (!formData.email) newErrors.email = "Please provide your email.";
    if (!formData.email) newErrors.email = "Please provide your mail id";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email format is incorrect.";
    if (!formData.contact) {
      newErrors.contact = "Please provide your contact number.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits.";
    }
    if (!formData.message) newErrors.message = "Your message can’t be empty!";
    return newErrors;
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Submission Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    console.log("submit");
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-black via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 protest-strike-regular">
            {getGreeting()} 👋
          </h2>
          <h3 className="text-xl font-semibold titillium-web-light leading-tight tracking-tight text-white">
            Request for Callback
          </h3>
          <p className="text-gray-300 mb-6 mt-5">
            AKS is committed to delivering top-notch service quality, ensuring
            that every aspect of your travel experience exceeds expectations.
            From prompt and professional customer support to meticulously
            maintained vehicles and expert drivers, we prioritize excellence in
            everything we do.
          </p>
          <p className="text-gray-300 mb-4">
            📧 Email me at:{" "}
            <a
              href="mailto:meghananarayana55@gmail.com"
              className="text-[#d16002]"
            >
              shekarNarayan@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-4">
            📞 Give me a call:{" "}
            <span className="text-[#d16002]">12345678901</span>
          </p>
          <p className="text-gray-300 mb-4">
            💬 Let’s connect:
            <a
              href="https://www.linkedin.com/in/meghananarayana/"
              target="_blank"
              className="text-Apricot hover:text-white"
            >
              {" "}
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/meghanan266"
              target="_blank"
              className="text-Apricot hover:text-white"
            >
              {" "}
              Facebook
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-sm font-semibold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-Apricot"
              placeholder="Your Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-Apricot"
              placeholder="Your Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="name" className="text-sm font-semibold mb-2">
              Contact No *
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-Apricot"
              placeholder="Your Contact Number"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-Apricot"
              placeholder="Let me know how I can assist you"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black protest-strike-regular text-2xl uppercase font-semibold py-3 rounded hover:bg-Apricot/80 hover:text-[#d16002] transition duration-300"
          >
            {status === "loading" ? "Sending..." : "Send Request!"}
          </button>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-8 p-6 bg-gray-900 text-white rounded-lg border-l-4 border-Apricot shadow-lg animate__animated animate__fadeIn">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-Apricot opacity-80 text-black rounded-full">
                  <span role="img" aria-label="celebration" className="text-lg">
                    🎉
                  </span>
                </div>
                <p className="font-medium text-lg text-white">
                  Thanks for reaching out! I’ll get back to you as soon as I
                  can. 💬
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
