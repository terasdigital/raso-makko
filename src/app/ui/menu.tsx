import { chicle } from "@/app/ui/fonts";
import MenuCard from "@/app/ui/menu-cards";

export default function Menu() {
  return (
    <div className="mx-[7%]">
      <h1 className={`${chicle.className} text-[38px] pt-[5rem] text-center`}>
        Menu
      </h1>
      <p className="text-center max-w-[30rem] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        adipisci, eum nulla nobis earum voluptatibus ad rerum cum ullam tempora.
      </p>
      <div>
        <MenuCard />
      </div>
    </div>
  );
}
