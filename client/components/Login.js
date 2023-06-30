import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { InputField } from "./shared/form";
import LoginImage from "../public/images/signup.jpg";
import { useLoginMutation } from "../redux/api/authApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDisclosure } from "@mantine/hooks";
import { LoadingOverlay, Button, Group, Box } from "@mantine/core";
import { HeroSection } from "./HeroSection";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const formFields = [
  {
    id: "loginEmail",
    type: "email",
    name: "email",
    label: "Email",
    required: true,
  },
  {
    id: "loginPassword",
    type: "password",
    name: "password",
    label: "Password",
    required: true,
  },
];

const Login = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="relative bg-white p-4 m-4 w-full max-w-xl flex flex-col justify-center items-center space-y-8 rounded">
        <LoginTitle />
        <LoginForm />
      </div>
      <HeroSection />
    </div>
  );
};

export default Login;

const LoginTitle = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-2">
      <h3 className="text-3xl lg:text-5xl tracking-tight font-bold text-center text-slate-800">
        Welcome back!
      </h3>
      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?
        <Link passHref href="/signup">
          <span className="cursor-pointer text-blue-700 font-semibold pl-1">
            signup
          </span>
        </Link>
      </p>
    </section>
  );
};

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (data) => {
    if (!formik.isValid) {
      console.log("Something went wrong! ❌");
      return;
    }
    try {
      const resp = await login(data).unwrap();
      if (resp?.success && resp.tokens) {
        dispatch(setCredentials({ tokens: resp.tokens }));
        formik.handleReset();
        router.push("/dashboard");
      } else {
        throw new Error(resp.error);
      }
    } catch (err) {
      if (err?.message) {
        toast.error(err.message);
      } else {
        toast.error("Failed to Login, please try again!");
      }
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="w-full max-w-sm p-4 flex flex-col rounded-md">
      <LoadingOverlay visible={isLoading} overlayBlur={2} />

      <form onSubmit={formik.handleSubmit}>
        {formFields.map((val) => (
          <InputField
            key={val.id}
            {...val}
            value={formik.values[val.name]}
            touched={formik.touched[val.name]}
            error={formik.errors[val.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
        <LoginAction />
      </form>
    </section>
  );
};

const LoginAction = ({ onSubmit }) => {
  return (
    <section className="w-full flex justify-center pt-3">
      <button
        type="submit"
        className="grow bg-blue-700 text-white px-10 py-3 rounded cursor-pointer hover:bg-blue-600 active:scale-95 duration-150"
      >
        Login
      </button>
    </section>
  );
};
