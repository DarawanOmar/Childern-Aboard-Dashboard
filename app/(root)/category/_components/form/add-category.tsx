"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { LuLoaderCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { addCategory, addCategoryType } from "../../_type";
import { addData, updateData } from "@/app/(root)/services/dataService";
import { TextField } from "@/components/reusable/input-form-reusable";
import { DialogClose } from "@/components/ui/dialog";

type filmFormProps = {
  handleClose?: () => void;
  info?: Partial<addCategoryType>;
  isEdit?: boolean;
  id?: string;
};

function AddCategories({ handleClose, info, id, isEdit }: filmFormProps) {
  const router = useRouter();
  const [pending, setPending] = React.useTransition();
  const form = useForm<addCategoryType>({
    resolver: zodResolver(addCategory),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addCategoryType) {
    setPending(async () => {
      isEdit
        ? await updateData("categories", id, values)
        : await addData("categories", values);
      toast.success("بە سەرکەوتووی جێبەجێ کرا");
      handleClose && handleClose();
      router.refresh();
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-3">
            {Object.entries(form.getValues()).map(([key, value]) => (
              <TextField
                key={key}
                name={key as keyof addCategoryType}
                control={form.control}
                label={labelTranslate(key)}
                className="max-w-full"
              />
            ))}
          </div>

          <div className="max-w-lg mx-auto gap-16 w-full mt-16 mb-6 flex justify-between items-center">
            <Button type="submit" className="w-full py-[23px]">
              {pending ? (
                <LuLoaderCircle className="animate-spin transition-all duration-500" />
              ) : isEdit ? (
                "گۆرانکاری"
              ) : (
                "تۆمارکردن"
              )}
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                effect={"shine"}
                className="w-full py-[23px] bg-transparent border border-primary hover:text-white text-primary transition-all duration-500"
              >
                ڕەتکردنەوە
              </Button>
            </DialogClose>
          </div>
        </form>
      </Form>
    </>
  );
}

export default AddCategories;

const getDefaultValues = (values: Partial<addCategoryType> = {}) => {
  const defaultValues: addCategoryType = {
    color: "",
    icon: "",
    image_url: "",
    label: "",
    label_ar: "",
  };

  return { ...defaultValues, ...values };
};

function labelTranslate(name: string) {
  switch (name) {
    case "color":
      return " ڕەنگ";
    case "icon":
      return " ئایکۆن";
    case "image_url":
      return " وێنە";
    case "label_ar":
      return " ناوی کوردی";
    case "label":
      return " ناو ئینگلیزی";
    default:
      return name;
  }
}
