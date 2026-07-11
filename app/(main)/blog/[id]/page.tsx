"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

async function getPost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default function BlogPost() {
  const params = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["post", params.id],
    queryFn: () => getPost(params.id as string),
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Something went wrong!
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        <div className="space-y-6 ">
          <span className="rounded-full bg-emerald-500 px-4 py-2  text-sm font-semibold text-white">
            {data.tags?.join(" • ")}
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            {data.title}
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            {data.body}
          </p>
          </div>
      </div>

    </section>
  );
}