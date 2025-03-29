
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, User, LogOut, Settings } from "lucide-react";

type NavbarProps = {
  user: { name: string; email: string; role: string } | null;
  onLogout: () => void;
};

export default function Navbar({ user, onLogout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-soil-green-dark flex items-center justify-center text-white font-bold mr-2">
                N
              </div>
              <span className="font-bold text-lg text-soil-green-dark">
                Nourish<span className="text-soil-brown-dark">Soil</span>
              </span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link
                to="/dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium text-soil-green-dark hover:bg-soil-beige"
              >
                Dashboard
              </Link>
              <Link
                to="/soil-test"
                className="px-3 py-2 rounded-md text-sm font-medium text-soil-green-dark hover:bg-soil-beige"
              >
                Soil Test
              </Link>
              <Link
                to="/recommendations"
                className="px-3 py-2 rounded-md text-sm font-medium text-soil-green-dark hover:bg-soil-beige"
              >
                Recommendations
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="hidden md:flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center text-sm rounded-full focus:outline-none"
                    >
                      <div className="h-8 w-8 rounded-full bg-soil-green flex items-center justify-center text-white">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="ml-2">{user.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link to="/login">
                <Button className="hidden md:block bg-soil-green-dark hover:bg-soil-green text-white">
                  Sign In
                </Button>
              </Link>
            )}
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-soil-green-dark hover:bg-soil-beige"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-soil-green-dark hover:bg-soil-beige"
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/soil-test"
              className="block px-3 py-2 rounded-md text-base font-medium text-soil-green-dark hover:bg-soil-beige"
              onClick={toggleMobileMenu}
            >
              Soil Test
            </Link>
            <Link
              to="/recommendations"
              className="block px-3 py-2 rounded-md text-base font-medium text-soil-green-dark hover:bg-soil-beige"
              onClick={toggleMobileMenu}
            >
              Recommendations
            </Link>
            {user && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-3 py-2 text-base font-medium text-soil-brown-dark">
                  {user.name}
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    toggleMobileMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-soil-beige"
                >
                  Logout
                </button>
              </>
            )}
            {!user && (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-soil-green-dark hover:bg-soil-beige"
                onClick={toggleMobileMenu}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
