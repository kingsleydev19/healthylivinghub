import Footer from "./footer";
import Header from "./header";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FA] text-[#0F172A]">
      {/* Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full  mx-auto  py-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
