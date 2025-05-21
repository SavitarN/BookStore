import React from "react";

import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CategorySelect = () => {
  console.log("category select component");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  return (
    <div className=" font-semibold absolute top-50 left-50 ">
      <form>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Arts">Arts</SelectItem>
            <SelectItem value="Fiction">Fiction</SelectItem>
            <SelectItem value="Business">Business & Finance</SelectItem>
            <SelectItem value="Literature">Literature</SelectItem>
          </SelectContent>
        </Select>
      </form>
    </div>
  );
};

export default CategorySelect;
