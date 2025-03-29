
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-soil-beige border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-soil-green-dark flex items-center justify-center text-white font-bold mr-2">
                N
              </div>
              <span className="font-bold text-lg text-soil-green-dark">
                Nourish<span className="text-soil-brown-dark">Soil</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-soil-brown-dark">
              Helping farmers analyze and improve soil health through
              data-driven recommendations.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-soil-green-dark tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-soil-brown-dark hover:text-soil-brown"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-soil-brown-dark hover:text-soil-brown"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-soil-brown-dark hover:text-soil-brown"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-soil-green-dark tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-soil-brown-dark hover:text-soil-brown"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-soil-brown-dark hover:text-soil-brown"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-soil-brown-light pt-8 md:flex md:items-center md:justify-between">
          <div className="text-sm text-soil-brown-dark">
            &copy; {new Date().getFullYear()} NourishSoil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
