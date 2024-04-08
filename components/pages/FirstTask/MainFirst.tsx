"use client";
import { CategoriesResponse, getAllCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export default function MainFirst() {
  const { isFetching, isError, data } = useQuery<CategoriesResponse>({
    queryKey: ["category"],
    queryFn: async () => await getAllCategories(),
  });

  console.log(data);
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        MainFirst
      </div>
    </>
  );
}
