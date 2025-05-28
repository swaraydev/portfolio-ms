import Title from "./Title";
import imagemariame from "../assets/imagemariame.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeuse Frontend",
    description:
      "Je débute dans le développement frontend, mais j’adore créer des interfaces claires et modernes avec React.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeuse Backend",
    description:
      "J’ai appris les bases du backend et je prends plaisir à construire des APIs simples et efficaces avec Java.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionnée par l'UI/UX",
    description:
      "Je m’intéresse beaucoup à l’UI/UX, et je cherche toujours à rendre mes projets à la fois jolis et faciles à utiliser.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="about">
      <Title title=" À propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={imagemariame}
            alt=""
            className="w-96 object-cover
        rounded-xl"
          />
        </div>

        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
