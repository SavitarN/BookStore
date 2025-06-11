import React from "react";

import { useForm, Controller } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CategorySelect = ({setCategory}) => {
  console.log("category select component");
  const {
   control,
 
  } = useForm();


  
  return (
    <div className=" font-semibold absolute top-50 left-50 ">
      <form >
             <Controller
        control={control}
        name="category"
        rules={{ required: true }}
        render={({ field }) => (
          <Select onValueChange={(value)=>{
            field.onChange(value);
            setCategory(value);
            console.log(value);
          }}
           value={field.value}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Arts">Arts</SelectItem>
              <SelectItem value="Fiction">Fiction</SelectItem>
              <SelectItem value="Business">Business & Finance</SelectItem>
              <SelectItem value="Literature">Literature</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      </form>
    </div>
  );
};

export default CategorySelect;
