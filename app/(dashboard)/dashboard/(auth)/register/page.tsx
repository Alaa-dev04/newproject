"use client";


import Link from "next/link";
import error from "next/dist/api/error";


export default function Register() {
 

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-lg">
        <h1 className="mb-2 text-center text-4xl font-bold">
          Create Account
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Register to access your dashboard.
        </p>

        <form className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Username"
            required
            className="w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-emerald-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-emerald-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-emerald-500"
          />

          {error && (
            <p className="text-sm text-red-500"></p>
          )}

          <button
            type="submit"
            disabled={false}
            className="w-full rounded-lg bg-emerald-500 text-white  py-4 font-semibold transition hover:bg-emerald-600 disabled:opacity-50"
          >
            submit
            {/* {loading ? "Registering..." : "Register"} */}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-700" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-700" />
        </div>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/dashboard/login"
            className="font-medium text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}