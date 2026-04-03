import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon.svg" alt="SameDayScrub" width={24} height={24} />
              <h3 className="font-heading text-lg font-bold">SameDayScrub</h3>
            </div>
            <p className="text-primary font-mono text-xs tracking-wider mb-2">&ldquo;Clean staff. Right now.&rdquo;</p>
            <p className="text-gray-400 text-sm">
              Commercial janitorial crews deployed same day.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/book" className="hover:text-primary">Book a Crew</Link>
              <Link href="/industries" className="hover:text-primary">Industries</Link>
              <Link href="/workers" className="hover:text-primary">Join as Worker</Link>
              <Link href="/dashboard" className="hover:text-primary">My Bookings</Link>
              <Link href="/login" className="hover:text-primary">Log In</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <p className="text-sm text-gray-400">
              support@samedayscrub.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} SameDayScrub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
