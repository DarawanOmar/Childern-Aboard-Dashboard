import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CustomTabsFieldProps {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export const TabFormFeild = ({
  control,
  name,
  label,
  defaultValue,
  options,
  className = "",
}: CustomTabsFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`w-full  ${className}`}>
          <FormLabel className="font-sirwan-meduim">{label}</FormLabel>
          <FormControl>
            <Tabs
              value={field.value}
              onValueChange={field.onChange}
              defaultValue={defaultValue}
            >
              <TabsList className="w-full border h-11">
                {options.map((option) => (
                  <TabsTrigger
                    key={option.value}
                    value={option.value}
                    className="py-2 w-1/2"
                  >
                    {option.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
