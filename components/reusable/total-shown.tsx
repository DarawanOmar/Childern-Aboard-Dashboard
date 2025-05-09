import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  text?: string;
  className?: string;
  total: number | string;
  classMoney?: string;
};

function TotalShown({
  text = "کۆی گشتی",
  className,
  total,
  classMoney,
}: Props) {
  return (
    <div className={cn("", className)}>
      <div
        className={cn(
          "bg-white dark:bg-white/5 dark:border py-1 px-6 text-foreground flex flex-col items-center border rounded-[12px]"
        )}
      >
        <span className="text-xs">{text}</span>
        {typeof total === "string" ? (
          <div className="text-xs ">{total}</div>
        ) : (
          <div className={cn("flex gap-1 text-xs text-primary  ", classMoney)}>
            {Number(total).toLocaleString("en-US", {
              maximumFractionDigits: 1,
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default TotalShown;
