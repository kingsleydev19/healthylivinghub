import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-dark)]">
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">
            About Healthy Living Arena
          </h1>
          <p className="text-lg text-white">
            Helping you explore wellness products and healthy living resources.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={`https://res.cloudinary.com/valvecloudinary/image/upload/v1761775931/affiliates/pexels-mikhail-nilov-7530851_wld4dx.jpg`}
            alt="About Healthy Living Arena"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
            Our Mission
          </h2>
          <p className="leading-relaxed mb-4">
            Healthy Living Arena is a wellness information hub dedicated to
            helping people discover health-focused products and lifestyle ideas.
            We aim to make wellness exploration simple and accessible for
            everyone.
          </p>
          <p className="leading-relaxed mb-4">
            We do not sell or manufacture supplements. Instead, we share
            information and promotional offers from reputable brands so you can
            explore wellness options in one place.
          </p>
          <p className="leading-relaxed">
            Individual experiences may vary and we always encourage visitors to
            consult qualified healthcare professionals when making
            health-related decisions.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-10">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[var(--color-background)] shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)]">
                Trust & Openness
              </h3>
              <p className="text-sm text-gray-600">
                We provide clear, honest information to help you explore
                wellness options confidently.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-background)] shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)]">
                Simplicity
              </h3>
              <p className="text-sm text-gray-600">
                We present wellness products and offers in a way that’s simple,
                clear, and easy to understand.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-background)] shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)]">
                Better Living Focus
              </h3>
              <p className="text-sm text-gray-600">
                We aim to inspire healthier lifestyles by highlighting wellness
                options and helpful resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--color-accent)] text-white text-center py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Join Our Wellness Community
          </h2>
          <p className="mb-6">
            Explore wellness products, curated offers, and helpful lifestyle
            tips to support your healthy living goals.
          </p>
          <a
            href="/offers"
            className="bg-white text-[var(--color-accent)] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View Offers
          </a>

          <p className="mt-6 text-sm opacity-80">
            We may earn commissions when you click links and make purchases — at
            no extra cost to you.
          </p>
          <p className="mt-2 text-sm opacity-80">
            For inquiries, contact us via our official Facebook page.
          </p>
        </div>
      </section>
    </div>
  );
}
