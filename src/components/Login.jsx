import React, { useState, useEffect } from 'react';
import mobile from '../assets/mobile.jpeg';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // track current user

  // Check login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // clean up listener on unmount
  }, []);

  // Login handler
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error.message);
      alert(`Login failed: ${error.message}`);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error.message);
      alert(`Logout failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-10">
      <div className="flex gap-10 w-full bg-white overflow-hidden">
        {/* Left Section (Image) */}
        <div className="w-[60%] flex items-center justify-center py-10">
          <img
            src={mobile}
            className="max-h-[500px] object-contain"
            alt="Login visual"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="w-[40%] py-10 px-8 flex flex-col justify-center mt-10">
          <h2 className="text-2xl font-bold text-black mb-2">
            {user ? "Welcome Back!" : "Log in to Exclusive"}
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            {user ? `Logged in as: ${user.email}` : "Enter your details below"}
          </p>

          {/* Show login form only if not logged in */}
          {!user && (
            <>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full border-0 border-b border-gray-300 bg-transparent pt-6 pb-2 text-sm text-black placeholder-transparent focus:border-red-500 focus:outline-none"
                  placeholder="Email or Phone Number"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-200 
                    peer-placeholder-shown:top-6 
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-500 
                    peer-focus:top-2 
                    peer-focus:text-sm 
                    peer-focus:text-gray-400"
                >
                  Email
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer w-full border-0 border-b border-gray-300 bg-transparent pt-6 pb-2 text-sm text-black placeholder-transparent focus:border-red-500 focus:outline-none"
                  placeholder="Password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-2 text-gray-400 text-sm transition-all duration-200 
                    peer-placeholder-shown:top-6 
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-500 
                    peer-focus:top-2 
                    peer-focus:text-sm 
                    peer-focus:text-gray-400"
                >
                  Password
                </label>
              </div>
            </>
          )}

          <div className="flex justify-between items-center mb-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              >
                Log In
              </button>
            )}

            {!user && (
              <a href="#" className="text-red-500 text-sm hover:underline">
                Forget Password?
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
