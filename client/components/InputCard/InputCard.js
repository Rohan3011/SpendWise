import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useForm, yupResolver } from "@mantine/form";
import { HiDotsHorizontal, HiOutlineCollection } from "react-icons/hi";
import { InputField, TextAreaField } from "../shared/form";
import {
  Button,
  LoadingOverlay,
  MultiSelect,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { SubmitButton } from "../shared/buttons";
import { toast } from "react-toastify";
import { useAddIncomeMutation } from "../../redux/api/incomeApiSlice";

const schema = Yup.object().shape({
  amount: Yup.number("Amount must be a positive number")
    .positive()
    .required("Amount is required"),
  date: Yup.date().nullable().required(),
  source: Yup.string().required(),
  tags: Yup.array().of(Yup.string()).required(),
  note: Yup.string().max(5000).optional().default("Credited"),
});

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const InputCard = () => {
  return (
    <div className="p-4 flex-1 flex flex-col m-4 w-full max-w-md shadow border rounded gap-2 bg-white hover:shadow-md">
      <InputCardHeader title={"Add income"} />
      <IncomeForm />
    </div>
  );
};

export default InputCard;

const InputCardHeader = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="grow flex items-center">
        <HiOutlineCollection className="text-slate-700 cursor-pointer" />
        <span className=" mx-4 text-sm text-slate-500 font-semibold">
          {title}
        </span>
      </div>
      <div className="flex gap-2">
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

const IncomeForm = () => {
  const [addIncome, { isLoading }] = useAddIncomeMutation();
  const form = useForm({
    initialValues: {
      amount: "",
      date: new Date().toISOString().slice(0, 10),
      source: [],
      tags: [],
      note: "",
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
  });

  const handleSubmit = async () => {
    const data = {
      ...form.values,
      amount: Number(form.values.amount),
    };
    if (!form.isValid) {
      console.log("Something went wrong! ❌");
      return;
    }
    try {
      const resp = await addIncome(data).unwrap();
      if (resp && resp.success) {
        toast.success(resp.success);
        form.reset();
      } else {
        throw new Error(resp.error);
      }
    } catch (err) {
      if (err?.data) {
        toast.error(err.data);
      } else {
        toast.error("Failed to add income, please try again!");
      }
      console.error(err);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} onReset={form.onReset}>
      <LoadingOverlay visible={isLoading} />
      <TextInput
        id="incomeAmount"
        type="number"
        name="amount"
        label="Amount"
        required={true}
        placeholder="Enter amount in ₹"
        {...form.getInputProps("amount")}
      />
      <TextInput
        id="incomeDate"
        type="date"
        name="date"
        label="Date"
        required={true}
        placeholder="Select date"
        {...form.getInputProps("date")}
      />

      <Select
        label="What is the source?"
        placeholder="Pick one"
        required
        data={[
          { value: "salary", label: "Salary" },
          { value: "freelancing", label: "Freelancing" },
          { value: "sideProject", label: "Side Project" },
          { value: "theft", label: "Theft?" },
        ]}
        {...form.getInputProps("source")}
      />

      <MultiSelect
        id="incomeTags"
        name="tags"
        required
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        {...form.getInputProps("tags")}
      />

      <Textarea
        autosize
        minRows={2}
        maxRows={4}
        id="incomeNote"
        name="note"
        label="Note"
        placeholder="Notes"
        {...form.getInputProps("note")}
      />

      <section className="grow flex space-x-2 pt-4 justify-end">
        <Button type="reset" variant="outline">
          Discard
        </Button>
        <Button
          type="submit"
          color="blue"
          disabled={Object.keys(form.errors).length !== 0}
          className="bg-[#228be6]"
        >
          Add
        </Button>
      </section>
    </form>
  );
};
