"use client";
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
                    <div className="w-full max-w-md overflow-hidden rounded-md border border-[#2a3a1f]/70 bg-[#0c0c0c] shadow-lg">
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
                                <p>
                                    My projects...
                                </p>
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
                                <p>
                                    Contact me...
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
