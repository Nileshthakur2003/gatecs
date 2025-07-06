"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const mockTests = [
  { id: 1, title: "Mock Test 1", date: "2025-07-01", score: 72, status: "Completed" },
  { id: 2, title: "Mock Test 2", date: "2025-07-05", score: null, status: "Pending" },
  { id: 3, title: "Mock Test 3", date: "2025-07-10", score: null, status: "Locked" },
];

export default function MockTestsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-geist-sans)]">
      {/* Top Navigation */}
      <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-black relative">
        {/* Back button */}
        <button
          onClick={() => router.push("/prep")}
          className="absolute left-6 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          ← Back
        </button>

        <h1 className="text-xl font-bold mx-auto">Mock Tests</h1>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-6 text-sm font-medium absolute right-6 top-1/2 -translate-y-1/2">
          <button onClick={() => router.push("/")} className="hover:underline">Home</button>
          <button onClick={() => router.push("/dashboard")} className="hover:underline">Dashboard</button>
          <button onClick={() => router.push("/syllabus")} className="hover:underline">Syllabus</button>
        </div>

        {/* Hamburger for mobile */}
        <div className="sm:hidden absolute right-6 top-1/2 -translate-y-1/2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl focus:outline-none">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden border-b border-black px-6 py-4 space-y-2 text-sm font-medium">
          <button onClick={() => router.push("/")} className="block text-left w-full text-blue-600">Home</button>
          <button onClick={() => router.push("/dashboard")} className="block text-left w-full text-blue-600">Dashboard</button>
          <button onClick={() => router.push("/syllabus")} className="block text-left w-full text-blue-600">Syllabus</button>
        </div>
      )}

      {/* Summary Section */}
      <section className="px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-black">
        <div className="bg-black text-white p-4 rounded-lg">
          <h4 className="text-sm uppercase tracking-wide">Total Tests</h4>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-black text-white p-4 rounded-lg">
          <h4 className="text-sm uppercase tracking-wide">Completed</h4>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="bg-black text-white p-4 rounded-lg">
          <h4 className="text-sm uppercase tracking-wide">Average Score</h4>
          <p className="text-2xl font-bold">72%</p>
        </div>
        <div className="bg-black text-white p-4 rounded-lg">
          <h4 className="text-sm uppercase tracking-wide">Next Test</h4>
          <p className="text-base font-semibold">Mock Test 2</p>
        </div>
      </section>

      {/* Test List */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-6">Available Tests</h2>
        <div className="space-y-4">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="border border-black rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{test.title}</h3>
                <p className="text-sm text-gray-700">Scheduled: {test.date}</p>
              </div>
              <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4">
                {test.status === "Completed" && (
                  <span className="text-sm font-medium">Score: {test.score}%</span>
                )}
                {test.status === "Pending" && (
                  <button
                    onClick={() => router.push(`/mock-tests/${test.id}`)}
                    className="px-4 py-1.5 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
                  >
                    Start Test
                  </button>
                )}
                {test.status === "Locked" && (
                  <span className="text-sm text-gray-500 italic">Locked</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
