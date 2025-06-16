import { Navigation, Footer } from "./components";
import { useLocation } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()?.pathname;

  const dontShowNavigation =
    location === "/order-of-photograph" || location === "/order-of-events";
  return (
    <div className="bg-beige min-h-screen">
      {dontShowNavigation ? "" : <Navigation />}

      {children}
      {dontShowNavigation ? "" : <Footer />}
    </div>
  );
}
