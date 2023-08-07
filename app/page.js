import LandingSection from "@/components/landing/LandingSection";
import styles from "./page.module.css";
import InfiniteText from "@/components/InfiniteText.jsx/InfiniteText";

export default function Home() {
  return (
    <main>
      <LandingSection />
      <InfiniteText/>
    </main>
  );
}
