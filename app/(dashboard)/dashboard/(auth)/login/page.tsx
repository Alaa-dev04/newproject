"use client";
import Link from "next/link";
import useLogin from "@/hooks/login";
export default function LoginForm() {
  const { form, OnSubmit, OnCancel } = useLogin();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border border-gray-300 p-8 shadow-md shadow-gray-300">
        <h1 className="mb-8 text-center text-3xl font-bold text-green-700">
          Login
        </h1>

        <form className="space-y-6" onSubmit={form.handleSubmit(OnSubmit)}>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              User-Name
            </label>

            <input
              type="text"
              placeholder="your@email.com"
              {...form.register("username")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              {...form.register("password")}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-300"
            />
          </div>
    <div className="flex justify-between items-center ">     <button
            type="submit"
            className=" w-full rounded-lg bg-green-700 px-4 py-2 font-medium text-white transition hover:scale-105 hover:bg-green-600"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={OnCancel}
            className="bg-gray-500 w-full rounded-lg m-3 text-white px-4 py-2 rounded"
          >
            cancel
          </button></div>
     
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/dashboard/register"
              className="font-medium text-green-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
