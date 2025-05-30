"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";
import React from "react";

function TabComponet() {
  const [value, setValue] = useQueryState("type", {
    defaultValue: "Other",
    shallow: false,
    clearOnDefault: true,
  });
  return (
    <Tabs defaultValue={value} onValueChange={setValue}>
      <TabsList className="h-12 w-full">
        {data.map((item) => (
          <TabsTrigger key={item.id} value={item.value} className="h-9">
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default TabComponet;

const data = [
  {
    id: 1,
    name: "فیدباکەکان",
    value: "Suggestion",
  },
  {
    id: 2,
    name: "کێشەکان",
    value: "Issue",
  },
  {
    id: 3,
    name: "نمرەکان",
    value: "rating",
  },
  {
    id: 4,
    name: "پرسیارەکان",
    value: "Question",
  },
  {
    id: 5,
    name: "دیکە",
    value: "Other",
  },
];
