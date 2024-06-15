import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen pt-12 md:pt-20 pb-6">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">About Us</h5>
            <p className="text-gray-600">
              ASHA is a non-profit organization dedicated to making a positive impact in the community.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Stay Connected</h5>
            <ul className="flex justify-center mb-4">
              <li className="mr-4">
                <a
                  href="https://www.facebook.com/ashaNGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="https://twitter.com/ashaNGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ashaNGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600 text-center">
          &copy; 2024 ASHA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;