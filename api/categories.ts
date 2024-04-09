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
  children?: CategoryChildren[];
  circle_icon: string;
  disable_shipping: number;
};
export type CategoriesResponse = {
  categories: SingleCategory[];
};

type Option = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  child: boolean;
};
export type SingleProperties = {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: string;
  list: boolean;
  type: string;
  value: string;
  other_value: string;
  options: Option[];
};
export type PropertiesResponse = {
  data: SingleProperties[];
};

export const getAllCategories = async (): Promise<CategoriesResponse> => {
  const response = await axios.get("get_all_cats");
  return response.data.data;
};
export const getProperties = async ({
  id,
}: {
  id: string;
}): Promise<PropertiesResponse> => {
  const response = await axios.get(`properties?cat=${id}`);
  return response.data;
};
