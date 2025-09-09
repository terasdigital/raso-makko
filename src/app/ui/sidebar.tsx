"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "react-feather";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex">
      {/* Button Toggle */}
      <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#0F7173] text-white p-6 
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-6">Hai Sweet Tooth 👋 </h2>
        <ul className="space-y-4">
          <li className="hover:text-[#0F7173] hover:bg-white pl-2 rounded-lg cursor-pointer">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-[#0F7173] hover:bg-white pl-2 rounded-lg cursor-pointer-400 cursor-pointer">
            <a href="#about">Tentang Kami</a>
          </li>
          <li className="hover:text-[#0F7173] hover:bg-white pl-2 rounded-lg cursor-pointer cursor-pointer">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:text-[#0F7173] hover:bg-white pl-2 rounded-lg cursor-pointer-400 cursor-pointer">
            <a href="#kontak">Kontak</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
