import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { FilterIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CategorySelect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(useForm());
  return (
    <div className="font-semibold">
      <form>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arts">Arts</SelectItem>
            <SelectItem value="fiction">Fiction</SelectItem>
            <SelectItem value="finance">Business & Finance</SelectItem>
            <SelectItem value="finance">Literature</SelectItem>
          </SelectContent>
        </Select>
      </form>
    </div>
  );
};

export default CategorySelect;
