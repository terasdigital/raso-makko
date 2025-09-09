import { chicle } from "@/app/ui/fonts";

export default function Hero() {
  return (
    <div className="flex items-center min-h-screen py-[1.4rem] bg-[url('/campur2.png')] bg-cover bg-center relative after:content-[''] after:absolute after:w-[100%] after:h-[20%] after:bg-linear-to-t after:from-[#f7db9d] after:to-transparent after:bottom-0">
      <h1
        className={`${chicle.className} text-[46px]/12  px-6 tracking-wider text-white text-shadow-lg text-stroke-black`}
      >
        Bagi Kamu Pecinta
        <span className="text-[#df3b57] text-stroke-white">CREAMY DESSERT</span>
        ,
        <br />
        Kamu di Tempat yang Tepat!
      </h1>
    </div>
  );
}
