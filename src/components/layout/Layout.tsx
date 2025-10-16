import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  mainBackground?: string; // Optional background for main element, defaults to black
}

export default function Layout({ children, mainBackground }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Header />

      <main className={`flex-1 pt-35 ${mainBackground || ""}`}>{children}</main>

      <Footer />
    </div>
  );
}
