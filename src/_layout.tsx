import { Navigation, Footer } from "./components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-beige min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
