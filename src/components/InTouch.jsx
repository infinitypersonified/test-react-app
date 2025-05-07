import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InTouch = ({ closeModal }) => {
  const [phone, setPhone] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleEmailSubmission = () => {
    if (!fullname || !email || !phone || !type || !description) {
      setStatusMessage("Please fill in all fields before submitting.");
      return;
    }

    const serviceId = "service_0ofgazx";
    const templateId = "template_odnpojj";
    const publickey = "WyU_XURPvJOQSp9EE";

    const templateParams = {
      from_name: fullname,
      to_name: "INFINITY",
      message: description,
      email,
      type,
      phone,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then(() => {
        setStatusMessage("Your request has been sent successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setType("");
        setDescription("");
        setTimeout(() => {
          setStatusMessage("");
          closeModal();
        }, 5000);
      })
      .catch((error) => {
        setStatusMessage("Error sending form: " + error.message);
        console.error("Error sending email:", error);
      });
  };

  const style = {
    input: "form-input border border-gray-300 p-2 rounded-md w-full",
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12 rounded-lg shadow-2xl max-w-3xl mx-auto mt-12 overflow-y-auto max-h-[80vh]">
      <div className="relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          Let's Build Your Dream Website
        </h2>

        {statusMessage && (
          <div className="bg-blue-100 text-blue-700 p-4 rounded-lg mb-4 text-center">
            {statusMessage}
          </div>
        )}

        <form className="space-y-6">
          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              className={style.input}
              placeholder="Jane Doe"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className={style.input}
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <PhoneInput
              country={"ng"}
              value={phone}
              onChange={setPhone}
              inputProps={{ name: "phone", required: true, autoFocus: true }}
            />
          </div>

          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Type of Website
            </label>
            <select
              className={style.input}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select</option>
              <option>Portfolio</option>
              <option>E-commerce</option>
              <option>Blog</option>
              <option>Landing Page</option>
              <option>Custom</option>
            </select>
          </div>

          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Describe Your Website
            </label>
            <textarea
              rows="5"
              className={style.input}
              placeholder="Tell me about your vision..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleEmailSubmission}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg w-full hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default InTouch;
