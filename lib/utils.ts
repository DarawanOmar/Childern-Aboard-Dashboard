import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const customRound = (value: number): number => {
  const remainder = value % 1000;
  if (remainder >= 0 && remainder < 250) {
    return value - remainder;
  } else if (remainder >= 250 && remainder < 500) {
    return value - remainder + 250;
  } else if (remainder >= 500 && remainder < 750) {
    return value - remainder + 500;
  } else if (remainder >= 750 && remainder < 1000) {
    return value - remainder + 750;
  }
  return value;
};
