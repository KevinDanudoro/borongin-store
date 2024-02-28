import Hero from "@/components/implement/Section/Hero";
import Flashsale from "@/components/implement/Section/FlashSale";
import Category from "@/components/implement/Section/Category";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="py-10">
      <section className="mb-20 px-10 md:px-20">
        <Hero />
      </section>

      <section className="">
        <Flashsale />
      </section>

      <Separator className="mx-10 md:mx-20 w-auto my-20" />

      <section className="px-10 md:px-20">
        <Category />
      </section>
    </main>
  );
}
