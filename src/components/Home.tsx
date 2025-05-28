import { Mail } from "lucide-react";
import imagemariame from "../assets/imagemariame.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex flex-col-reverse md:flex-row justify-center items-center items-center
    md:my-32 my-10"
    >
      <div className="flex flex-col">
        <h1
          className="text-5xl md:text-6xl font-bold text-center md:text-left
        mt-4 md:mt-0"
        >
          Bienvenue! <br /> je suis{" "}
          <span className="text-accent">SOUARE Mariame </span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis une développeuse fullstack <br /> tout juste diplômée,
          passionnée par le code et toujours prête à apprendre.j'aime créer des
          applications avec React et Java, et je suis à la recherche de
          nouvelles opportunités pour mettre mes compétence en pratique.
          utilisant React <br /> et Java. N'hésite pas à me contacter, je serais
          ravie d'échanger!
        </p>
        <a
          href="mailto:swaray.kmariame@gmail.com"
          className="btn btn-accent md:w-fit"
        >
          <Mail className="w- h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-20 max-w-sm md:max-w-lg lg:max-w-xl w-full">
        <img
          src={imagemariame}
          alt=""
          className="w-full h-auto object-cover
        border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
