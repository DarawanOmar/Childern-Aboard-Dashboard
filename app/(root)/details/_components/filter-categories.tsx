"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesData } from "../../category/_lib";
import ReusableSelect from "@/components/reusable/reusable-select-component";

function FilterCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesData,
  });
  return (
    <div>
      {isLoading ? (
        <ReusableSelect
          queryName="category_id"
          placeholder="چاوەڕی بکە"
          className="max-w-full w-full h-11"
          options={[]}
        />
      ) : (
        <ReusableSelect
          queryName="category_id"
          placeholder="چاوەڕی بکە"
          className="max-w-full w-full h-11"
          options={[
            { value: "all", label: "هەموو کاتیگۆرییەکان" },
            ...(data?.map((item) => ({
              value: item.id,
              label: item.label,
            })) || []),
          ]}
        />
      )}
    </div>
  );
}

export default FilterCategory;
