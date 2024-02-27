import HeroCarousel from "@/components/implement/HeroCarousel";
import Flashsale from "@/components/implement/FlashSale";

export default function Home() {
  return (
    <main className="py-10">
      <section className="mb-20 px-10 md:px-20 ">
        <HeroCarousel />
      </section>
      <section className="mb-20">
        <Flashsale />
      </section>
      a
    </main>
  );
}
