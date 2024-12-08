import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#FAFAFA] p-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-start md:justify-between lg:justify-between items-start">
        {/* Logo Section */}
        <div className="text-black text-3xl font-bold mb-4 sm:mb-0">
          <h2>Bandage</h2>
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}
