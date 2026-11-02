// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// export const metadata: Metadata = {
//   title: "Login",
//   description: "Log in the page",
// };

// import HandleError from "../../features/auth/components/Errorhandler";
// import {
//   loginSchema,
//   type LoginFormData,
// } from "../../features/auth/schemas/authSchema";
// import { Metadata } from "next";

// type RegisteredUser = {
//   name: string;
//   email: string;
//   password: string;
// };

// export default function LoginPage() {
//   const route = useRouter();

//   const {
//     register,
//     handleSubmit,
//     setError,
//     clearErrors,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data: LoginFormData) => {
//     const savedUser = localStorage.getItem("registeredUser");

//     if (!savedUser) {
//       setError("email", {
//         message: "No account found. Please register first.",
//       });
//       return;
//     }

//     const registeredUser: RegisteredUser = JSON.parse(savedUser);

//     if (data.email !== registeredUser.email) {
//       setError("email", {
//         message: "Email address is not registered",
//       });
//       return;
//     }

//     if (data.password !== registeredUser.password) {
//       setError("password", {
//         message: "Incorrect password",
//       });
//       return;
//     }
//     localStorage.setItem("isLoggedIn", "true");

//     route.push("/products");
//   };

//   return (
//     <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
//       <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>

//       <p className="mt-2 text-sm text-gray-500">
//         Sign in to continue shopping.
//       </p>

//       <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
//         <div>
//           <label htmlFor="email" className="mb-2 block text-sm font-medium">
//             Email
//           </label>

//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             {...register("email", {
//               onChange: () => clearErrors("email"),
//             })}
//             className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
//               errors.email
//                 ? "border-red-500 focus:ring-red-100"
//                 : "border-gray-300 focus:border-black focus:ring-gray-100"
//             }`}
//           />

//           <HandleError message={errors.email?.message} />
//         </div>

//         <div>
//           <label htmlFor="password" className="mb-2 block text-sm font-medium">
//             Password
//           </label>

//           <input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             {...register("password", {
//               onChange: () => clearErrors("password"),
//             })}
//             className={`w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 ${
//               errors.password
//                 ? "border-red-500 focus:ring-red-100"
//                 : "border-gray-300 focus:border-black focus:ring-gray-100"
//             }`}
//           />

//           <HandleError message={errors.password?.message} />
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
//         >
//           Login
//         </button>
//       </form>

//       <p className="mt-5 text-center text-sm text-gray-600">
//         Dont have an account?{" "}
//         <Link href="/sign-up" className="font-semibold text-black underline">
//           Register
//         </Link>
//       </p>
//     </section>
//   );
// }

import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login ",
  description: "Log in to your account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
