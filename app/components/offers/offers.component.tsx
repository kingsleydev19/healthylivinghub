import { offersData } from "@/app/utilities/data";
import Image from "next/image";
import Link from "next/link";

export function OfferComponent() {
  return (
    <main className="bg-[var(--background)] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-[var(--dark)] text-center mb-10">
          Our Featured Offers
        </h1>

        {/* Grid of Offers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={600}
                height={400}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-[var(--dark)] mb-2">
                  {offer.title}
                </h2>
                <p className="text-gray-600 flex-grow">{offer.description}</p>

                <Link
                  href={`/offers/${offer.slug}`}
                  className="mt-4 inline-block text-center bg-[var(--primary)] text-white py-2 px-5 rounded-lg hover:bg-[var(--accent)] transition"
                >
                  View Offer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
