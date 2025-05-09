import React from "react";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { FileInput, FileUploader } from "@/components/ui/file-upload";
import { CheckCheck } from "lucide-react";
import { FileSvgDraw } from "@/public/icons";
import { sizeImage } from "@/lib/globals";

interface FileUploadFieldProps {
  control: any;
  name: string;
  label: string;
  className?: string;
}

const FileUploadFieldForm: React.FC<FileUploadFieldProps> = ({
  control,
  name,
  label,
  className = "",
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">{label}</FormLabel>
          <FileUploader
            value={field.value ? [field.value] : null}
            onValueChange={(files) => {
              const selectedFile = files?.[0] || null;
              field.onChange(selectedFile);
            }}
            dropzoneOptions={{
              multiple: false,
              maxFiles: 19,
              maxSize: sizeImage,
            }}
            reSelect={true}
            className={`relative bg-background rounded-lg ${className}`}
          >
            <FileInput className="outline-dashed outline-1 outline-white">
              <div className="flex items-center justify-center flex-col">
                {field.value && (
                  <div className="flex justify-center gap-3 items-center text-primary w-full py-2.5">
                    <CheckCheck size={20} />
                    <p className="text-sm">Uploaded</p>
                  </div>
                )}
                {!field.value && <FileSvgDraw />}
              </div>
            </FileInput>
          </FileUploader>
        </FormItem>
      )}
    />
  );
};

export default FileUploadFieldForm;
