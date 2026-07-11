"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      router.push("/dashboard/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  }

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-lg">
        <h1 className="mb-2 text-center text-4xl font-bold">
          Create Account
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Register to access your dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Username"
            required
            className="w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none transition focus:border-emerald-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none transition focus:border-emerald-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none transition focus:border-emerald-500"
          />

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            Register
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-700"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/dashboard/login"
            className="font-medium text-emerald-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}