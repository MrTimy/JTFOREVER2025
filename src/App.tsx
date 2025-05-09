import "./App.css";
import { Route, Routes } from "react-router";
import {
  HOME,
  RSVP,
  ORDER_OF_EVENTS,
  PROGRAMME,
  GUEST_GALLERY,
} from "./routes";
import { Home } from "./screens";

function App() {
  return (
    <div className="bg-beige min-h-screen">
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route
          path={RSVP}
          element={<div className="text-3xl font-bold underline">About</div>}
        />
        <Route
          path={ORDER_OF_EVENTS}
          element={<div className="text-3xl font-bold underline">Contact</div>}
        />
        <Route
          path={PROGRAMME}
          element={<div className="text-3xl font-bold underline">Contact</div>}
        />
        <Route
          path={GUEST_GALLERY}
          element={<div className="text-3xl font-bold underline">Contact</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
