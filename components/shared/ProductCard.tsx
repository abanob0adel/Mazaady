import Image from "next/image";
import FavoriteIcon from "../icons/FavoriteIcon";
interface ProductType {
  image: string;
  title: string;
  badge: "auction" | "sale";
  price: string;
  day: string;
  hour: string;
  minutes: string;
  isFav: boolean;
}
const ProductCard: React.FC<ProductType> = ({
  image,
  title,
  badge,
  price,
  day,
  hour,
  minutes,
  isFav,
}) => {
  return (
    <>
      <div className="my-8 flex justify-between items-center relative">
        <div className="flex gap-4 lg:items-center items-start lg:w-[90%]">
          <div className="relative lg:w-[20%] w-[70%]">
            <Image
              src={image}
              alt={title}
              width={145}
              height={127}
              className="w-[100%]"
            />
            {badge == "auction" && (
              <div className="absolute bottom-0 right-[3px]">
                <div className="bg-[#D20653] rounded-tl-[33px] rounded-br-[33px] lg:text-[12px] text-[8px] text-white px-4 py-2">
                  Live Auction
                </div>
              </div>
            )}
            {badge == "sale" && (
              <div className="absolute bottom-0 right-[3px]">
                <div className="bg-[#FF951D] rounded-tl-[33px] rounded-br-[33px] lg:text-[12px] text-[8px] text-white px-4 py-2">
                  Hot Sale
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-[80%]">
            <h2 className="product-title lg:text-[18px] text-[12px] text-[#333]">
              {title}
            </h2>
            <h2 className="lg:text-[18px] text-[12px] font-[400] text-[#828282] capitalize lg:my-4 my-1">
              starting price{" "}
              <span className="font-[700] lg:text-[24px] text-[12px] text-[#333]">
                {" "}
                {price} EGP
              </span>
            </h2>
            <div className="flex gap-2 items-center flex-wrap">
              <h2 className="lg:text-[18px] text-[12px] font-[400] text-[#828282] capitalize w-full lg:w-fit">
                Lot starts in
              </h2>
              <h4 className="bg-[#FFF5E9] lg:px-4 px-2 py-1 text-[#FF951D] font-[700] lg:text-[20px] text-[12px] rounded-full capitalize">
                {day} <span className="lg:text-[14px] text-[8px]">days</span>{" "}
              </h4>
              <h4 className="bg-[#FFF5E9] lg:px-4 px-2 py-1 text-[#FF951D] font-[700] lg:text-[20px] text-[12px] rounded-full capitalize">
                {hour} <span className="lg:text-[14px] text-[8px]">hours</span>{" "}
              </h4>
              <h4 className="bg-[#FFF5E9] lg:px-4 px-2 py-1 text-[#FF951D] font-[700] lg:text-[20px] text-[12px] rounded-full capitalize">
                {minutes}{" "}
                <span className="lg:text-[14px] text-[8px]">minutes</span>{" "}
              </h4>
            </div>
          </div>
        </div>

        <button className="bg-[#fff] p-1 rounded-full lg:relative absolute left-0 top-0">
          <FavoriteIcon isFav={isFav} />
        </button>
      </div>
    </>
  );
};
export default ProductCard;
