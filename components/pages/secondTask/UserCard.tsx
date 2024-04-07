import Followers from "@/components/icons/Followers";
import Following from "@/components/icons/Following";
import Rate from "@/components/icons/Rate";
import MainTitle from "@/components/shared/MainTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UserCard() {
  return (
    <>
      <div className="bg-[#fff] p-4 rounded-[21px]">
        <Image
          src="/user_image.png"
          alt="User name"
          width={100}
          height={100}
          className="rounded-[24px] mb-4"
        />
        <MainTitle title={"Hala Ahmed"} size={"24"} />
        <p className="text-[#4f4f4f] text-[14px] font-[400] lg:w-[90%]">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Mackeup and Skin Care.
        </p>
        <div className="flex items-center lg:gap-4 gap-2 mt-4">
          <div className="w-1/3">
            <div className="bg-[#fff5e9] p-2 rounded-[18px] flex lg:gap-4 gap-2 items-center">
              <Following />
              <div>
                <MainTitle title="5" size="14" />
                <h4 className="text-[12px] text-[#ff951d] font-[400]">
                  Following
                </h4>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-[#fff5e9] p-2 rounded-[18px] flex lg:gap-4 gap-2 items-center">
              <Followers />
              <div>
                <MainTitle title="20" size="14" />
                <h4 className="text-[12px] text-[#ff951d] font-[400]">
                  Followers
                </h4>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-[#fff5e9] p-2 rounded-[18px] flex lg:gap-4 gap-2 items-center">
              <Rate />
              <div>
                <div className="flex items-center lg:gap-2 gap-1">
                  <MainTitle title="4.2" size="14" />
                  <span className="text-[10px] font-[400]">(15)</span>
                </div>
                <h4 className="text-[12px] text-[#ff951d] font-[400]">Rate</h4>
              </div>
            </div>
          </div>
        </div>
        <Button variant="gradiant" className="mt-4 w-full">
          Follow
        </Button>
      </div>
    </>
  );
}
