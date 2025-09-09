import "@/app/ui/globals.css";
import Menu from "./ui/menu";
import About from "./ui/about";
import Hero from "./ui/hero";
import Kontak from "./ui/kontak";
import Footer from "./ui/footer";

export default function Page() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="kontak">
        <Kontak />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
