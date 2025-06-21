"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    quote:
      "The process was all online. I applied on my phone, and in 3 days my BigBoy was delivered. Great service!",
    name: "– Sipho, Cape Town",
  },
  {
    quote:
      "Mobiza Rides helped me start earning fast. I didn’t need to go anywhere — everything was online!",
    name: "– Zanele, Durban",
  },
  {
    quote:
      "The scooter I got is fuel efficient and perfect for Bolt Food. Highly recommend Mobiza Rides!",
    name: "– Thabo, Johannesburg",
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { quote, name } = reviews[index];

  return (
    <section className="bg-[#FDFCFB] py-12 px-4 text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#2C2F33] mb-6">
        What Our Riders Say
      </h2>
      <blockquote className="italic text-gray-700 text-lg max-w-2xl mx-auto transition-all duration-300">
        “{quote}”
      </blockquote>
      <p className="mt-4 font-semibold text-[#B08D57]">{name}</p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? "bg-[#B08D57]" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
