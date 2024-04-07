import Image from "next/image";
import Link from "next/link";
import SearchBox from "../icons/SearchBox";
import Notification from "../icons/Notification";
import { Button } from "../ui/button";
import AddCircle from "../icons/AddCircle";
import LanguageIcon from "../icons/LanguageIcon";
import MenuIcon from "../icons/MenuIcon";
import LinksHeader from "./header/LinksHeader";

export default function Header() {
  return (
    <>
      <div className="bg-[#fff]">
        <div className="container py-4 relative">
          <div className="flex justify-between items-center">
            <div className="flex gap-8 items-center">
              <div className="flex items-end gap-2 ">
                <button className="block lg:hidden">
                  <MenuIcon />
                </button>
                <Link href="/">
                  <Image
                    src="/Logo.svg"
                    alt="Mazaady Logo"
                    width={108}
                    height={43}
                  />
                </Link>
              </div>
              <LinksHeader />
            </div>
            <div className="flex gap-4 items-center">
              <button>
                <SearchBox />
              </button>
              <div className="h-[38px] w-[1px] bg-[#ffead2] hidden lg:block" />
              <button>
                <Notification />
              </button>
              <div className="h-[38px] w-[1px] bg-[#ffead2] hidden lg:block" />
              <button>
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="w-[24px] lg:w-[40px]"
                />
              </button>
              <Button
                variant="gradiant"
                className="lg:flex hidden gap-1 items-center "
              >
                <AddCircle />
                Add Products
              </Button>
              <button className="lg:flex gap-2 justify-center items-center hidden">
                <LanguageIcon />
                <div className="h-[38px] w-[1px] bg-[#e0e0e0]" />
                <h4 className="text-black font-[700] text-[18px]">EN</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
