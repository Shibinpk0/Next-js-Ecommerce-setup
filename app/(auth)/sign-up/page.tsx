"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterFormData,
} from "../../features/auth/schemas/authSchema";

import HandleError from "../../features/auth/components/Errorhandler";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    const registeredUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
    router.push("/products");
  };

  return (
    <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900">Create account</h2>

      <p className="mt-2 text-sm text-gray-500">Sign up to get started</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
          {/*
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )} */}
          <HandleError message={errors.name?.message} />
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          {/* {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )} */}
          <HandleError message={errors.email?.message} />
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password (minimum 8 characters)"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <HandleError message={errors.password?.message} />
        </div>

        <div>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <HandleError message={errors.confirmPassword?.message} />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
        >
          Register
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-black underline">
          Login
        </Link>
      </p>
    </section>
  );
}
