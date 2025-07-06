"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Link2 } from 'lucide-react';

export default function StudyDashboard() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress] = useState(48);

  const playlists = [
    {
      title: "OS by Neso Academy",
      url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
    },
    {
      title: "Data Structures by Abdul Bari",
      url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnq9e6hH0K_sS2lP_J4mGjsN",
    },
    {
      title: "Computer Networks by Gate Smashers",
      url: "https://www.youtube.com/playlist?list=PL6QGbhB9dLJHQUz5Fjc4F4nn7dx6Qz3WT",
    },
  ];

  const stats = {
    totalChapters: 52,
    completedChapters: 25,
    totalTopics: 210,
    completedTopics: 101,
    totalPlaylists: 12,
    completedPlaylists: 5,
  };

  const subjects = [
    {
      name: "Operating Systems",
      chapters: [
        "Introduction to OS", "Process Management", "CPU Scheduling", "Threads and Concurrency",
        "Memory Management", "Virtual Memory", "File Systems", "I/O Systems", "Deadlocks",
      ],
    },
    {
      name: "Data Structures",
      chapters: [
        "Arrays and Linked Lists", "Stacks and Queues", "Trees", "Binary Search Trees",
        "Heaps", "Graphs", "Hashing",
      ],
    },
    {
      name: "Computer Networks",
      chapters: [
        "OSI & TCP/IP Models", "IP Addressing", "Routing Algorithms", "Transport Layer Protocols",
        "Congestion Control", "Application Layer Protocols",
      ],
    },
  ];

  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [chapterProgressMap, setChapterProgressMap] = useState<{ [subject: string]: boolean[] }>(
    Object.fromEntries(subjects.map((subj) => [subj.name, Array(subj.chapters.length).fill(false)]))
  );

  const toggleChapter = (subject: string, index: number) => {
    setChapterProgressMap((prev) => {
      const updated = { ...prev };
      updated[subject] = [...updated[subject]];
      updated[subject][index] = !updated[subject][index];
      return updated;
    });
  };

  const toggleSubject = (subject: string) => {
    setExpandedSubject((prev) => (prev === subject ? null : subject));
  };

  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-geist-sans)] px-4 sm:px-6 py-8">
      {/* Top Bar */}
      <header className="flex justify-between items-center border-b border-black pb-4 mb-8 relative">
        <button
          onClick={() => router.push("/prep")}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold mx-auto">Study Dashboard</h1>
        <div className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black text-xl focus:outline-none">☰</button>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium absolute right-0 top-1/2 -translate-y-1/2">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/syllabus" className="hover:underline">Syllabus</Link>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mb-6 space-y-2 text-sm font-medium border-b border-black pb-4">
          <Link href="/" className="block text-blue-600">Home</Link>
          <Link href="/dashboard" className="block text-blue-600">Dashboard</Link>
          <Link href="/syllabus" className="block text-blue-600">Syllabus</Link>
        </div>
      )}

      {/* Menu Buttons */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <button
          onClick={() => router.push("/mock-test")}
          className="border border-black rounded-lg py-4 px-4 text-center font-medium hover:bg-black hover:text-white transition-colors"
        >
          Attempt Mock Test
        </button>
        <button
          onClick={() => router.push("/search")}
          className="border border-black rounded-lg py-4 px-4 text-center font-medium hover:bg-black hover:text-white transition-colors"
        >
          Search Content
        </button>
        <button
          onClick={() => router.push("/updates")}
          className="border border-black rounded-lg py-4 px-4 text-center font-medium hover:bg-black hover:text-white transition-colors"
        >
          Latest Updates
        </button>
      </section>

      {/* Progress */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2">Syllabus Progress</h2>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div className="bg-black h-full transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm mt-1 text-gray-600">{progress}% completed</p>
      </section>

      {/* Grid: Subjects & Playlists + Stats */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left: Subjects */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Current Subjects</h2>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.name} className="border border-black rounded-lg">
                <button
                  onClick={() => toggleSubject(subject.name)}
                  className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                >
                  <span>{subject.name}</span>
                  <span className="text-gray-500">{expandedSubject === subject.name ? "▲" : "▼"}</span>
                </button>
                {expandedSubject === subject.name && (
                  <ul className="px-4 pb-4 space-y-2">
                    {subject.chapters.map((chapter, index) => (
                      <li key={index} className="flex items-center justify-between border border-black rounded-md px-4 py-2">
                        <span>{chapter}</span>
                        <input
                          type="checkbox"
                          checked={chapterProgressMap[subject.name][index]}
                          onChange={() => toggleChapter(subject.name, index)}
                          className="form-checkbox h-5 w-5 text-black"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Playlists & Stats */}
        <div className="space-y-6">
          <div className="border border-black rounded-lg p-5">
            <h3 className="text-sm uppercase text-gray-500 mb-3">YouTube Playlists</h3>
            <ul className="space-y-2">
              {playlists.map((pl, idx) => (
                <li key={idx}>
                  <a href={pl.url} target="_blank" rel="noopener noreferrer" className="text-base font-medium underline hover:text-gray-700 flex items-center gap-1">
                    <Link2 className="w-4 h-4" /> {pl.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-black text-white p-4 rounded-lg">
              <h4 className="text-sm uppercase tracking-wide mb-1">Chapters</h4>
              <p className="text-lg font-bold">{stats.completedChapters}/{stats.totalChapters}</p>
            </div>
            <div className="bg-black text-white p-4 rounded-lg">
              <h4 className="text-sm uppercase tracking-wide mb-1">Topics</h4>
              <p className="text-lg font-bold">{stats.completedTopics}/{stats.totalTopics}</p>
            </div>
            <div className="bg-black text-white p-4 rounded-lg">
              <h4 className="text-sm uppercase tracking-wide mb-1">Playlists</h4>
              <p className="text-lg font-bold">{stats.completedPlaylists}/{stats.totalPlaylists}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
