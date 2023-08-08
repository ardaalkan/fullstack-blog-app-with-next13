import LandingSection from "@/src/components/landing/LandingSection";
import InfiniteText from "@/src/components/InfiniteText/InfiniteText";
import LandingText from "@/src/components/LandingText/landingText";
import MaskingText from "@/src/components/maskingText/maskingText";
import InfinityImage from "@/src/components/InfinityImage/InfinityImage";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <InfiniteText />
      <LandingText />
      <MaskingText/>
      <InfinityImage/>
    </main>
  );
}
