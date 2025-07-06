"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen relative bg-white dark:bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      {/* Home Button in Top-Left */}
      <button
        onClick={handleHomeClick}
        className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        ← Home
      </button>

      {/* Centered Form */}
      <div className="flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Create Your Account</h2>
            <p className="mt-2 text-sm text-gray-500">
              Start your journey to ace GATE CS
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("../auth/login")}
              className="text-blue-600 hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}