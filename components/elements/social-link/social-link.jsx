// SocialLinks.js dosyanızda href prop'unu kaldırın
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  CircleDotDashed,
} from "lucide-react";
import Link from "next/link";

const SocialLinks = ({ platform }) => {
  const getIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return <Facebook />;
      case "twitter":
        return <Twitter />;
      case "instagram":
        return <Instagram />;
      case "youtube":
        return <Youtube />;
      case "linkedin":
        return <Linkedin />;
      case "github":
        return <Github />;
      case "main":
        return <CircleDotDashed />;
      default:
        return null; // Geçersiz platformlar için boş döner
    }
  };

  return <Link href="/">{getIcon(platform)}</Link>;
};

export default SocialLinks;
