import React, { useState } from 'react';
import mobile from '../assets/mobile.jpeg';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      alert("Thanks for creating account!");
      navigate('/login');
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(`Signup failed: ${error.message}`);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign in success:", user);
      alert(`Welcome ${user.displayName}!`);
      navigate('/'); // redirect after Google signup
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert(`Google sign-in failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-between bg-white">
      <div className="flex flex-col md:flex-row w-full shadow-lg mt-8 overflow-hidden">
        {/* Left Image Side */}
        <div className="md:w-1/2 flex justify-between">
          <img src={mobile} alt="Signup visual" className="max-h-[550px]" />
        </div>

        {/* Right Form Side */}
        <div className="md:w-1/2 p-20 bg-white">
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-500 cursor-pointer text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Create Account
            </button>
          </form>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full border cursor-pointer border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5 mr-2 cursor-pointer"
            />
            Sign up with Google
          </button>

          <p className="text-sm text-center mt-6 text-gray-500">
            Already have account?{' '}
            <a href="/login" className="text-black font-medium underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
