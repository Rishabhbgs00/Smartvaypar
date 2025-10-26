import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center justify-center space-x-3 mt-2">
      <a
        href="https://www.facebook.com/share/19y387sUmR/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-4 rounded-full shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#3b82f6] hover:bg-blue-700 transition duration-300"
      >
        <FaFacebookF className="text-2xl drop-shadow-[0_0_8px_#3b82f6]" />
      </a>

      <a
        href="https://wa.me/918400286637"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_25px_#22c55e] hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-2xl drop-shadow-[0_0_8px_#22c55e]" />
      </a>

      <a
        href="https://www.linkedin.com/in/rishabh-mishra-245760208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-4 rounded-full shadow-[0_0_15px_#1d4ed8] hover:shadow-[0_0_25px_#1d4ed8] hover:bg-blue-800 transition duration-300"
      >
        <FaLinkedinIn className="text-2xl drop-shadow-[0_0_8px_#1d4ed8]" />
      </a>

      <a
        href="https://www.instagram.com/available24x7fr?igsh=MTkxczJ5Ymh4bTBndQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-full shadow-[0_0_15px_#f472b6] hover:shadow-[0_0_25px_#f472b6] transition duration-300"
      >
        <FaInstagram className="text-2xl drop-shadow-[0_0_8px_#f472b6]" />
      </a>
    </div>
  );
}
