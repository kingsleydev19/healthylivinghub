"use client";

import Link from "next/link";

export default function ContactComponent() {
  return (
    <div className="min-h-screen bg-[#F7F9FA] text-[#0F172A] py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0EA5A4] mb-6">
          Contact Us
        </h1>

        <p className="text-lg mb-8">
          We’re happy to answer general questions about our website
        </p>

        <div className="space-y-4 text-lg">
          <p>
            Email us at:{" "}
            <span className="font-medium text-[#0EA5A4]">
              healthylivinghub@zohomail.com
            </span>
          </p>
          <p>
            Or reach out via Facebook:{" "}
            <Link
              href="https://web.facebook.com/profile.php?id=61582386221962&_rdc=1&_rdr"
              target="_blank"
              className="font-medium text-[#0EA5A4] hover:underline"
            >
              Visit our Facebook Page
            </Link>
          </p>
        </div>

        <p className="mt-12 text-sm italic text-gray-500">
          Note: This site is informational and affiliate in nature. We do not
          provide direct product support.
        </p>
      </div>
    </div>
  );
}
