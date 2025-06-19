import "./App.css";
import { Route, Routes } from "react-router";
import {
  HOME,
  ORDER_OF_EVENTS,
  GUEST_GALLERY,
  SQAUD,
  ORDEROFPHOTOGRAPH,
  GIFT_REGISTRY,
  RSVP,
} from "./routes";
import {
  Gallery,
  GiftRegistry,
  Home,
  OrderofEvents,
  OrderOfPhotograph,
  Rsvp,
  Sqaud,
} from "./screens";
import Layout from "./_layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SQAUD} element={<Sqaud />} />
        <Route path={ORDEROFPHOTOGRAPH} element={<OrderOfPhotograph />} />
        <Route path={ORDER_OF_EVENTS} element={<OrderofEvents />} />
        <Route path={GUEST_GALLERY} element={<Gallery />} />
        <Route path={GIFT_REGISTRY} element={<GiftRegistry />} />
        <Route path={RSVP} element={<Rsvp />} />
      </Routes>
    </Layout>
  );
}

export default App;
