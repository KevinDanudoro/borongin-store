import Hero from "@/components/section/Hero";
import Flashsale from "@/components/section/FlashSale";
import Category from "@/components/section/Category";
import BestSale from "@/components/section/BestSale/BestSale";
import SectionLayout from "@/components/layout/SectionLayout";
import { Separator } from "@/components/ui/separator";
import Service from "@/components/section/Service/Service";

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

      <Separator className="w-auto mb-36 h-0" />

      <SectionLayout>
        <Service />
      </SectionLayout>

      <Separator className="w-auto mb-28 h-0" />
    </main>
  );
}
