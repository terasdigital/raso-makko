import { chicle } from "@/app/ui/fonts";

export default function Hero() {
  return (
    <div className="flex items-center min-h-screen py-[1.4rem] bg-[url('/campur2.png')] bg-cover bg-center relative after:content-[''] after:absolute after:w-[100%] after:h-[30%] after:bg-linear-to-t after:from-[rgba(247,219,157)] dark:after:from-[rgb(30,30,30)] after:via-[rgba(247, 219, 157, 30%)] dark:after:via-[rgba(30,30,30,60%)] after:via-50% dark:after:via-50% dark:after:from-[#1e1e1e] after:to-transparent after:bottom-0">
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
