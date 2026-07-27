"use client";
import { useState } from "react";
import Terminal from "./components/Terminal";
import Desktop from "./components/Desktop";
// import Navbar from "./components/Navbar";
// import DynamicContent from "./components/DynamicContent";

export default function Home() {
  const [section, setSection] = useState("about");

  return (
    <main className="grid grid-cols-2 h-screen">
      <Terminal />
      <Desktop />
    </main>
  );
}