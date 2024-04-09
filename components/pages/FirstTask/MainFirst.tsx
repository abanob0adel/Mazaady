"use client";
import {
  CategoriesResponse,
  PropertiesResponse,
  SingleProperties,
  getAllCategories,
  getProperties,
} from "@/api/categories";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SelectComponentWithSearch from "@/components/shared/SelectComponentWithSearch";
import Loading from "@/components/shared/Loading";
export default function MainFirst() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const [selectedCategorySub, setSelectedCategorySub] = useState<string>("");
  const { isFetching, data: mainCategory } = useQuery<CategoriesResponse>({
    queryKey: ["category"],
    queryFn: async () => await getAllCategories(),
  });
  const {
    isFetching: getOptionFetch,
    data: getOptions,
    refetch,
  } = useQuery<PropertiesResponse>({
    queryKey: ["options"],
    queryFn: async () => await getProperties({ id: selectedCategorySub }),
  });

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };
  const handleSubCategory = (categoryId: string) => {
    setSelectedCategorySub(categoryId);
  };
  useEffect(() => {
    if (selectedCategorySub) {
      refetch();
    }
  }, [selectedCategorySub]);
  if (isFetching || getOptionFetch) {
    return <Loading />;
  }

  console.log(getOptions);
  return (
    <>
      <div className="container py-8">
        {mainCategory && (
          <div className="mt-2">
            All Categories
            <SelectComponentWithSearch
              categories={mainCategory.categories}
              onCategorySelect={handleSelectCategory}
              placeholder="Categories"
            />
          </div>
        )}
        {selectedCategoryId && mainCategory ? (
          <div className="mt-2">
            {" "}
            Sub Categories
            <SelectComponentWithSearch
              categories={
                mainCategory.categories.find(
                  (category) => category.id === parseInt(selectedCategoryId)
                )?.children || []
              }
              onCategorySelect={handleSubCategory}
              placeholder="Sub Categories"
            />
          </div>
        ) : (
          <h4>Please Select Parent Category</h4>
        )}
        {getOptions &&
          getOptions?.data?.map((item: SingleProperties) => (
            <div className="mt-2">
              {" "}
              {item.name}
              <SelectComponentWithSearch
                categories={item.options}
                onCategorySelect={() => {}}
                placeholder={item.name}
              />
            </div>
          ))}
      </div>
    </>
  );
}
