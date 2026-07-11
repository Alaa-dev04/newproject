"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
///dummy data
const data = {
  applications: [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    },
  ],
  illustrations: [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    },
  ],
  websites: [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      id: 2,
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    },
  ],
};

export default function Category() {
  const params = useParams();
  const category = params.category as keyof typeof data;
  const items = data[category];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-16 text-5xl font-bold capitalize text-emerald-500">
        {category}
      </h1>

      <div className="space-y-24">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{item.title}</h2>

              <p className="text-lg leading-8 text-gray-500">{item.desc}</p>

              <button className="rounded-md bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-600">
                See More
              </button>
            </div>

            {/* Image */}
            <div className="relative h-125 overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
