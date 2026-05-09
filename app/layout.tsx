import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageTransition } from "@/components/animations/PageTransition";

export const metadata: Metadata = {
  title: "Living Future | Luxury Real Estate",
  description: "Discover premium homes built for a better tomorrow. Luxury real estate with cinematic experience.",
  keywords: ["luxury real estate", "premium homes", "property investment", "luxury apartments", "villas"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
