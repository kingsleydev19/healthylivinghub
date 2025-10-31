export function HomeComponent() {
  return (
    <main className="min-h-screen bg-[#F7F9FA] text-[#0F172A]">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0EA5A4] leading-tight">
          Welcome to Healthy Living Arena
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#0F172A]/80 max-w-2xl mx-auto">
          A curated hub where you can explore wellness-focused offers, products,
          and resources designed to support a balanced and healthier lifestyle —
          all in one place.
        </p>
        <a
          href="/offers"
          className="mt-8 inline-block bg-[#10B981] hover:bg-[#0EA5A4] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-md"
        >
          Explore Offers
        </a>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-16 bg-white text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0EA5A4]">
          Why Choose Healthy Living Arena?
        </h2>
        <p className="mt-4 text-lg text-[#0F172A]/80 max-w-3xl mx-auto">
          We share wellness-oriented products, programs, and offers from
          reputable partners. Our mission is to provide helpful resources to
          support informed and mindful lifestyle choices.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Carefully Selected Offers",
              text: "We highlight wellness-focused products and programs sourced from reliable partners.",
            },
            {
              title: "Lifestyle-Friendly Picks",
              text: "Explore options that align with balanced and sustainable everyday living.",
            },
            {
              title: "Wellness Guidance",
              text: "We focus on sharing educational information to support thoughtful health decisions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#F7F9FA] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-[#0EA5A4] mb-2">
                {item.title}
              </h3>
              <p className="text-[#0F172A]/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-20 text-center bg-[#0EA5A4] text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Wellness Offers & Resources
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Discover curated wellness options designed to support informed and
          mindful lifestyle improvement.
        </p>
        <a
          href="/offers"
          className="mt-8 inline-block bg-white text-[#0EA5A4] font-semibold px-8 py-4 rounded-xl hover:bg-[#10B981] hover:text-white transition-all shadow-lg"
        >
          View Offers
        </a>

        {/* Compliance note */}
        <p className="text-sm opacity-80 mt-6 max-w-xl mx-auto">
          We do not provide medical advice. Always consult a qualified
          healthcare professional before making health-related decisions.
        </p>
      </section>
    </main>
  );
}
