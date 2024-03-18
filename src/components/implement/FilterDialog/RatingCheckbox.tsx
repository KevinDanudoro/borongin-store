import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Star from "@/components/ui/star";
import React from "react";
import type { FC } from "react";
import { Control } from "react-hook-form";

interface RatingCheckboxProps {
  control: Control<{ rating?: number[] | null | undefined }>;
  value: number;
}

const RatingCheckbox: FC<RatingCheckboxProps> = ({ control, value }) => {
  return (
    <FormField
      control={control}
      name="rating"
      render={({ field }) => (
        <FormItem className="flex flex-row space-y-0 items-center space-x-3">
          <FormControl>
            <Checkbox
              {...field}
              value={value}
              checked={field.value?.includes(value)}
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...(field.value ?? []), value])
                  : field.onChange(field.value?.filter((val) => val !== value));
              }}
            />
          </FormControl>
          <FormLabel className="flex flex-row items-center space-x-1">
            {value} <Star variant="filled" />
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

export default RatingCheckbox;
