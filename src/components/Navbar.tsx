import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        Mariame<span className="text-accent">DEV</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#home" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" className="btn btn-sm btn-ghost">
            À propos
          </a>
        </li>
        <li>
          <a href="#experiences" className="btn btn-sm btn-ghost">
            Mes exprériences
          </a>
        </li>
        <li>
          <a href="#projects" className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
