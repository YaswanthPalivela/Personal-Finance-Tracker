import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Finance Tracker",
  description: "Track your income, expenses, and budgets visually.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="bgslate-900 text-white font-semibold">
      <Navbar />
      <main className="p-6 h-screen">{children}</main>
    </body>
  </html>
  );
}
