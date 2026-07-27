/* eslint-disable react/jsx-no-comment-textnodes */
export default function About() {
    const SKILLS = [
        ["Languages", "Python · TypeScript · Rust · C/C++"],
        ["Frontend", "React · Next.js · Electron.js"],
        ["Backend", "FastAPI · Node.js · Flask"],
        ["Data", "PostgreSQL · Redis · SQLite"],
        ["Infrastructure", "AWS · Docker · Vercel"]
    ];

    return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-x-16 mt-20">

        <div className="max-w-[42rem] text-sm leading-[1.9]">
            <p className="mb-5">
                I&apos;m Logan, a software developer currently working at Current limited (ha!) and currently based in Auckland, New Zealand. I also have paid experience in software consulting, teaching, and hospitality.
            </p>

            <p>
                Outside of work, I enjoy exploring low-level programming, cybersecurity, and hardware projects. I&apos;m always looking for opportunitieis to better understand how things work and build projects that challenge me.
            </p>
        </div>


        <div>
            <div className="mb-1 text-xs tracking-wider text-zinc-600">
                // STACK
            </div>

            {SKILLS.map(([cat, val], i) => (
                <div
                    key={cat}
                    className={`
                        grid grid-cols-[100px_1fr]
                        gap-4
                        py-2.5
                        ${i < SKILLS.length - 1 ? "border-b border-zinc-800" : ""}
                    `}
                >
                    <span className="text-xs font-meduoim text-[#2b3923]">
                        {cat}
                    </span>

                    <span className="text-xs text-[#617d4f]">
                        {val}
                    </span>
                </div>
            ))}
        </div>

    </div>
    );
}