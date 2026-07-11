"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default function Blog() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500 text-xl">
        Something went wrong!
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold">
          Latest <span className="text-emerald-500">Articles</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Discover articles about development, design and technology.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {data.posts.map((post: any) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-[0_20px_60px_rgba(16,185,129,.15)]"
          >
            {/* Image */}
            {/* generated from picsum.photos dummy json do not generate THE IMAGES  */}
            <div className="relative h-60 overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${post.id}/600/400`}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
                #{post.id}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
              <h2 className="line-clamp-2 text-2xl font-bold transition-colors group-hover:text-emerald-500">
                {post.title}
              </h2>

              <p className="line-clamp-3 leading-7 text-gray-400">
                {post.body}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3">
                <span className="text-sm text-gray-500">
                  {post.tags?.join(" • ") || "Technology"}
                </span>

                <span className="font-semibold text-emerald-500 transition-transform duration-300 group-hover:translate-x-2">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}