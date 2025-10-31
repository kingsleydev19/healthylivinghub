import GlobalLayout from "../../components/globallayout";
import HondroSolLanding from "../../components/hondrosolo/hondro.solo.component";

export const metadata = {
  title: "HondroSol - Comfort articolare e mobilità attiva",
  description:
    "Scopri come migliorare il comfort articolare e mantenere la mobilità attiva in modo naturale. Formula delicata, ideale per adulti 40+, supporta ginocchia, mani e schiena. Visita la pagina ufficiale ora!",

  // Open Graph / Social sharing
  openGraph: {
    title: "HondroSol - Comfort articolare e mobilità attiva",
    description:
      "Formula delicata per supporto articolare e mobilità. Visita la pagina ufficiale!",
    url: "https://yourwebsite.com/hondro-solo",
    siteName: "Healthy Living Arena",
    images: [
      {
        url: "https://res.cloudinary.com/valvecloudinary/image/upload/v1761897075/affiliates/pexels-barbara-olsen-7870076_ckthrf.jpg",
        width: 1200,
        height: 630,
        alt: "HondroSol - Mobilità Attiva",
      },
    ],
    locale: "it_IT",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "HondroSol - Comfort articolare e mobilità attiva",
    description:
      "Scopri la formula naturale per il comfort articolare e la mobilità quotidiana. Visita la pagina ufficiale!",
    images: [
      "https://res.cloudinary.com/valvecloudinary/image/upload/v1761897075/affiliates/pexels-barbara-olsen-7870076_ckthrf.jpg",
    ],
    site: "@YourTwitterHandle", // optional
    creator: "@YourTwitterHandle", // optional
  },

  // Language and canonical
  alternates: {
    canonical: "https://yourwebsite.com/hondro-solo",
    languages: {
      "it-IT": "https://yourwebsite.com/hondro-solo",
    },
  },

  // Robots & indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function HondroSoloPage() {
  return (
    <GlobalLayout>
      <HondroSolLanding />
    </GlobalLayout>
  );
}
