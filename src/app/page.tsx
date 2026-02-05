import { Hero } from "@/components/home/Hero";
import { CheapestThisWeek } from "@/components/home/CheapestThisWeek";
import { RisersAndFallers } from "@/components/home/RisersAndFallers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CheapestThisWeek />
      <RisersAndFallers />
    </>
  );
}
