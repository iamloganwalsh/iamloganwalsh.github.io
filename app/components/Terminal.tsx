"use client";

import { useState, useEffect, useRef } from "react";

export default function Terminal() {
    const [history, setHistory] = useState<
        { command: string; response: string }[]
    >([
        {
            command: "",
            response: `LoganOS v2.0.26
Type 'help' to see available commands.
Or click a file on the desktop →`
        }
    ]);

    const terminalEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [history]);

function focusInput(e: React.MouseEvent<HTMLDivElement>) {
    const selection = window.getSelection();

    if (!selection || selection.toString().length === 0) {
        inputRef.current?.focus();
    }
}

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const command = formData.get("command") as string;

        if (!command.trim()) return;

        const response = processCommand(command);

        if (response == 0) {
            form.reset();
            return;
        }

        setHistory((prev) => [
            ...prev,
            {
                command: command,
                response: response
            }
        ]);

        form.reset();
    }


    function processCommand(command: string) {
        const components = command.trim().split(/\s+/);

        switch (components[0]) {
            case "help":
                return `
AVAILABLE COMMANDS:
cat {file}                  Opens the designated file for viewing
about                       Prints a short introduction about myself
projects                    View a list of projects
projects {project_id}       View information about a specific project [1 - 5]
work                        View a list of previous work experiences
work {experience_id}        View information about a specific work experience
get                         Download my resume!
clear                       Clear terminal
`;

            case "about":
                return `
I'm Logan, a software developer currently working at Current limited (ha!) and currently based in Auckland, New Zealand. I also have paid experience in software consulting, teaching, and hospitality.

Outside of work, I enjoy exploring low-level programming, cybersecurity, and hardware projects. I'm always looking for opportunitieis to better understand how things work and build projects that challenge me.`

            case "projects":
                if (components.length == 1) {
                     return `
(1) Stock Analysis Platform
(2) RISC-V Emulator
(3) Encrypted Password Vault
(4) Low-Latency Order Matching Engine
(5) In-Memory Cache Engine`
                } else {
                    switch (components[1]) {
                        case "1":   // Stock Analysis Platform
                            return `Working alongside my good friend Ken1o, we developed an analytical platform to look at stock trends, collect trending news, generate AI reports, and are looking at introducing ML algorithms to predict future changes.`
                        case "2":
                            return `I developed a RISC-V emulator coded in raw C based on the RV32I instruction set. I implemented full memory management, custom dynamic allocation with heap banks, and memory-mapped I/O virtual routines.`
                        case "3":
                            return `A Rust-based password manager which utilises Argon2 for key derivation and ChaCha20-Poly1035 for secure, authenticated encryption.`
                        case "4":
                            return `An order matching engine implemented in Rust with a focus on optimisied performance. Utilises BTree and Hash maps to achieve nano-second processing, with performance benchmarked using the Criterion framework.`
                        case "5":
                            return `An in-memory key-value store using modern C++23, with CLI functionality. Implemented time to live (TTL), persistence, logging, and multi cache support.`
                        default:
                            return `Please enter a valid id (1 - 5).`
                        }   
                }

            case "work":
                if (components.length == 1) {
                    return `
(1) Software Developer @ Current Limited (07/26~)
(2) Capstone Project Experience (07/25 - 11/25)
(3) Teaching Assistant (07/24 - 11/25)
(4) Software Specialist Intern (01/24 - 02/24)
(5) Bar Staff (03/22 - 07/26)`
                } else {
                    switch (components[1]) {
                        case "1":
                            return `Currently working as an Associate Software Developer at Current Limited.`
                        case "2":
                            return `Collaborated in a 6-man agile team to build and deploy a workshop tool for educating the public on LLM's and chat interaction.`
                        case "3":
                            return `Worked with 100+ students over the course of 3 semesters to teach beginner Python concepts such as basic data strctures, algorithms, and OOP.`
                        case "4":
                            return `Worked directly with clients, owning projects end to end. Work involved consulting with clients, figuring out their pain points and migrating their existing solutions into new software that better suits their needs.`
                        case "5":
                            return `I was a member of bar staff at a local tasting studio for just over 4 years, interacting with customers and serving drinks and food within a collaborative and friendly team.`
                    }
                }

            case "clear":
                setHistory(() => [
                    {
                        command: "",
                        response: `LoganOS v2.0.26
Type 'help' to see available commands.
Or click a file on the desktop →`
                    }
                ]);
                return 0;

            default:
                return "ERR: Command not recognised.";
        }
    }


    return (
        <div
            onClick={focusInput}
            className="
            relative
            h-full
            w-full
            overflow-hidden
            border-r
            border-[#2a3a1f]/70
            bg-black/90
            shadow-[0_0_0_1px_rgba(163,230,53,0.08),0_0_30px_rgba(163,230,53,0.04)]
        ">

            {/* Green glow */}
            <div
                className="
                    absolute
                    -top-40
                    -left-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-lime-500/20
                    blur-[120px]
                "
            />


            {/* Terminal content */}
            <div className="
                relative
                z-10
                h-full
                overflow-y-auto
                no-scrollbar
                p-6
                font-mono
                text-[#a3e635]
            ">

                {history.map((entry, index) => (
                    <div key={index} className="mb-4">
                        {entry.command && (
                            <p>
                                guest@LoganOS:~$ {entry.command}
                            </p>
                        )}

                        <p className="whitespace-pre-wrap">
                            {entry.response}
                        </p>
                    </div>
                ))}


                {/* Scroll anchor */}
                <div ref={terminalEndRef} />


                {/* Current command input */}
                <form onSubmit={handleSubmit} className="flex">
                    <span className="shrink-0">
                        guest@LoganOS:~$
                    </span>

                    <input
                        ref={inputRef}
                        name="command"
                        autoFocus
                        autoComplete="off"
                        className="
                            ml-2
                            flex-1
                            bg-transparent
                            outline-none
                            text-[#a3e635]
                            caret-[#a3e635]
                        "
                    />
                </form>

            </div>
        </div>
    );
}