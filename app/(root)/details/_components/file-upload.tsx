import { FormLabel } from "@/components/ui/form";
import { UploadDropzone } from "@/utils/uploadthing";
import { UploadCloud } from "lucide-react";
import React from "react";

function FileUpload() {
  return (
    <div className="">
      <FormLabel>وێنە</FormLabel>
      <UploadDropzone
        endpoint="imageUploader"
        appearance={{
          button: "bg-primary text-white ",
          allowedContent: "text-primary",
          label: "text-primary",
          container: "border border-primary",
        }}
        className="text-primary "
        content={{
          label: "کلیک بکە یان وێنەکە ڕابکێشە",
          allowedContent: "وێنەکە کەمتر لە ١ MB بێت",
          uploadIcon(arg) {
            return <UploadCloud size={40} />;
          },
        }}
        //   onClientUploadComplete={async (res) => {
        //     if (isEdit && info?.image && res[0].url) {
        //       const url = info?.image;
        //       const key = url.split("/").pop();
        //       const response = await deleteIamge(key as string);
        //       toast.success(response.message);
        //     }
        //     form.setValue("image", res[0].url);
        //     toast.success("بە سەرکەوتووی ئەپڵۆد کرا");
        //   }}
        //   onUploadError={(error: Error) => {
        //     toast.error(`کێشە: ${error.message}`);
        //   }}
      />
    </div>
  );
}

export default FileUpload;
