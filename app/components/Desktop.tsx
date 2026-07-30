"use client";
import Image from "next/image";
import { useState, type MouseEvent } from "react";

const FILES = [
  { id: 'resume', icon: '📄', label: 'resume.pdf [DOWNLOAD]', cmd: 'get' },
  { id: 'about', icon: '👱🏼', label: 'about.txt', cmd: 'cat about.txt' },
  { id: 'projects', icon: '📁', label: 'projects/', cmd: 'ls projects/' },
  { id: 'skills', icon: '📊', label: 'skills.log', cmd: 'cat skills.log' },
  { id: 'contact', icon: '📬', label: 'contact.sh', cmd: './contact.sh' },
]

const SKILLS = [
    ["LANGUAGES", "Python", "TypeScript", "Rust", "C"],
    ["FRONTEND", "React", "Next.js", "Electron.js"],
    ["BACKEND", "FastAPI", "Node.js", "Flask"],
    ["DATA", "PostgreSQL", "Redis", "SQLite"],
    ["INFRA", "Docker", "AWS", "Vercel"]
];

const PROJECTS = {
    swe: [
        {
            title: "Stock Analysis Platform",
            image: "/window.svg",
            description: "Working alongside my good friend Ken1o, we developed an analytical platform to look at stock trends, collect trending news, generate AI reports, and are looking at introducing ML algorithms to predict future changes.",
            repoUrl: "https://github.com/Ken1o/stock_analysis_platform",
        },
        {
            title: "RISC-V Emulator",
            image: "/globe.svg",
            description: "I developed a RISC-V emulator coded in raw C based on the RV32I instruction set. I implemented full memory management, custom dynamic allocation with heap banks, and memory-mapped I/O virtual routines.",
            repoUrl: "https://github.com/iamloganwalsh/risc-v-emulator",
        },
        {
            title: "Encrypted Password Vault & Manager",
            image: "/globe.svg",
            description: "A Rust-based password manager which utilises Argon2 for key derivation and ChaCha20-Poly1035 for secure, authenticated encryption.",
            repoUrl: "https://github.com/iamloganwalsh/password_manager",
        },
        {
            title: "Low-Latency Order Matching Engine",
            image: "/globe.svg",
            description: "An order matching engine implemented in Rust with a focus on optimisied performance. Utilises BTree and Hash maps to achieve nano-second processing, with performance benchmarked using the Criterion framework.",
            repoUrl: "https://github.com/iamloganwalsh/rustex",
        },
        {
            title: "In-Memory Cache Engine",
            image: "/globe.svg",
            description: "An in-memory key-value store using modern C++23, with CLI functionality. Implemented time to live (TTL), persistence, logging, and multi cache support.",
            repoUrl: "https://github.com/iamloganwalsh/cpp_cache",
        },
    ],
    cyber: [
        {
            title: "ESP32-S BadUSB",
            image: "/next.svg",
            description: "WIP",
            repoUrl: "https://github.com/iamloganwalsh/404",
        },
    ],
};

const SKILL_PROFICIENCIES: Record<string, number> = {
    "Python": 9,
    "TypeScript": 7,
    "Rust": 6,
    "C": 5,
    "React": 8,
    "Next.js": 7,
    "Electron.js": 6,
    "FastAPI": 9,
    "Node.js": 7,
    "Flask": 6,
    "PostgreSQL": 8,
    "Redis": 8,
    "SQLite": 7,
    "Docker": 7,
    "AWS": 6,
    "Vercel": 6,
}

type WindowOptions = "about" | "projects" | "skills" | "contact";

export default function Desktop () {
    const [activeWindow, setActiveWindow] = useState<WindowOptions | null>(null);
    const [activeProjectTab, setActiveProjectTab] = useState<"swe" | "cyber">("swe");

    const openWindow = (windowName: WindowOptions) => {
        setActiveWindow(windowName);
    };

    const closeWindow = () => {
        setActiveWindow(null);
    };

    const FILE_ACTIONS = {
        resume: () => {
            const link = document.createElement('a');
            link.href = "/LoganWalshResume.pdf";
            link.download = "LoganWalshResume.pdf";
            link.click();
        },
        about: () => openWindow("about"),
        projects: () => openWindow("projects"),
        skills: () => openWindow("skills"),
        contact: () => openWindow("contact"),
    };

    const handleFileClick = (fileId: string) => {
        const action = FILE_ACTIONS[fileId as keyof typeof FILE_ACTIONS];
        if (action) {
            action();
        }
    };

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeWindow();
        }
    };

    const SkillMeter = ({ value }: { value: number }) => {
        const filledBlocks = Math.round(value);

        return (
            <div className="mt-1 flex items-center gap-1.5">
                <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <span
                            key={index}
                            className={`h-1.5 w-1.5 rounded-full ${index < filledBlocks ? "bg-lime-400" : "bg-zinc-700"}`}
                        />
                    ))}
                </div>
                <span className="text-[10px] text-zinc-400">{value}/10</span>
            </div>
        );
    };

    return (
        <div className="relative h-full overflow-hidden bg-black text-white font-mono">
            {/* Header */}
            <div className="h-6 border-b border-[#2a3a1f]/70 grid grid-cols-2 px-2">
                <div>LoganOS</div>
                <div className="flex w-full justify-end gap-4">
                    <p>/Home</p>
                    <p>12:00:00 PM</p>
                </div>
            </div>

            {/* Desktop Environment */}
            <div className="grid grid-cols-2 gap-6 p-8">
                {FILES.map(file => (
                    <button
                        key={file.id}
                        className="
                            flex
                            flex-col
                            items-center
                            gap-2
                            rounded-lg
                            p-3
                            transition
                            hover:bg-lime-500/10
                            cursor-pointer
                        "
                        onClick={() => handleFileClick(file.id)}
                    >
                        <span className="text-4xl">{file.icon}</span>

                        <span className="font-mono text-sm text-zinc-200">
                            {file.label}
                        </span>
                    </button>
                ))}
            </div>

            {activeWindow && (
                <div
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 p-2"
                    onClick={handleOverlayClick}
                >
                    <div className="w-full max-w-2xl overflow-hidden rounded-md border border-[#2a3a1f]/70 bg-[#0c0c0c] shadow-lg">
                        <div className="flex h-6 items-center justify-between border-b border-[#2a3a1f]/70 px-2">
                            <span>{activeWindow}.txt</span>

                            <button
                                onClick={closeWindow}
                                className="hover:text-red-400 cursor-pointer"
                            >
                                X
                            </button>
                        </div>

                        <div className="p-3">
                            {activeWindow === "about" && (
                                <><p className="mb-5">
                                    I&apos;m Logan, a software developer currently working at Current limited (ha!) and currently based in Auckland, New Zealand. I also have paid experience in software consulting, teaching, and hospitality.
                                </p>
                                
                                <p>
                                    Outside of work, I enjoy exploring low-level programming, cybersecurity, and hardware projects. I&apos;m always looking for opportunitieis to better understand how things work and build projects that challenge me.
                                </p></>
                            )}

                            {activeWindow === "projects" && (
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setActiveProjectTab("swe")}
                                            className={`cursor-pointer rounded border px-3 py-1 text-xs uppercase tracking-[0.3em] transition ${activeProjectTab === "swe"
                                                ? "border-lime-400 bg-lime-500/15 text-lime-300"
                                                : "border-white/10 bg-black/40 text-zinc-400 hover:text-zinc-200"
                                            }`}
                                        >
                                            SWE
                                        </button>
                                        <button
                                            onClick={() => setActiveProjectTab("cyber")}
                                            className={`cursor-pointer rounded border px-3 py-1 text-xs uppercase tracking-[0.3em] transition ${activeProjectTab === "cyber"
                                                ? "border-lime-400 bg-lime-500/15 text-lime-300"
                                                : "border-white/10 bg-black/40 text-zinc-400 hover:text-zinc-200"
                                            }`}
                                        >
                                            Cyber / Hardware
                                        </button>
                                    </div>

                                    <div className="max-h-[320px] space-y-3 overflow-y-auto pr-1 no-scrollbar">
                                        {PROJECTS[activeProjectTab].map((project) => (
                                            <div key={project.title} className="flex flex-col gap-2 rounded border border-white/10 bg-black/40 p-3 sm:flex-row sm:items-center">
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} preview`}
                                                    width={64}
                                                    height={64}
                                                    className="h-16 w-16 rounded border border-lime-500/20 bg-zinc-900 object-contain p-2"
                                                />
                                                <div className="flex-1">
                                                    <div className="text-sm font-semibold text-zinc-100">{project.title}</div>
                                                    <p className="mt-1 text-xs text-zinc-400">{project.description}</p>
                                                    <a
                                                        href={project.repoUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-2 inline-block text-[11px] text-lime-400 underline-offset-2 hover:underline"
                                                    >
                                                        View repo →
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeWindow === "skills" && (
                                <div className="space-y-2">
                                    {SKILLS.map(([category, ...items]) => (
                                        <div key={category} className="rounded border border-white/10 bg-black/40 p-2">
                                            <div className="mb-1 text-[10px] uppercase tracking-[0.3em] text-lime-300">
                                                {category}
                                            </div>
                                            <div className="space-y-1">
                                                {items.map((item) => (
                                                    <div key={item} className="flex items-center justify-between gap-2 text-sm">
                                                        <span className="text-zinc-100">{item}</span>
                                                        <SkillMeter value={SKILL_PROFICIENCIES[item] ?? 0} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeWindow === "contact" && (
                                <div className="space-y-4 text-sm text-zinc-300">
                                    <div className="rounded border border-white/10 bg-black/40 p-3">
                                        <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-lime-300">
                                            Contact
                                        </div>
                                        <div className="space-y-2">
                                            <div>
                                                <div className="mb-1 text-xs text-zinc-500">LinkedIn</div>
                                                <div className="rounded border border-white/10 bg-zinc-950/70 px-2 py-1 text-zinc-200">
                                                    <a
                                                        href={"https://www.linkedin.com/in/logwalsh/"}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-2 inline-block text-[11px] text-lime-400 underline-offset-2 hover:underline"
                                                    >
                                                        linkedin.com/in/logwalsh/
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-1 text-xs text-zinc-500">GitHub</div>
                                                <div className="rounded border border-white/10 bg-zinc-950/70 px-2 py-1 text-zinc-200">
                                                    <a
                                                        href={"https://github.com/iamloganwalsh"}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-2 inline-block text-[11px] text-lime-400 underline-offset-2 hover:underline"
                                                    >
                                                        github.com/iamloganwalsh
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-1 text-xs text-zinc-500">Email</div>
                                                <div className="rounded border border-white/10 bg-zinc-950/70 px-2 py-1 text-zinc-200">
                                                    <a
                                                        href={"mailto:cyberdev3@proton.me"}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-2 inline-block text-[11px] text-lime-400 underline-offset-2 hover:underline"
                                                    >
                                                        cyberdev3@proton.me
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded border border-white/10 bg-black/40 p-3">
                                        <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-lime-300">
                                            Interests
                                        </div>
                                        <p className="text-zinc-400">
                                            I have a broad range of technical interests, being software engineering, cybersecurity, embedded hardware, low-level development, and systems programming. Feel free to reach out with any questions or enquiries!
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
