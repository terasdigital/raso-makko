import { chicle } from "@/app/ui/fonts";
import Image from "next/image";

export default function About() {
  return (
    <div className="mx-[7%]">
      <h1 className={`${chicle.className} text-[38px] pt-[5rem] text-center`}>
        Tentang Kami
      </h1>
      <div className="flex shrink grow flex-[4rem] max-md:flex-wrap max-md:text-center justify-center mt-5">
        <Image
          src={"/esteler.png"}
          width={500}
          height={500}
          alt="tentang raso makko"
          className="mr-5 object-cover rounded-4xl w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mb-5"
        />
        <div>
          <h1 className={`${chicle.className} font-bold text-2xl`}>
            Kenapa Memilih Kami?
          </h1>
          <p>
            Raso Makko adalah sebuah usaha yang bergerak di bidang makanan
            khususnya dessert kekinian yang berlokasi di Jakarta. Kami
            mengkhususkan diri pada pembuatan makko, yaitu dessert berbahan
            dasar agar-agar yang dikombinasikan dengan berbagai topping menarik
            seperti boba, nata de coco, dan jelly. Misi kami adalah memberikan
            pengalaman kuliner yang menyenangkan dan memuaskan bagi para
            pelanggan dengan menyajikan makko yang lezat, segar, dan berkualitas
            tinggi. Kami berkomitmen untuk menggunakan bahan-bahan terbaik dan
            menjaga kebersihan serta kualitas produk kami agar selalu memenuhi
            harapan pelanggan.
          </p>
        </div>
      </div>
    </div>
  );
}
