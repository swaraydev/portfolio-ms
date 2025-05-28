import { Container, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Container className="w-10 h-10" />

        <p className="font-bold">
          SOUARE<span className="text-accent">Mariame</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/swaraydev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/mariame-souare-developper-full-stack/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-current" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6 text-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
