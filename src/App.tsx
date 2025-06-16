import "./App.css";
import { Route, Routes } from "react-router";
import {
  HOME,
  RSVP,
  ORDER_OF_EVENTS,
  PROGRAMME,
  GUEST_GALLERY,
  SQAUD,
  ORDEROFPHOTOGRAPH,
} from "./routes";
import { Home, OrderofEvents, OrderOfPhotograph, Sqaud } from "./screens";
import Layout from "./_layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SQAUD} element={<Sqaud />} />
        <Route path={ORDEROFPHOTOGRAPH} element={<OrderOfPhotograph />} />
        <Route path={ORDER_OF_EVENTS} element={<OrderofEvents />} />
        <Route
          path={PROGRAMME}
          element={<div className="text-3xl font-bold underline">Contact</div>}
        />
        <Route
          path={GUEST_GALLERY}
          element={<div className="text-3xl font-bold underline">Contact</div>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
