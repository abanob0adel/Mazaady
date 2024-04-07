"use client";
import Arrow from "@/components/icons/Arrow";
import Download from "@/components/icons/Download";
import ShareIcon from "@/components/icons/ShareIcon";
import ViewIcon from "@/components/icons/ViewIcon";
import MainTitle from "@/components/shared/MainTitle";
import Image from "next/image";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCard() {
  const [collapseQr, setCollapseQr] = useState(true);
  const collapse = () => {
    setCollapseQr(!collapseQr);
  };
  return (
    <>
      <div className="bg-[#fff] p-4 rounded-[21px]">
        <div className="flex justify-between items-center">
          <MainTitle title={"QR Code"} />
          <div className="flex gap-4 items-center">
            <button>
              <ViewIcon />
            </button>
            <button>
              <ShareIcon />
            </button>
            <button>
              <Download color="#333333" />
            </button>
            <button
              onClick={collapse}
              className={`lg:hidden block ${
                collapseQr ? "bg-[#FBE7EE]" : "bg-[#F6F4F5] rotate-[180deg]"
              } p-1 rounded-full`}
            >
              <Arrow />
            </button>
          </div>
        </div>
        <div className={`${!collapseQr && "hidden"} `}>
          <div className="bg-[#fff5e9] p-4 rounded-[18px] flex lg:gap-4 gap-2 items-center mt-4">
            <Download color="#FF951D" />
            <h4 className="text-[#333] text-[12px] font-[400]">
              Download the QR code or share it with your friends.
            </h4>
          </div>
          <div className="bg-gradient-to-r from-pink-600 via-pink-600 to-orange-500 p-4 rounded-[18px] mt-4">
            <div className="bg-white rounded-[18px] p-4 flex flex-col justify-center items-center gap-2">
              <Image
                src="/Logo.svg"
                alt="Mazaady Logo"
                width={152}
                height={48}
              />
              <MainTitle title={"Hala Ahmed"} />
              <QRCode
                value="http://localhost:3000/"
                bgColor="#fff"
                fgColor="#000"
                size={200}
              />
              <p className="text-[14px] font-[400] text-[#363333]">
                Follow Us on Mazaady
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
