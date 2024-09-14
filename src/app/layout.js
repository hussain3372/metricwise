import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "We are a leading AI technology company dedicated to transforming businesses through innovative and responsible AI solutions.",
  description:
    "We are a leading AI technology company dedicated to transforming businesses through innovative and responsible AI solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
