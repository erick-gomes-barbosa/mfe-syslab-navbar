import { Link, BrowserRouter } from "react-router-dom";
import LogoHorizontal from "../assets/images/logo-horizontal.png";

const commonRoutes = [
  {
    path: "/home",
    label: "Laboratórios",
  },
  {
    path: "/profile",
    label: "Perfil",
  },
];

export default function Navbar(props) {
  return (
    <nav className="relative flex z-[1000] items-center shadow-md shadow-[#00000040] p-2">
      <img src={LogoHorizontal} alt="logo-horizontal" className="h-12" />

      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-10">
        {commonRoutes.map((route) => (
          <li
            className="text-blueMedium font-bold border-b-2 border-transparent hover:border-blueMedium transition delay-100"
            key={route.path}
          >
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
