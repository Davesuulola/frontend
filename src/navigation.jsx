import { useState } from "react";
import { NavLink } from "react-router-dom";

const chats = [
    { id: 1, title: "React hooks explained" },
    { id: 2, title: "Plan my week" },
    { id: 3, title: "Learn Python" },
];

const item =
    "block truncate rounded-lg px-3 py-2.5 text-sm text-[#ececec] hover:bg-[#2f2f2f]";

export default function Navigation() {
    const [open, setOpen] = useState(true);

    return (
        <aside
            className={`flex h-screen flex-col bg-[#171717] p-2 transition-all duration-200 overflow-hidden ${open ? "w-65" : "w-15"
                }`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="self-start rounded-lg px-2.5 py-2 text-lg text-[#b4b4b4] hover:bg-[#2f2f2f]"
            >
                ☰
            </button>

            <NavLink to="/" className={item}>
                ＋ {open && "New chat"}
            </NavLink>

            {open && (
                <>
                    <nav className="mt-4 flex-1 overflow-y-auto">
                        <p className="px-3 py-2 text-xs text-[#b4b4b4]">Recent</p>
                        {chats.map((c) => (
                            <NavLink
                                key={c.id}
                                to={`/chat/${c.id}`}
                                className={({ isActive }) =>
                                    `${item} ${isActive ? "bg-[#2f2f2f]" : ""}`
                                }
                            >
                                {c.title}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="border-t border-white/10 pt-2">
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-[#2f2f2f]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10a37f] text-sm font-semibold text-white">
                                D
                            </div>
                            <span className="truncate text-sm">Dara</span>
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
}