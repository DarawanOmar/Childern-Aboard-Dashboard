import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

interface TextFieldProps {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: string;
  className?: string;
  col?: number;
}

export const TextAreaField: React.FC<TextFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
  className,
  col = 3,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className={cn(
                "resizenone bg-[#F2F2F2] dark:bg-black/10 dark:border dark:border-primary rounded-xl",
                className
              )}
              {...field}
              cols={col}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
