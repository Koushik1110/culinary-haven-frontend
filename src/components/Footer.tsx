import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-orange-500 py-10 text-orange-100">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between container mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Culinary Haven
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;