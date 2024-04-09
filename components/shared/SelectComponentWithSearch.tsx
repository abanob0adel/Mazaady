"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SingleCategory } from "@/api/categories";

interface CategorySelectProps {
  categories: any;
  onCategorySelect: (categoryId: string) => void;
  placeholder: string;
  value?: string;
}

const SelectComponentWithSearch: React.FC<CategorySelectProps> = ({
  categories,
  onCategorySelect,
  placeholder,
  value,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSelectCategory = (categoryId: string) => {
    onCategorySelect(categoryId);
  };

  return (
    <Select
      onValueChange={(value) => {
        handleSelectCategory(value);
      }}
      defaultValue={value}
    >
      <SelectTrigger className="w-[360px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {categories
          .filter((item: any) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item: SingleCategory) => (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponentWithSearch;
