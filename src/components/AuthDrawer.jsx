import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AuthDrawer = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // for animation

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Smooth close animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // duration must match transition duration
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleClose}
      ></div>

      {/* Drawer with transition */}
      <div
        className={`relative w-full sm:w-[400px] h-full bg-gray-900 p-6 transform transition-transform duration-300 ease-in-out ${
          isClosing ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={handleClose}
        >
          <X />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>

        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="w-full py-2 bg-orange-600 rounded text-white hover:bg-orange-700"
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2 text-orange-400 hover:underline"
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthDrawer;
