import Banner from "@/components/home/banner";
import HowItWorks from "@/components/home/howItWorks";
import Pricing from "@/components/home/pricing";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
<>
<Banner/>
<HowItWorks/>
<Pricing/>
</>
  );
}
