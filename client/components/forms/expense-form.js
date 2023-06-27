import React from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { HiDotsHorizontal, HiOutlineCollection } from "react-icons/hi";
import {
  Button,
  LoadingOverlay,
  MultiSelect,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { toast } from "react-toastify";
import { useAddExpenseMutation } from "redux/api/expenseSlice";

const schema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive()
    .required("Amount is required"),
  date: Yup.date().typeError("Date is required").nullable().required(),
  source: Yup.string().typeError("Source is required").required(),
  tags: Yup.array().of(Yup.string()).typeError("Source is required").required(),
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

export const ExpenseCardHeader = ({ title }) => {
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

export const ExpenseForm = () => {
  const [addExpense, { isLoading }] = useAddExpenseMutation();
  const form = useForm({
    initialValues: {
      amount: "",
      date: new Date().toISOString().slice(0, 10),
      source: [],
      tags: [],
      note: "",
    },
    validate: yupResolver(schema),
    validateExpenseOnBlur: true,
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
      const resp = await addExpense(data).unwrap();
      if (resp && resp.success) {
        toast.success(resp.success);
        form.reset();
      } else if (resp.error) {
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
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      onReset={form.onReset}
      className="space-y-2"
    >
      <LoadingOverlay visible={isLoading} />
      <TextInput
        color="grape"
        id="incomeAmount"
        type="number"
        name="amount"
        label="Amount"
        required={true}
        placeholder="Enter amount in ₹"
        {...form.getInputProps("amount")}
      />
      <TextInput
        color="grape"
        id="incomeDate"
        type="date"
        name="date"
        label="Date"
        required={true}
        placeholder="Select date"
        {...form.getInputProps("date")}
      />

      <Select
        color="grape"
        label="What is the source?"
        placeholder="Pick one"
        required
        data={[
          { value: "rent", label: "Rent" },
          { value: "groceries", label: "Groceries" },
          { value: "transportation", label: "Transportation" },
          { value: "utilities", label: "Utilities" },
        ]}
        {...form.getInputProps("source")}
      />

      <MultiSelect
        color="grape"
        id="incomeTags"
        name="tags"
        required
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        {...form.getInputProps("tags")}
      />

      <Textarea
        color="grape"
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
        <Button type="reset" color="grape" variant="outline">
          Discard
        </Button>
        <Button
          type="submit"
          color="grape"
          disabled={Object.keys(form.errors).length !== 0}
          className="bg-[#BE4BDB]"
        >
          Add
        </Button>
      </section>
    </form>
  );
};
