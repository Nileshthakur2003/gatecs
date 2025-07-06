import { Home, User, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-row w-full max-w-5xl">
                <nav className="flex flex-col justify-start mr-12 min-w-[120px]">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-base font-semibold hover:underline hover:underline-offset-4"
                    >
                        <Home size={20} />
                        Home
                    </Link>
                </nav>
                <main className="flex flex-col gap-8 items-center sm:items-start max-w-2xl w-full">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left tracking-tight">
                        About GATE CS Prep
                    </h1>
                    <p className="text-lg sm:text-xl text-center sm:text-left text-muted-foreground">
                        GATE CS Prep is a platform dedicated to helping computer science students excel in the GATE (Graduate Aptitude Test in Engineering) exam. Our mission is to provide high-quality resources, effective practice tools, and a supportive community for aspirants.
                    </p>
                   
              
                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">What We Offer</h2>
                        <ul className="list-disc list-inside text-base font-[family-name:var(--font-geist-mono)]">
                            <li>Comprehensive study materials for all core CS subjects</li>
                            <li>Curated mock tests and previous year questions</li>
                            <li>Progress tracking and smart analytics</li>
                            <li>Regular updates and new resources</li>
                            <li>Supportive community and expert guidance</li>
                        </ul>
                    </section>
                    
                    <section className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Meet the Team</h2>
                        <div className="flex gap-6 flex-wrap">
                            <div className="flex flex-col items-center">
                                <User size={48} />
                                <span className="font-semibold mt-2">A. Sharma</span>
                                <span className="text-xs text-muted-foreground">Founder</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Users size={48} />
                                <span className="font-semibold mt-2">R. Gupta</span>
                                <span className="text-xs text-muted-foreground">Content Lead</span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
