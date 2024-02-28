import Hero from "@/components/implement/Section/Hero";
import Flashsale from "@/components/implement/Section/FlashSale";
import Category from "@/components/implement/Section/Category";
import { Separator } from "@/components/ui/separator";
import BestSale from "@/components/implement/Section/BestSale/BestSale";
import SectionLayout from "@/components/layout/SectionLayout";

export default function Home() {
  return (
    <main className="py-10">
      <SectionLayout>
        <Hero />
      </SectionLayout>

      <Separator className="mx-10 md:mx-20 w-auto my-20" />

      <section>
        <Flashsale />
      </section>

      <Separator className="mx-10 md:mx-20 w-auto my-20" />

      <SectionLayout>
        <Category />
      </SectionLayout>

      <Separator className="mx-10 md:mx-20 w-auto my-20" />

      <SectionLayout>
        <BestSale />
      </SectionLayout>
    </main>
  );
}
