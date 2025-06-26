"use client";

import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How to Start Your Delivery Business",
    excerpt:
      "Step-by-step guide to get your delivery business rolling with Mobiza Rides.",
    href: "/blog/how-to-start-your-delivery-business",
  },
  {
    id: 2,
    title: "Top Tips for New Riders",
    excerpt:
      "Essential tips every delivery rider should know to stay safe and efficient.",
    href: "/blog/top-tips-for-new-riders",
  },
  {
    id: 3,
    title: "Why Choose Licensed Bikes?",
    excerpt:
      "The benefits of using fully licensed and registered bikes for your delivery needs.",
    href: "/blog/why-choose-licensed-bikes",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="max-w-7xl mx-auto mb-20 px-6 sm:px-10 lg:px-20 py-12 border-t border-[#D3CEC4] w-full"
    >
      <h2 className="text-3xl font-extrabold text-[#2C2F33] mb-10 text-center">
        Latest From Our Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <article
            key={post.id}
            className="rounded-xl shadow-md bg-gradient-to-br from-black via-gray-800 to-black p-6 cursor-pointer transition hover:shadow-lg"
          >
            <Link href={post.href} className="block">
              <h3 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-block font-semibold text-black hover:text-[#E94F4F] transition-colors text-lg"
        >
          Explore more on our blog &rarr;
        </Link>
      </div>
    </section>
  );
}
