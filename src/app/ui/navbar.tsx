import Image from "next/image";
import { ShoppingBag } from "react-feather";
import Sidebar from "./sidebar";

export default function Navbar() {
  return (
    <nav className="bg-[#c3e8ce]/80 border-b-[1px] border-b-[#103829]/40 shadow-md fixed top-0 z-999 w-full">
      <div className="mx-auto max-w-[80%] px-2 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center pb-3">
            <Image
              // className="dark:invert"
              src="/logo-raso-makko.png"
              alt="Raso Makko Logo"
              width={80}
              height={10}
            />
          </div>
          <div className="flex space-x-4 text-lg hidden md:block">
            <a
              href="#hero"
              className="text-[#103829] relative hover:text-[#d4e8c3] after:content-[''] after:absolute after:inset-0 after:bg-[#103829] after:transition-transform hover:after:scale-x-[1] after:scale-x-[0] p-2 after:rounded-md after:duration-400"
            >
              <span className="relative z-10">Home</span>
            </a>
            <a
              href="#about"
              className="text-[#103829] relative hover:text-[#d4e8c3] after:content-[''] after:absolute after:inset-0 after:bg-[#103829] after:transition-transform hover:after:scale-x-[1] after:scale-x-[0] p-2 after:rounded-md after:duration-400"
            >
              <span className="relative z-10">Tentang Kami</span>
            </a>
            <a
              href="#menu"
              className="text-[#103829] relative hover:text-[#d4e8c3] after:content-[''] after:absolute after:inset-0 after:bg-[#103829] after:transition-transform hover:after:scale-x-[1] after:scale-x-[0] p-2 after:rounded-md after:duration-400"
            >
              <span className="relative z-10">Menu</span>
            </a>
            <a
              href="#kontak"
              className="text-[#103829] relative hover:text-[#d4e8c3] after:content-[''] after:absolute after:inset-0 after:bg-[#103829] after:transition-transform hover:after:scale-x-[1] after:scale-x-[0] p-2 after:rounded-md after:duration-400"
            >
              <span className="relative z-10">Kontak</span>
            </a>
          </div>
          <div className=" flex space-x-1 items-center">
            <div className="text-[#103829] relative hover:text-[#d4e8c3] after:content-[''] after:absolute after:inset-0 after:bg-[#103829] after:transition-transform hover:after:scale-x-[1] after:scale-x-[0] p-2 after:rounded-md after:duration-400 ">
              <span className="relative z-10">
                <ShoppingBag />
              </span>
            </div>
            <div className="text-[#103829] relative hover:text-[#d4e8c3] after:content-[''] after:absolute after:inset-0 after:bg-[#103829] after:transition-transform hover:after:scale-x-[1] after:scale-x-[0] p-2 after:rounded-md after:duration-400 ">
              <span className="relative z-10 md:hidden">
                <Sidebar />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
