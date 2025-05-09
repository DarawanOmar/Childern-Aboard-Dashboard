import React from "react";
import { SelectFormField } from "../reusable/reusable-select";
import { cn } from "@/lib/utils";

function LoadingSelectSkeleton({
  form,
  isLabel = false,
  className,
}: {
  form: any;
  isLabel?: boolean;
  className?: string;
}) {
  return (
    <SelectFormField
      control={form.control}
      name="partie_id"
      label={isLabel ? "چاوەڕوان بکە" : ""}
      isLabel={isLabel}
      placeholder=""
      className={cn(
        "dark:bg-black/15 dark:border animate-pulse transition-all duration-500 w-[200px]",
        className
      )}
      options={[]}
      isForm
    />
  );
}

export default LoadingSelectSkeleton;
