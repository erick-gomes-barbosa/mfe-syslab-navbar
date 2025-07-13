import Navbar from "./components/navbar";
import { Router, BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}
