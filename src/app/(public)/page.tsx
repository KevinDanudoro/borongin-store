import HeroCarousel from "@/components/implement/HeroCarousel";
import Flashsale from "@/components/implement/FlashSale";

export default function Home() {
  return (
    <main className="px-10 md:px-20 py-10">
      <section className="mb-20">
        <HeroCarousel />
      </section>

      <section className="mb-20">
        <Flashsale />
      </section>
    </main>
  );
}
