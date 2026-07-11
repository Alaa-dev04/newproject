"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default function Dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    enabled: status === "authenticated",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status, router]);

  if (status === "loading" || isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Something went wrong!
      </div>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-12 lg:grid-cols-[2fr_1fr]">
      {/* Left */}
      <div>
        <h1 className="mb-8 text-4xl font-bold">
          Welcome, {session?.user?.name}
        </h1>

        <div className="space-y-6">
          {data.posts.map((post: any) => (
            <div
              key={post.id}
              className="flex items-center justify-between rounded-xl border border-gray-800 bg-neutral-900 p-4 transition hover:border-emerald-500"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={`https://picsum.photos/seed/${post.id}/200/100`}
                  alt={post.title}
                  width={200}
                  height={100}
                  className="rounded-lg object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold">
                    {post.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-gray-400">
                    {post.body}
                  </p>
                </div>
              </div>

              <button className="text-xl font-bold text-red-500 hover:text-red-700">
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="rounded-xl border border-gray-800 bg-neutral-900 p-6">
        <h2 className="mb-6 text-3xl font-bold">
          Add New Post
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none focus:border-emerald-500"
          />

          <input
            type="text"
            placeholder="Description"
            className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none focus:border-emerald-500"
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none focus:border-emerald-500"
          />

          <textarea
            rows={6}
            placeholder="Content"
            className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none focus:border-emerald-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-3 font-semibold transition hover:bg-emerald-600"
          >
            Add Post
          </button>
        </form>
      </div>
    </section>
  );
}