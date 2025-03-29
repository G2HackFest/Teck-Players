
import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  
  const handleLogin = (userData: { name: string; email: string; role: string }) => {
    setUser(userData);
  };
  
  const handleLogout = () => {
    setUser(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onLogout={handleLogout} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
