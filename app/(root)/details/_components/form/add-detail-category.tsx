"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "sonner";
import { LuLoaderCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { addDetailCategory, addDetailCategoryType } from "../../_type";
import { addData, updateData } from "@/app/(root)/services/dataService";
import { TextField } from "@/components/reusable/input-form-reusable";
import { DialogClose } from "@/components/ui/dialog";
import { UploadDropzone } from "@/utils/uploadthing";
import { UploadCloud } from "lucide-react";
import { deleteIamge } from "../../_action";
import { cn } from "@/lib/utils";
import { SelectFormField } from "@/components/reusable/reusable-select";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesData } from "@/app/(root)/category/_lib";

type filmFormProps = {
  handleClose?: () => void;
  info?: Partial<addDetailCategoryType>;
  isEdit?: boolean;
  id?: string;
};

function AddCategories({ handleClose, info, id, isEdit }: filmFormProps) {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesData,
  });
  const [pending, setPending] = React.useTransition();
  const form = useForm<addDetailCategoryType>({
    resolver: zodResolver(addDetailCategory),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addDetailCategoryType) {
    console.log("Values submitted:", values);
    setPending(async () => {
      isEdit
        ? await updateData("items", id as string, values, "/details")
        : await addData("items", values, "/details");
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
            <TextField
              name={"category_name"}
              control={form.control}
              label={labelTranslate("category_name")}
              className="max-w-full"
            />
            {isLoading ? (
              <SelectFormField
                control={form.control}
                name="category_id"
                label="کاتیگۆری"
                placeholder="چاوەڕی بکە"
                className="max-w-full w-full"
                options={[]}
                isForm
              />
            ) : (
              <SelectFormField
                isForm
                control={form.control}
                name="category_id"
                label="کاتیگۆری"
                placeholder="کاتیگۆری هەڵبژێرە"
                className="max-w-full w-full"
                options={
                  data?.map((item) => ({
                    value: item.id,
                    label: item.label,
                  })) || []
                }
              />
            )}
            {Object.entries(form.getValues())
              .slice(0, 10)
              .map(([key, value]) => (
                <TextField
                  key={key}
                  name={key as keyof addDetailCategoryType}
                  control={form.control}
                  label={labelTranslate(key)}
                  className="max-w-full"
                  classFormItem={cn("", {
                    "col-span-2": key === "audio_url",
                  })}
                />
              ))}

            <FormField
              control={form.control}
              name="is_course"
              render={({ field }) => (
                <FormItem className="flex self-center mt6 gap-3">
                  <FormControl>
                    <Checkbox
                      className="h-5 w-5"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-base">ئایا کۆرسە؟</FormLabel>
                </FormItem>
              )}
            />
            <div className="col-span-2 mx-3 mt-5">
              <FormLabel>ساوند ئەپڵۆد بکە</FormLabel>
              <UploadDropzone
                endpoint="imageUploader"
                appearance={{
                  button: "bg-primary text-white w-full mb-3",
                  allowedContent: "text-primary",
                  label: "text-primary",
                  container: "border border-primary",
                }}
                className="text-primary "
                content={{
                  label: "کلیک بکە یان ساوندەکە ڕابکێشە",
                  allowedContent: "ساوندەکە کەمتر لە 30 MB بێت",
                  uploadIcon(arg) {
                    return <UploadCloud size={40} />;
                  },
                }}
                onClientUploadComplete={async (res) => {
                  if (isEdit && info?.audio_url && res[0].url) {
                    const url = info?.audio_url;
                    const key = url.split("/").pop();
                    const response = await deleteIamge(key as string);
                    toast.success(response.message);
                  }
                  form.setValue("audio_url", res[0].url);
                  toast.success("بە سەرکەوتووی ئەپڵۆد کرا");
                }}
                onUploadError={(error: Error) => {
                  toast.error(`کێشە: ${error.message}`);
                }}
              />
            </div>
          </div>

          <div className="max-w-lg mx-auto gap-16 w-full mt-10 flex justify-between items-center">
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
    name: "",
    name_ar: "",
    description: "",
    description_ar: "",
    // location: "",
    // location_ar: "",
    // long_description: "",
    // long_description_ar: "",
    image_url: "",
    video_url: "",
    category_name: "",
    is_course: false,
    category_id: "",
    audio_url: "",
    createdAt: new Date().toISOString(),
  };

  return { ...defaultValues, ...values };
};

function labelTranslate(name: string) {
  switch (name) {
    case "audio_url":
      return " لینکی دەنگ";
    case "category_name":
      return " ناوی کاتیگۆری";
    case "category_id":
      return "کاتیگۆری";
    case "description":
      return "وەسفی ئینگلیزی";
    case "description_ar":
      return "وەسفی کوردی";
    case "image_url":
      return "وێنە";
    case "is_course":
      return "ئایا کۆرسە؟";
    case "location":
      return "ناونیشانی ئینگلیزی";
    case "location_ar":
      return "ناونیشانی کوردی";
    case "name":
      return "ناوی ئینگلیزی";
    case "name_ar":
      return "ناوی کوردی";
    case "video_url":
      return "لینکی ڤیدیۆ";
    case "long_description":
      return " وەسفی درێژ ئینگلیزی";
    case "long_description_ar":
      return "وەسفی درێژ کوردی";

    default:
      return name;
  }
}
