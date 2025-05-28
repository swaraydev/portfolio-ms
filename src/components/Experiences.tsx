import Title from "./Title";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgJAVA from "../assets/techno/java.png";
import imgTAOLWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNODE from "../assets/techno/node-js.png";
import imgSQL from "../assets/techno/sql.png";
import imgSpringboot from "../assets/techno/springboot.png";

import aalia from "../assets/companies/aalia.png";
import hadicoGuinee from "../assets/companies/hadico.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Java", image: imgJAVA },
  { id: 6, name: "Spring Boot", image: imgSpringboot },
  { id: 7, name: "Tailwind CSS", image: imgTAOLWIND },
  { id: 8, name: "TypeScript", image: imgTYPE },
  { id: 9, name: "SQL", image: imgSQL },
  { id: 10, name: "Node.js", image: imgNODE },
];

const experiences = [
  {
    id: 1,
    role: "Développeuse web",
    company: "AALIA.TECH",
    period: "Nov 2024 - Fev 2025",
    description: [
      "Migration d’un site statique en HTML/CSS/JavaScript vers une application dynamique en React avec des composants réutilisables et une interface responsive.",
      "Travail en équipe selon les principes Agile/Scrum pour organiser les tâches, gérer les priorités et résoudre les blocages techniques.",
    ],
    image: aalia,
  },
  {
    id: 2,
    role: "Développeuse web",
    company: "AALIA.TECH",
    period: "Août 2023 - Août 2023",
    description: [
      "Ajustement d’un site existant pour améliorer son apparence et ses fonctionnalités avec HTML, CSS et JavaScript. ",
      "Application des consignes graphiques pour garantir une cohérence visuelle entre les pages. Renforcement des compétences en intégration web et design d’interfaces.",
    ],
    image: aalia,
  },
  {
    id: 3,
    role: "Assistante de direction",
    company: "HADICO Guinee SARL",
    period: "Jan 2020 - Mars 2022",
    description: [
      "Accueil des collaborateurs et gestion des dossiers administratifs liés aux ressources humaines.",
      "Suivi des absences et des congés, organisation des agendas et rédaction de courriers officiels.",
      "Coordination avec les équipes commerciales et partenaires, et gestion de la caisse au quotidien.",
    ],
    image: hadicoGuinee,
  },
];

const Experiences = () => {
  return (
    <div id="experiences">
      <Title title="Expériences" />
      <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" flex justify-center items-center flex-col"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((expericence) => (
            <div
              key={expericence.id}
              className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src={expericence.image}
                  alt={expericence.company}
                  className="object-cover h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {expericence.role} , {expericence.company}
                  </h1>
                  <span className="text-sm">{expericence.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {expericence.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experiences;
