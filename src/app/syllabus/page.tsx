"use client";
import { useState } from "react";
import Link from "next/link";

const syllabusData = [
    { subject: "Algorithms", topics: "Sorting, Searching, Graphs, Dynamic Programming" },
    { subject: "Data Structures", topics: "Arrays, Trees, Heaps, Hashing" },
    { subject: "Operating Systems", topics: "Processes, Scheduling, Memory Management" },
    { subject: "Databases", topics: "ER Model, SQL, Normalization, Transactions" },
    { subject: "Computer Networks", topics: "OSI, TCP/IP, Routing, Congestion Control" },
    { subject: "Theory of Computation", topics: "Automata, Grammars, Turing Machines" },
    { subject: "Compiler Design", topics: "Lexical Analysis, Parsing, Code Generation" },
    { subject: "Digital Logic", topics: "Boolean Algebra, Combinational Circuits" },
    { subject: "Computer Organization", topics: "CPU, Memory, I/O, Pipelining" },
    { subject: "Discrete Mathematics", topics: "Logic, Set Theory, Graph Theory" },
];

export default function SyllabusPage() {
    const [search, setSearch] = useState("");
    const [progress, setProgress] = useState<number[]>(Array(syllabusData.length).fill(0));
    const [topicProgress, setTopicProgress] = useState<{ [subject: string]: { [topic: string]: boolean } }>(() => {
        const obj: { [subject: string]: { [topic: string]: boolean } } = {};
        syllabusData.forEach((item) => {
            obj[item.subject] = {};
            item.topics.split(",").map((t) => t.trim()).forEach((topic) => {
                obj[item.subject][topic] = false;
            });
        });
        return obj;
    });
    const [open, setOpen] = useState<number | null>(null);

    const filtered = syllabusData.filter(
        (item) =>
            item.subject.toLowerCase().includes(search.toLowerCase()) ||
            item.topics.toLowerCase().includes(search.toLowerCase())
    );

    const totalTopics = syllabusData.reduce((acc, item) => acc + item.topics.split(",").length, 0);
    const completed = Object.values(topicProgress).reduce(
        (acc, subj) => acc + Object.values(subj).filter(Boolean).length,
        0
    );
    const percent = Math.round((completed / totalTopics) * 100);

    const handleCheck = (idx: number) => {
        setProgress((prev) => {
            const next = [...prev];
            next[idx] = next[idx] ? 0 : 1;
            return next;
        });
        const subject = syllabusData[idx].subject;
        setTopicProgress((prev) => {
            const next = { ...prev };
            const allChecked = Object.values(next[subject]).every(Boolean);
            Object.keys(next[subject]).forEach((topic) => {
                next[subject][topic] = !allChecked;
            });
            return next;
        });
    };

    const handleTopicCheck = (subject: string, topic: string) => {
        setTopicProgress((prev) => {
            const next = { ...prev };
            next[subject] = { ...next[subject], [topic]: !next[subject][topic] };
            return next;
        });
    };

    const handleDownload = () => {
        const content = syllabusData
            .map((item, i) => `${i + 1}. ${item.subject}: ${item.topics}`)
            .join("\n");
        const blob = new Blob([content], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "gate_cs_syllabus.pdf";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 sm:p-10 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                        type="button"
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm px-4 h-10"
                    >
                        <Link
                            href="/"
                            className="text-sm font-medium text-white-600 hover:underline hover:underline-offset-4"
                        >
                            ← Home
                        </Link>
                    </button>
                    <h1 className="text-3xl font-extrabold tracking-tight">GATE CS Syllabus</h1>
                </div>
                <button
                    type="button"
                    onClick={handleDownload}
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm px-4 h-10"
                >
                    Download PDF
                </button>
            </div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search subject or topic..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                />
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">Progress:</span>
                    <span className="text-xs text-gray-500">{percent}% covered</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-black dark:bg-black h-3 rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                    />
                </div>
            </div>

            <div className="space-y-2">
                {filtered.length === 0 && (
                    <div className="px-4 py-4 text-center text-gray-500">
                        No subjects found.
                    </div>
                )}
                {filtered.map((item, idx) => {
                    const realIdx = syllabusData.findIndex((s) => s.subject === item.subject);
                    const isOpen = open === realIdx;
                    const topicsArr = item.topics.split(",").map((t) => t.trim());
                    const allTopicsChecked = topicsArr.every((topic) => topicProgress[item.subject]?.[topic]);
                    return (
                        <div
                            key={item.subject}
                            className="border border-gray-200 rounded-lg bg-white dark:bg-[#181818] shadow-sm"
                        >
                            <button
                                type="button"
                                className="w-full flex items-center justify-between px-4 py-3 text-left font-bold focus:outline-none"
                                onClick={() => setOpen(isOpen ? null : realIdx)}
                                aria-expanded={isOpen}
                                aria-controls={`topics-${realIdx}`}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={allTopicsChecked}
                                        onChange={() => handleCheck(realIdx)}
                                        aria-label={`Mark ${item.subject} as done`}
                                    />
                                    <span>{item.subject}</span>
                                </div>
                                <span className="ml-2 text-gray-400">
                                    {isOpen ? "▲" : "▼"}
                                </span>
                            </button>
                            {isOpen && (
                                <div
                                    id={`topics-${realIdx}`}
                                    className="px-8 pb-4 text-sm text-gray-700 dark:text-gray-300"
                                >
                                    <ul className="space-y-2">
                                        {topicsArr.map((topic) => (
                                            <li key={topic} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={!!topicProgress[item.subject]?.[topic]}
                                                    onChange={() => handleTopicCheck(item.subject, topic)}
                                                    aria-label={`Mark topic ${topic} as done`}
                                                />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
