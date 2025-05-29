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

function AddAdmin({ handleClose, info, id, isEdit }: filmFormProps) {
  const router = useRouter();
  const [pending, setPending] = React.useTransition();
  const form = useForm<addCategoryType>({
    resolver: zodResolver(addCategory),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addCategoryType) {
    setPending(async () => {
      isEdit
        ? await updateData("admin", id as string, values, "/admin")
        : await addData("admin", values, "/admin");
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
            {Object.entries(form.getValues())
              .slice(0, 4)
              .map(([key, value]) => (
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

export default AddAdmin;

const getDefaultValues = (values: Partial<addCategoryType> = {}) => {
  const defaultValues: addCategoryType = {
    email: "",
    name: "",
    image_url: "",
    password: "",
    createdAt: new Date().toISOString(),
  };

  return { ...defaultValues, ...values };
};

function labelTranslate(name: string) {
  switch (name) {
    case "name":
      return " ناو";
    case "email":
      return " ئیمەیڵ";
    case "image_url":
      return " وێنە";
    case "password":
      return " پاسۆرد";
    case "label":
      return " ناو ئینگلیزی";
    default:
      return name;
  }
}
