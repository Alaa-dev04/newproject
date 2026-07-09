import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-5xl font-bold text-center mb-16">
        Let's Keep in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/contact.png"
            alt="Contact"
            width={500}
            height={500}
            className="object-contain animate-float"
          />
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-5 w-full">
          <input
            type="text"
            placeholder="name"
            className="bg-transparent border border-gray-700 p-4 outline-none focus:border-green-300 transition"
          />

          <input
            type="email"
            placeholder="email"
            className="bg-transparent border border-gray-700 p-4 outline-none focus:border-green-300 transition"
          />

          <textarea
            placeholder="message"
            rows={8}
            className="bg-transparent border border-gray-700 p-4 outline-none resize-none focus:border-green-300 transition"
          />

          <button
            type="submit"
            className="bg-green-300 hover:bg-green-400 text-black font-semibold py-3 px-8 rounded w-fit transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}