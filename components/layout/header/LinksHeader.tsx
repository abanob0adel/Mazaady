"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LinksHeader() {
  const router = usePathname();
  const [activeLink, setActiveLink] = useState<string>("");
  useEffect(() => {
    setActiveLink(router);
  }, [router]);
  return (
    <>
      <div className="lg:flex gap-8 items-center flex-col lg:flex-row hidden">
        <Link
          href="/"
          className={`text-[18px] transition-all  ${
            activeLink == "/"
              ? "text-[#d20653] font-[700]"
              : "font-[400] text-[#828282] hover:text-[#6d6c6c]"
          }`}
        >
          Home
          {activeLink == "/" && (
            <div className="bg-[#d20653] rounded-t-[8px] w-[44px] h-[6px] absolute bottom-0" />
          )}
        </Link>
        <Link
          href="/blog"
          className={`text-[18px] ${
            activeLink == "/blog"
              ? "text-[#d20653] font-[700]"
              : "font-[400] text-[#828282] hover:text-[#6d6c6c]"
          }`}
        >
          Blog
          {activeLink == "/blog" && (
            <div className="bg-[#d20653] rounded-t-[8px] w-[44px] h-[6px] absolute bottom-0" />
          )}
        </Link>
        <Link
          href="/gifts"
          className={`text-[18px] ${
            activeLink == "/gifts"
              ? "text-[#d20653] font-[700]"
              : "font-[400] text-[#828282] hover:text-[#6d6c6c]"
          }`}
        >
          Gifts
          {activeLink == "/gifts" && (
            <div className="bg-[#d20653] rounded-t-[8px] w-[44px] h-[6px] absolute bottom-0" />
          )}
        </Link>
      </div>
    </>
  );
}
