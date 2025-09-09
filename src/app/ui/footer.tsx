import { Instagram, Facebook } from "react-feather";

export default function Footer() {
  return (
    <div className="bg-[#d4e8c3] text-[#103829] text-center p-4">
      <h1 className="font-bold text-2xl ">Connect With Us</h1>
      <div className="mb-2">
        <a
          href="https://www.instagram.com/rasomakko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="inline m-2" />
        </a>
        <Facebook className="inline m-2" />
      </div>
      <p>&copy; 2025 Raso Makko. All rights reserved.</p>
    </div>
  );
}
