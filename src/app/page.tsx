import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left tracking-tight">
          GATE CS PREP
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Crack GATE CS with Confidence 🚀
        </h2>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Master core subjects like Algorithms, OS, DBMS, and more.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Practice with curated mock tests and previous year questions.
          </li>
          <li className="tracking-[-.01em]">
            Track your progress and stay ahead with smart analytics.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/signup"
          >
            Start Preparing
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/syllabus"
          >
            View Syllabus
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/resources"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Study Materials
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/mock-tests"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Mock Tests
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact Us →
        </a>
      </footer>
    </div>
  );
}