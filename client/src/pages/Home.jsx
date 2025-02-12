import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Welcome to Our Platform</h1>
        <p className="text-xl mb-8 text-gray-200">
          Discover a seamless experience with cutting-edge features, intuitive design, and smooth performance.
        </p>
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-white opacity-20 rounded-lg blur-lg"></div>
          <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <p className="text-lg text-amber-950">Start exploring today and unlock the potential of next-gen technology!</p>
          </div>
        </div>
        <div className="mt-10">
          <img
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
