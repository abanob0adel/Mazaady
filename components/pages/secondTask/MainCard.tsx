import AddCircle from "@/components/icons/AddCircle";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

export default function MainCard() {
  return (
    <>
      <div className="bg-[#fff] p-4 rounded-[21px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button className="bg-[#FFF5E9] border border-[#FF951D] py-1 px-4 rounded-[14px] text-[14px] text-[#FF951D]">
              Products
            </button>
            <button className=" border border-[#828282] py-1 px-4 rounded-[14px] text-[14px] text-[#828282] transition-all hover:text-[#FF951D] hover:border-[#FF951D] hover:bg-[#FFF5E9]">
              Articles
            </button>
            <button className=" border border-[#828282] py-1 px-4 rounded-[14px] text-[14px] text-[#828282] transition-all hover:text-[#FF951D] hover:border-[#FF951D] hover:bg-[#FFF5E9]">
              Reviews
            </button>
          </div>
          <Button
            variant="gradiant"
            className="flex gap-1 items-center fixed right-[2rem] top-[50%] lg:relative lg:right-0 lg:top-0 z-[999]"
          >
            <AddCircle />
            Add Review
          </Button>
        </div>
        <div className="flex items-center lg:gap-2 gap-1 mt-4">
          <h2 className="text-[32px] font-[700] text-[#363333]">Products</h2>
          <span className="text-[10px] font-[400]">(12)</span>
        </div>
        <ProductCard
          image={"/product_one.png"}
          title={
            "Jeep Car, new, used for only one time Jeep Car, new, used for only one time"
          }
          badge={"auction"}
          price={"100"}
          day={"3"}
          hour={"20"}
          minutes={"30"}
          isFav={false}
        />
        <ProductCard
          image={"/product_two.png"}
          title={
            "Jeep Car, new, used for only one time Jeep Car, new, used for only one time"
          }
          badge={"sale"}
          price={"200"}
          day={"4"}
          hour={"20"}
          minutes={"59"}
          isFav={true}
        />
        <ProductCard
          image={"/product_one.png"}
          title={"Six-piece clothing set (blouse - pants - hat and more)"}
          badge={"auction"}
          price={"200"}
          day={"4"}
          hour={"20"}
          minutes={"59"}
          isFav={false}
        />
        <ProductCard
          image={"/product_two.png"}
          title={
            "Jeep Car, new, used for only one time Jeep Car, new, used for only one time"
          }
          badge={"sale"}
          price={"200"}
          day={"4"}
          hour={"20"}
          minutes={"59"}
          isFav={true}
        />
        <ProductCard
          image={"/product_one.png"}
          title={"Six-piece clothing set (blouse - pants - hat and more)"}
          badge={"sale"}
          price={"200"}
          day={"4"}
          hour={"20"}
          minutes={"59"}
          isFav={false}
        />
      </div>
    </>
  );
}
