import { chicle } from "@/app/ui/fonts";
import Image from "next/image";
import { MessageCircle, Mail } from "react-feather";

export default function Kontak() {
  return (
    <div className="mx-[7%]">
      <h1 className={`${chicle.className} text-[38px] pt-[5rem] text-center`}>
        Kontak Kami
      </h1>
      <div className="bg-[#fae7bd] rounded-xl p-6 mt-6 mb-10 max-w-[65%] mx-auto flex justify-between items-center flex-wrap">
        <Image
          src={"/event.png"}
          width={150}
          height={150}
          alt="kontak raso makko"
          className="mx-auto mb-4 lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] object-contain"
        />
        <div className=" items-center mx-auto">
          <p className="text-[30px] text-center font-semibold">
            Ada Acara? Ada Pesta?
          </p>
          <p className="text-center text-[18px]">
            Let&apos;s celebrate together! 🎊 <br />
            Hubungi Kami Untuk Detail Lebih Lanjut.
          </p>
          <ul className="text-[16px] text-center mt-4 space-y-2">
            <li className="flex items-center gap-2 justify-center">
              <MessageCircle />{" "}
              <a
                href="https://wa.me/6281515557584"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: 0815-1555-7584
              </a>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <Mail /> Email: rasomakko@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
