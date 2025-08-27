import Header from "@/components/header/page";
import "../globals.css";
import Footer from "@/components/footer/page";
export const metadata = {
  title: "WareAct",
  description: "Smart warehouse management made simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>          
        <Header />
        <main className="mt-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
