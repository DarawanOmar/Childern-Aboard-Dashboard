"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { LuLoaderCircle } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { addCategory, addCategoryType } from "../../_type";
import { addData, updateData } from "@/app/(root)/services/dataService";
import { TextField } from "@/components/reusable/input-form-reusable";
import { DialogClose } from "@/components/ui/dialog";
import { UploadDropzone } from "@/utils/uploadthing";
import { UploadCloud, Palette } from "lucide-react";
import { deleteIamge } from "@/app/(root)/details/_action";

type filmFormProps = {
  handleClose?: () => void;
  info?: Partial<addCategoryType>;
  isEdit?: boolean;
  id?: string;
};

// Color Picker Component
const ColorPicker = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (color: string) => void;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [customColor, setCustomColor] = React.useState(value || "#000000");

  const predefinedColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
    "#F8C471",
    "#82E0AA",
    "#F1948A",
    "#AED6F1",
    "#D7BDE2",
    "#A3E4D7",
    "#F9E79F",
    "#FADBD8",
    "#D5DBDB",
    "#2C3E50",
  ];

  const handleColorSelect = (color: string) => {
    setCustomColor(color);
    onChange(color);
    setIsOpen(false);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    onChange(newColor);
  };

  const isValidHex = (hex: string) => {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
  };

  return (
    <div className="relative">
      <FormLabel>ڕەنگ</FormLabel>
      <div className="mt-2">
        <div
          className="flex items-center gap-3 p-3 border border-gray-300 rounded-md cursor-pointer hover:border-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className="w-8 h-8 rounded-md border-2 border-gray-200 flex-shrink-0"
            style={{ backgroundColor: isValidHex(value) ? value : "#000000" }}
          />
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-700">
              {value || "ڕەنگ هەڵبژێرە"}
            </div>
            <div className="text-xs text-gray-500">
              کلیک بکە بۆ هەڵبژاردنی ڕەنگ
            </div>
          </div>
          <Palette className="w-5 h-5 text-gray-400" />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {/* Custom Hex Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                کۆدی ڕەنگ (Hex)
              </label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  placeholder="#000000"
                  className="flex-1 font-mono"
                />
                <Button
                  type="button"
                  onClick={() => handleColorSelect(customColor)}
                  disabled={!isValidHex(customColor)}
                  size="sm"
                  className="px-4"
                >
                  جێبەجێکردن
                </Button>
              </div>
              {customColor && !isValidHex(customColor) && (
                <p className="text-xs text-red-500 mt-1">
                  کۆدی ڕەنگ دروست نیە (نموونە: #FF5733)
                </p>
              )}
            </div>

            {/* Color Picker Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ڕەنگ هەڵبژێرە
              </label>
              <input
                type="color"
                value={isValidHex(customColor) ? customColor : "#000000"}
                onChange={handleCustomColorChange}
                className="w-full h-12 border border-gray-300 rounded cursor-pointer"
              />
            </div>

            {/* Predefined Colors */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ڕەنگە ئامادەکان
              </label>
              <div className="grid grid-cols-10 gap-2">
                {predefinedColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`w-8 h-8 rounded-md border-2 hover:scale-110 transition-transform ${
                      value === color
                        ? "border-gray-800 ring-2 ring-gray-400"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-4 flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                داخستن
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function AddAlphaBet({ handleClose, info, id, isEdit }: filmFormProps) {
  const router = useRouter();
  const [pending, setPending] = React.useTransition();
  const form = useForm<addCategoryType>({
    resolver: zodResolver(addCategory),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addCategoryType) {
    setPending(async () => {
      isEdit
        ? await updateData(
            "kurdish_alphabet",
            id as string,
            values,
            "/alpha-bets"
          )
        : await addData("kurdish_alphabet", values, "/alpha-bets");
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
              .slice(0, 6)
              .filter(([key]) => key !== "color") // Exclude color from regular fields
              .map(([key, value]) => (
                <TextField
                  key={key}
                  name={key as keyof addCategoryType}
                  control={form.control}
                  label={labelTranslate(key)}
                  className="max-w-full"
                />
              ))}

            {/* Color Picker Field */}
            <div className="col-span-1 sm:col-span-2">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ColorPicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

export default AddAlphaBet;

const getDefaultValues = (values: Partial<addCategoryType> = {}) => {
  const defaultValues: addCategoryType = {
    letter: "",
    order: "",
    example: "",
    meaning: "",
    sentence: "",
    sentence_meaning: "",
    audio_url: "",
    color: "",
  };

  return { ...defaultValues, ...values };
};

function labelTranslate(name: string) {
  switch (name) {
    case "color":
      return " ڕەنگ";
    case "example":
      return " نموونەی کوردی";
    case "letter":
      return " پیت";
    case "meaning":
      return " نموونەی ئینگلیزی";
    case "order":
      return " ڕیزبەندی";
    case "sentence":
      return " ڕستەی کوردی";
    case "sentence_meaning":
      return " ڕستەی ئینگلیزی";
    default:
      return name;
  }
}
