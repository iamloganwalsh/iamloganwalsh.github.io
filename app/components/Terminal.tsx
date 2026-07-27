"use client";

import { useState, useEffect, useRef } from "react";

export default function Terminal() {
    const [history, setHistory] = useState<
        { command: string; response: string }[]
    >([
        {
            command: "",
            response: `PortfolioOS 2026 — Logan Walsh
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
For more information on a specific command, type HELP command-name

open {file}                 Opens the designated file for viewing
about                       Prints a short introduction about myself
projects                    View a list of projects
projects {project_name}     View information about a specific project
work                        View a list of previous work experiences
work {experience_name}      View information about a specific work experience
clear                       Clear terminal
`;

            case "clear":
                setHistory(() => [
                    {
                        command: "",
                        response: `PortfolioOS 2026 — Logan Walsh
Type 'help' to see available commands.
Or click a file on the desktop →`
                    }
                ]);
                return 0;

            default:
                return "ERR";
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
            rounded-r-[20px]
            rounded-l-none
            border
            border-[#2a3a1f]/70
            border-l-0
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
                                logan@portfolio:~$ {entry.command}
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
                        logan@portfolio:~$
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