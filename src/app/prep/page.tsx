"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      {/* Top Navigation Bar */}
      <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold">GATE CS Dashboard</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <button onClick={() => router.push("/")} className="hover:underline text-blue-600">
            Home
          </button>
          <button onClick={() => router.push("/syllabus")} className="hover:underline text-blue-600">
            Syllabus
          </button>
          <button onClick={() => router.push("/mock-tests")} className="hover:underline text-blue-600">
            Mock Tests
          </button>
          <button onClick={() => router.push("/contact")} className="hover:underline text-blue-600">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 py-4 space-y-2 text-sm font-medium border-b border-gray-200 dark:border-gray-700">
          <button onClick={() => router.push("/")} className="block text-blue-600">
            Home
          </button>
          <button onClick={() => router.push("/syllabus")} className="block text-blue-600">
            Syllabus
          </button>
          <button onClick={() => router.push("/mock-tests")} className="block text-blue-600">
            Mock Tests
          </button>
          <button onClick={() => router.push("/contact")} className="block text-blue-600">
            Contact
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
          What would you like to do today?
        </h2>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
          <div
            onClick={() => handleNavigate("/prep/study")}
            className="cursor-pointer bg-gray-100 dark:bg-[#1e1e1e] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">📘 Preparation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore the full syllabus, track your progress, and dive deep into core subjects.
            </p>
          </div>
          <div
            onClick={() => handleNavigate("/prep/mock")}
            className="cursor-pointer bg-gray-100 dark:bg-[#1e1e1e] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">📝 Mock Tests</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test your knowledge with curated mock exams and previous year papers.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          <div className="bg-gray-50 dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm">
            <h4 className="text-sm text-gray-500 mb-1">Syllabus Covered</h4>
            <p className="text-2xl font-bold text-green-600">42%</p>
          </div>
          <div className="bg-gray-50 dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm">
            <h4 className="text-sm text-gray-500 mb-1">Next Topics to Cover</h4>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              Dynamic Programming, SQL Joins
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm">
            <h4 className="text-sm text-gray-500 mb-1">Last Mock Score</h4>
            <p className="text-2xl font-bold text-blue-600">68%</p>
          </div>
          <div className="bg-gray-50 dark:bg-[#1a1a1a] p-5 rounded-lg shadow-sm">
            <h4 className="text-sm text-gray-500 mb-1">Mocks Attempted</h4>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}