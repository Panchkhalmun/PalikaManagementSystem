"use client";

import Button from "@/components/common/Button";
import InputFields from "@/components/common/form/InputField";
import { FormDetails } from "@/types/womensection/formData";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AddDetails = () => {
  const form = useForm<FormDetails>({
    defaultValues: {
      id: "",
      address: "",
      contactNumber: "",
      userName: "",
      userFormName: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<FormDetails> = async (data) => {
    console.log("Form submitted successfully. Data:", data);
  };

  return (
    <div className="min-h-screen w-full  flex justify-center items-center ">
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4 bg-gray-200 w-3/5 p-6 rounded-xl">
        <div className="flex flex-col gap-4">
          <InputFields
            form={form}
            name="address"
            type="text"
            placeholder="Enter address"
            label="Address"
          />
          <InputFields
            form={form}
            name="userName"
            type="text"
            placeholder="Enter your name"
            label="User Name"
          />
          <InputFields
            form={form}
            name="contactNumber"
            type="text"
            placeholder="Enter your contact number"
            label="Contact Number"
          />
          <InputFields
            form={form}
            name="userFormName"
            type="text"
            placeholder="Enter your Form Name"
            label="User Form Name"
          />
        </div>
        <div >
          <Button name="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddDetails;
