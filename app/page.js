"use client";
import React, { useState, useEffect } from "react";
import LandingSection from "@/src/components/landing/LandingSection";
import InfiniteText from "@/src/components/InfiniteText/InfiniteText";
import LandingText from "@/src/components/LandingText/landingText";
import MaskingText from "@/src/components/maskingText/maskingText";
import InfinityImage from "@/src/components/InfinityImage/InfinityImage";
import Preloader from "@/src/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       document.body.style.cursor = "default";
  //     }, 2000);
  //   })();
  // }, []);

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <LandingSection />
      <InfiniteText />
      <LandingText />
      <MaskingText />
      <InfinityImage />
    </main>
  );
} 