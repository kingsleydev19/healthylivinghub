import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4">
        <p className="text-sm text-gray-600">
          {new Date().getFullYear()} Healthy Living Arena. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <Link href="/privacy" className="hover:text-[#0EA5A4] text-sm">
            Privacy Policy
          </Link>

          <Link href="/disclaimer" className="hover:text-[#0EA5A4] text-sm">
            Disclaimer
          </Link>

          <Link href="/privacy" className="hover:text-[#0EA5A4] text-sm">
            Terms
          </Link>
          <Link
            href="https://web.facebook.com/profile.php?id=61582386221962&_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0EA5A4] text-sm"
          >
            Facebook
          </Link>
          <Link
            href="https://instagram.com"
            className="hover:text-[#0EA5A4] text-sm"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
