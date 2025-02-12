import React from "react";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600 text-white px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">About Us</h1>
        <p className="text-xl mb-8 text-gray-200">
          We are committed to delivering the best experience with innovative solutions, user-friendly design, and top-tier performance.
        </p>
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-white opacity-20 rounded-lg blur-lg"></div>
          <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <p className="text-lg text-emerald-600">Our mission is to empower users with cutting-edge technology and seamless experiences.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://source.unsplash.com/600x400/?team,collaboration"
            alt="Team Collaboration"
            className="rounded-lg shadow-lg mx-auto"
          />
          <img
            src="https://source.unsplash.com/600x400/?innovation,success"
            alt="Innovation and Success"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
