import { Navigation, Footer } from "./components";
import { useLocation } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()?.pathname;
  console.log(location);
  return (
    <div className="bg-beige min-h-screen">
      {location !== "/order-of-photograph" && <Navigation />}
      {children}
      {location !== "/order-of-photograph" && <Footer />}
    </div>
  );
}
