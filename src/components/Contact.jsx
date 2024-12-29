import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-white border border-gray-300 shadow-lg rounded-[24px] p-4 sm:p-8">
        <h1 className="text-[24px] sm:text-[36px] font-semibold text-gray-800 mb-4">
          Contact Me
        </h1>
        <div className="flex flex-col gap-4 text-[16px] sm:text-[18px] text-gray-700">
          <p className="flex items-center gap-2">
            <i className="bi bi-envelope-at text-blue-500 text-[24px]"></i>
            <strong>Email Me:</strong>
            <Link
              to="mailto:abdelrahman.s2003@icloud.com"
              className="hover:underline transition-colors text-blue-600"
            >
              abdelrahman.s2003@icloud.com
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <i className="bi bi-phone-vibrate text-green-500 text-[24px]"></i>
            <strong>Call Me:</strong>
            <Link
              to="tel:+16314857394"
              className="hover:underline transition-colors text-green-600"
            >
              +1 (631) 485-7394
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <i className="bi bi-github text-gray-800 text-[24px]"></i>
            <strong>GitHub:</strong>
            <Link
              to="https://github.com/AbdelSayedahmed"
              target="_blank"
              className="hover:underline transition-colors text-gray-800"
            >
              @AbdelSayedahmed
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <i className="bi bi-linkedin text-blue-700 text-[24px]"></i>
            <strong>LinkedIn:</strong>
            <Link
              to="https://www.linkedin.com/in/abdelsayedahmed/"
              target="_blank"
              className="hover:underline transition-colors text-blue-700"
            >
              @abdelsayedahmed
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <strong>Resumé:</strong>
            <Link
              to="https://profile.indeed.com/p/abdelrahmans-bs2pcjv"
              target="_blank"
              className="flex items-center gap-1 border rounded-[12px] px-[10px] py-[4px] transition-all border-blue-600 bg-blue-100 text-blue-700 hover:bg-blue-200"
            >
              Preview
            </Link>
            <Link
              to="https://profile-file-service-temp-prod.s3.us-west-2.amazonaws.com/..."
              className="flex items-center gap-1 border rounded-[12px] px-[10px] py-[4px] transition-all border-green-600 bg-green-100 text-green-700 hover:bg-green-200"
            >
              <i className="bi bi-download"></i> Download
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <strong>Leetcode Profile:</strong>
            <Link
              to="https://leetcode.com/u/abdelsayedahmed/"
              target="_blank"
              className="hover:underline transition-colors text-yellow-700"
            >
              @abdelsayedahmed
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <strong>Codewars Profile:</strong>
            <Link
              to="https://www.codewars.com/users/abdelsayedahmed"
              target="_blank"
              className="hover:underline transition-colors text-red-700"
            >
              @abdelsayedahmed
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
