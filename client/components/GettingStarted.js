import React from "react";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import {
  Stepper,
  Button,
  Group,
  NativeSelect,
  Box,
  Text,
  NumberInput,
  Select,
  Loader,
} from "@mantine/core";
import { HiCheck, HiX } from "react-icons/hi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaCrown, FaRupeeSign } from "react-icons/fa";
import { useAddBalanceMutation } from "../redux/api/balanceApiSlice";
import { Router, useRouter } from "next/router";

const currencies = [
  { value: "INR", label: "Indian Rupee (INR)" },
  { value: "USD", label: "U.S. Dollar (USD)" },
  { value: "EUR", label: "European Euro (EUR)" },
  { value: "JPY", label: "Japanese Yen (JPY)" },
  { value: "GBP", label: "British Pound (GBP)" },
];

const schema = Yup.object().shape({
  currency: Yup.string().required(),
  amount: Yup.number().required().min(0, "Balance cannot be less than zero!"),
  isPremium: Yup.boolean().default(false),
});

function GettingStarted() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => {
      if (current == 0 && form.validateField("currency")) {
        return 1;
      } else if (current == 1) {
        form.validateField("amount");
        return 2;
      } else if (current == 2) {
        form.validateField("isPremium");
        return 3;
      }
    });
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [addBalance, { isError, isLoading, isSuccess, error }] =
    useAddBalanceMutation();

  const handleSubmit = async (data = form.values) => {
    if (!form.isValid) {
      console.log("Something went wrong! ❌");
      return;
    }
    try {
      const userData = await addBalance(data).unwrap();
      dispatch(setCredentials({ tokens: userData }));
      form.handleReset();
      Router.push("/dashboard");
    } catch (err) {
      if (err?.data) {
        toast.error(err.data);
      } else {
        toast.error("Failed to register, please try again!");
      }
      console.error(err);
    }
  };

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      currency: "",
      amount: "",
      isPremium: false,
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow-lg border p-2 sm:p-6 rounded-lg bg-white mx-auto w-full max-w-3xl min-h-[500px] flex flex-col">
        <Stepper
          className="grow"
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
        >
          <Stepper.Step label="First step" description="Select base currency">
            <Box className="grow flex flex-col items-center  rounded-lg p-1 sm:p-4 gap-4">
              <div className="rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 p-1 sm:p-8">
                <FaRupeeSign className="w-20 h-20 text-white" />
              </div>
              <div className="flex flex-col max-w-sm items-center gap-4">
                <h3 className="text-2xl font-semibold">Select base currency</h3>
                <Select
                  withAsterisk
                  className="w-full"
                  placeholder="Select your currency"
                  data={currencies}
                  {...form.getInputProps("currency")}
                />

                <p className="select-none text-xs text-slate-500">
                  Your base currency should ideally be the one you use most
                  often. Your balance & statistics will be shown in this
                  currency.
                </p>
              </div>
            </Box>
          </Stepper.Step>
          <Stepper.Step
            label="Second step"
            description="Set up your cash balance"
          >
            <Box className="grow flex flex-col items-center  rounded-lg p-1 sm:p-4 gap-4">
              <div className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 p-1 sm:p-8">
                <MdOutlineAccountBalanceWallet className="w-20 h-20 text-white" />
              </div>
              <div className="flex flex-col max-w-sm items-center gap-4">
                <h3 className="text-2xl font-semibold">
                  Set up your cash balance
                </h3>
                <NumberInput
                  withAsterisk
                  className="w-full"
                  placeholder="Enter your balance"
                  {...form.getInputProps("amount")}
                />

                <p className="select-none text-xs text-slate-500">
                  How much cash do you have in your physical wallet?
                </p>
              </div>
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Buy Premium">
            <Box className="grow flex flex-col items-center  rounded-lg p-1 sm:p-4 gap-4">
              <div className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-1 sm:p-8">
                <FaCrown className="w-20 h-20 text-white" />
              </div>
              <div className="flex flex-col max-w-sm items-center gap-4">
                <h3 className="text-2xl font-semibold">
                  Get Premium Features (Optional)
                </h3>

                <p className="select-none text-xs text-slate-500">
                  How much cash do you have in your physical wallet?
                </p>
                <Button
                  className="bg-gradient-to-r from-amber-500 to-yellow-500"
                  variant="gradient"
                  color="yellow"
                >
                  Buy Premium
                </Button>
              </div>
            </Box>
          </Stepper.Step>
          <Stepper.Completed>
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <Box className="grow flex flex-col items-center  rounded-lg p-1 sm:p-4 gap-4">
                <div className="rounded-full bg-gradient-to-r from-red-500 to-rose-500 p-1 sm:p-8">
                  <HiX className="w-20 h-20 text-white" />
                </div>
                <div className="flex flex-col max-w-sm items-center gap-4">
                  <h3 className="text-2xl font-semibold">
                    Failed to setup your account
                  </h3>

                  <p className="select-none text-xs text-slate-500">
                    Please try again...
                  </p>
                </div>
              </Box>
            ) : (
              <Box className="grow flex flex-col items-center  rounded-lg p-1 sm:p-4 gap-4">
                <div className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 p-1 sm:p-8">
                  <HiCheck className="w-20 h-20 text-white" />
                </div>
                <div className="flex flex-col max-w-sm items-center gap-4">
                  <h3 className="text-2xl font-semibold">
                    Successfully setup your account
                  </h3>

                  <p className="select-none text-xs text-slate-500">
                    Redirecting to dashboard...
                  </p>
                </div>
              </Box>
            )}
          </Stepper.Completed>
        </Stepper>

        <Group className="w-full mt-auto" position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button variant="outline" onClick={nextStep}>
            Next step
          </Button>
        </Group>
      </div>
    </form>
  );
}

export default GettingStarted;
