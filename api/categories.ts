import { axios } from "@/lib/axios";
export type CategoryChildren = {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  children: null;
  circle_icon: string;
  disable_shipping: number;
};
export type SingleCategory = {
  id: number;
  name: string;
  description: null;
  image: string;
  slug: string;
  children: CategoryChildren[];
  circle_icon: string;
  disable_shipping: number;
};
export type CategoriesResponse = {
  categories: SingleCategory[];
};
export const getAllCategories = async (): Promise<CategoriesResponse> => {
  const response = await axios.get("get_all_cats");
  return response.data.data.categories;
};
