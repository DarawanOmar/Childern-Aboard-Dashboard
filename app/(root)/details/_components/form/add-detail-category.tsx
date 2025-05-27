"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { LuLoaderCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { addDetailCategory, addDetailCategoryType } from "../../_type";
import { addData, updateData } from "@/app/(root)/services/dataService";
import { TextField } from "@/components/reusable/input-form-reusable";
import { DialogClose } from "@/components/ui/dialog";

type filmFormProps = {
  handleClose?: () => void;
  info?: Partial<addDetailCategoryType>;
  isEdit?: boolean;
  id?: string;
};

function AddCategories({ handleClose, info, id, isEdit }: filmFormProps) {
  const router = useRouter();
  const [pending, setPending] = React.useTransition();
  const form = useForm<addDetailCategoryType>({
    resolver: zodResolver(addDetailCategory),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addDetailCategoryType) {
    setPending(async () => {
      isEdit
        ? await updateData("items", id, values)
        : await addData("items", values);
      toast.success("بە سەرکەوتووی جێبەجێ کرا");
      handleClose && handleClose();
      router.refresh();
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-3">
            {Object.entries(form.getValues())
              .slice(0, 11)
              .map(([key, value]) => (
                <TextField
                  key={key}
                  name={key as keyof addDetailCategoryType}
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

const getDefaultValues = (values: Partial<addDetailCategoryType> = {}) => {
  const defaultValues: addDetailCategoryType = {
    audio_url: "",
    category_id: "",
    description: "",
    description_ar: "",
    image_url: "",
    is_course: "",
    location: "",
    location_ar: "",
    name: "",
    name_ar: "",
    video_url: "",
    long_description: [],
    long_description_ar: [],
  };

  return { ...defaultValues, ...values };
};

function labelTranslate(name: string) {
  switch (name) {
    case "audio_url":
      return " لینکی دەنگ";
    case "category_id":
      return "کاتیگۆری";
    case "description":
      return "وەسف";
    case "description_ar":
      return "وەسفی کوردی";
    case "image_url":
      return "وێنە";
    case "is_course":
      return "ئایا کۆرسە؟";
    case "location":
      return "ڕەنگ";
    case "location_ar":
      return "شوێنی کوردی";
    case "name":
      return "ناوی ئینگلیزی";
    case "name_ar":
      return "ناوی کوردی";
    case "video_url":
      return "لینکی ڤیدیۆ";
    case "long_description":
      return "وەسفی درێژ";
    case "long_description_ar":
      return "وەسفی درێژ عەرەبی";

    default:
      return name;
  }
}
