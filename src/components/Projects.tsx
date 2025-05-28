import Title from "./Title";

import chezAbmar from "../assets/projects/chezabmar.png";
import mouneshopp from "../assets/projects/mouneshopp.png";
import img3 from "../assets/projects/3.png";
// import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import allprojetjavascript from "../assets/projects/allprojetjavascript.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "15 projets en javascript vanilla",
    description:
      "Un challenge de 15 jours durant lequel j'ai codé un projet JavaScript par jour sans framework. Du compteur dynamique au carroussel d'images, chaque projet m'a permis de renforcer mes bases en manipulation du DOM, événements, localStorage, et animations CSS. Une expérience ultra formatrice pour progresser en JavaScript pur.",
    technologies: ["HTML", " CSS", "JavaScript"],
    demoLink: "https://allproject15javascript.netlify.app/",
    repoLink: "#",
    image: allprojetjavascript,
  },
  {
    id: 2,
    title: "MouneShop",
    description:
      "Projet Frontend réalisé seule. Boutique en ligne moderne spécialisée en accessoires mode. Navigation fluide, design responsive et animations subtiles pour une expérience shopping immersive.",
    technologies: ["HTML", "CSS", "JavaScript", " Netlify"],
    demoLink: "https://mouneshop.netlify.app/",
    repoLink: "https://github.com/swaraydev/ventechapeau",
    image: mouneshopp,
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    title: "Chez AbMar",
    description: "Projet Frontend  réalisé seule  ",
    technologies: ["HTML", "CSS", "Netlify"],
    demoLink: "https://chezabmar.netlify.app/",
    repoLink: "https://github.com/swaraydev/chez-abar",
    image: chezAbmar,
  },

  {
    id: 5,
    title: "Système de réservation de salles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Java Spring Boot", "Matérial UI"],
    demoLink: "#",
    repoLink: "#",
    image: img5,
  },
  {
    id: 6,
    title: "Analyseur de sentiment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Java", "Talwind CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img6,
  },
];

const Projects = () => {
  return (
    <div className="mt-10" id="projects">
      <Title title="Mes projets" />

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl  h-56 object-cover"
            />

            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm"> {project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className=" badge badge-accent badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex">
              <a className="btn btn-accent w-2/3" href={project.demoLink}>
                Demo
                <Video className="w-4" />
              </a>

              <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
