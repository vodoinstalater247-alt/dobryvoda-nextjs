import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import Navbar from "@/components/Navbar";

export default function BlogSiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="min-h-[60vh] pt-20 md:pt-32">{children}</main>
      <Footer />
      <FloatingPhoneButton />
    </div>
  );
}
