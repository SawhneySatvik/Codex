import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TeacherClassContainer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-wrap justify-center items-center p-4 ${
        darkMode? 'dark-mode' : 'light-mode'
      }`}
    >
      <Link to={'/test'}>
        <div
          className={`w-64 h-64 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
            darkMode? 'bg-dark' : 'bg-white'
          }`}
        >
          <img
            src="../../assets/1.png" // Replace with the path to your image
            alt="Class 1"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h5
              className={`text-lg font-bold ${
                darkMode? 'text-white' : 'text-black'
              }`}
            >
              Kaksha-1
            </h5>
          </div>
        </div>
      </Link>
      <Link to={'/test'}>
        <div
          className={`w-64 h-64 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
            darkMode? 'bg-dark' : 'bg-white'
          }`}
        >
          <img
            src="../../assets/2.png" // Replace with the path to your image
            alt="Class 2"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h5
              className={`text-lg font-bold ${
                darkMode? 'text-white' : 'text-black'
              }`}
            >
              Kaksha-2
            </h5>
          </div>
        </div>
      </Link>
      <Link to={'/test'}>
        <div
          className={`w-64 h-64 m-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
            darkMode? 'bg-dark' : 'bg-white'
          }`}
        >
          <img
            src="../../assets/3.png" // Replace with the path to your image
            alt="Class 3"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h5
              className={`text-lg font-bold ${
                darkMode? 'text-white' : 'text-black'
              }`}
            >
              Kaksha-3
            </h5>
          </div>
        </div>
      </Link>
      <button onClick={toggleDarkMode} className="hidden">
        {darkMode? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default TeacherClassContainer;