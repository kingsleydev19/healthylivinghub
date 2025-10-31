"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/app/utilities/UI/button.ui";

export default function HondroSolLanding() {
  const fadeRefs = useRef<HTMLDivElement[]>([]);
  const [visibleSections, setVisibleSections] = useState<boolean[]>(
    Array(5).fill(false)
  );

  const addFadeRef = (el: HTMLDivElement) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  const fadeClass = (index: number) =>
    visibleSections[index]
      ? "opacity-100 translate-y-0 transition-all duration-700"
      : "opacity-0 translate-y-10";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = fadeRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setVisibleSections((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeRefs.current.forEach((section) => observer.observe(section));

    return () => {
      fadeRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative bg-[#F7F9FA] text-[#0F172A] pb-40">
      {/* Sticky Bottom CTA */}
      <div className="relative bg-[#F7F9FA] text-[#0F172A] pb-40">
        {/* Sticky Bottom CTA */}
        <div className="fixed bottom-0 left-0 w-full bg-[#0EA5A4] text-white text-center z-50 shadow-lg">
          <Button
            pixelValue={0}
            pixelSource="landing_page_cta"
            newTab={true}
            href={`https://ual61.doctormurin.com/l`}
            className="font-semibold px-6 rounded-xl inline-block hover:opacity-90 w-full py-4"
          >
            Visita la Pagina Ufficiale
          </Button>
        </div>

        {/* Hero */}
        <section
          ref={addFadeRef}
          className={`px-6 md:px-20 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center ${fadeClass(
            0
          )}`}
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#0EA5A4] leading-tight mb-6">
              Supporto Naturale per Articolazioni e Mobilità Attiva
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Una formula delicata, ideale per adulti che cercano comfort,
              flessibilità e facilità nei movimenti quotidiani.
            </p>

            <Button
              pixelValue={0}
              pixelSource="landing_page_cta"
              newTab={true}
              href={`https://ual61.doctormurin.com/l`}
              className="inline-block bg-[#0EA5A4] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 cursor-pointer"
            >
              Visita la Pagina Ufficiale
            </Button>
          </div>

          <div className="w-full h-[450px] relative rounded-xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/valvecloudinary/image/upload/v1761897075/affiliates/pexels-barbara-olsen-7870076_ckthrf.jpg"
              alt="Anziani attivi che camminano all'aperto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Benefits */}
        <section
          ref={addFadeRef}
          className={`px-6 md:px-20 py-14 bg-white ${fadeClass(1)}`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0EA5A4] mb-8 text-center">
            Supporto Delicato per il Movimento Quotidiano
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            <ul className="space-y-4 text-lg">
              <li>Comfort per ginocchia, schiena, mani e articolazioni</li>
              <li>Favorisce flessibilità e movimenti più semplici</li>
              <li>Ingredienti naturali e delicati</li>
              <li>Perfetto per adulti 40+ che cercano un approccio naturale</li>
            </ul>

            <div className="w-full h-56 relative rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/valvecloudinary/image/upload/v1761897312/affiliates/pexels-kampus-7233089_ba9ztk.jpg"
                alt="Stile di vita attivo e movimento quotidiano"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section
          ref={addFadeRef}
          className={`px-6 md:px-20 py-14 bg-[#F0F5F5] ${fadeClass(2)}`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0EA5A4] mb-6 text-center">
            Ingredienti Naturali Selezionati
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
            <div className="h-40 relative rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/valvecloudinary/image/upload/v1761897998/affiliates/arnica_4194_i1x6jx.jpg"
                alt="Estratto botanico naturale"
                fill
                className="object-cover"
              />
              <p className="mt-2 font-medium">Estratto Naturale</p>
            </div>

            <div className="h-40 relative rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/valvecloudinary/image/upload/v1761898624/affiliates/5-health-benefits-of-boswellia-serrata-603426_dpcq59.jpg"
                alt="Estratto botanico naturale"
                fill
                className="object-cover"
              />
              <p className="mt-2 font-medium">Estratto Naturale</p>
            </div>

            <div className="h-40 relative rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/valvecloudinary/image/upload/v1761898788/affiliates/Cypress2_mgdnrw.jpg"
                alt="Estratto botanico naturale"
                fill
                className="object-cover"
              />
              <p className="mt-2 font-medium">Estratto Naturale</p>
            </div>
          </div>

          <p className="text-center mt-6 text-sm italic">
            Estratti botanici tradizionali. I risultati possono variare.
          </p>
        </section>

        {/* Testimonials */}
        <section
          ref={addFadeRef}
          className={`px-6 md:px-20 py-14 bg-white max-w-5xl mx-auto text-center ${fadeClass(
            3
          )}`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0EA5A4] mb-8">
            Persone Reali, Storie Reali
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <p className="italic text-center">
                "Ho ritrovato flessibilità alle ginocchia e posso godermi di
                nuovo le passeggiate. Questa formula è davvero utile!"
              </p>
              <p className="mt-2 font-medium text-center">— Maria, 52</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <p className="italic text-center">
                "Le mie mani sono meno rigide durante la giornata e mi sento più
                attivo complessivamente."
              </p>
              <p className="mt-2 font-medium text-center">— Luigi, 47</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <p className="italic text-center">
                "Un prodotto delicato che mi dà fiducia per muovermi comodamente
                ogni giorno."
              </p>
              <p className="mt-2 font-medium text-center">— Carla, 55</p>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section
        ref={addFadeRef}
        id="order"
        className={`px-6 md:px-20 py-20 bg-[#E9F6F6] text-center ${fadeClass(
          4
        )}`}
      >
        <div className="w-full max-w-5xl mx-auto h-96 relative rounded-xl overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/valvecloudinary/image/upload/v1761900387/affiliates/vecteezy_a-couple-and-dog-walking-in-the-forest_28719398_zlgzzm.jpg"
            alt="Passeggiata rilassante nella natura"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold text-[#0EA5A4] mb-4">
          Pronto a Muoversi con Comfort?
        </h2>
        <p className="text-lg mb-8">
          Visita subito la pagina ufficiale qui sotto.
        </p>

        <Button
          pixelValue={0}
          pixelSource="landing_page_cta"
          newTab={true}
          href={`https://ual61.doctormurin.com/l`}
          className="inline-block bg-[#0EA5A4] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90"
        >
          Vai alla Pagina Ufficiale
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()} Healthy Living Arena — Informational
        affiliate resource.
      </footer>
    </div>
  );
}
