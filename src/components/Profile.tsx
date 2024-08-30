import { Skill } from "../App";
import defaultAvatar from "../assets/undefined-profil.png";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import express from "../assets/express.svg";
import figma from "../assets/figma.svg";
import docker from "../assets/docker.svg";
import github from "../assets/github.svg";

interface ProfileProps {
  name: string;
  team: string;
  avatar: string;
  skills: Skill[];
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Profile({
  name,
  team,
  avatar,
  skills,
  done,
  setDone,
}: ProfileProps) {
  const images = [
    { name: "react", url: react },
    { name: "typescript", url: typescript },
    { name: "express", url: express },
    { name: "figma", url: figma },
    { name: "docker", url: docker },
    { name: "github", url: github },
  ];

  return (
    <div
      className={
        done
          ? `flex flex-col items-center gap-6 mt-8 w-full`
          : `flex flex-col items-center gap-6 mt-8 w-1/2`
      }
    >
      <h2 className="text-xl font-semibold">{name ? name : ""}</h2>
      <img
        className={
          team === "ops"
            ? `h-32 w-32 rounded-full bg-gray-200 border-4 border-[#F05D5E]`
            : team === "dev"
            ? `h-32 w-32 rounded-full bg-gray-200 border-4 border-[#0F7173]`
            : team === "design"
            ? `h-32 w-32 rounded-full bg-gray-200 border-4 border-[#FFBCB5]`
            : `h-32 w-32 rounded-full bg-gray-200 border-4 border-transparent`
        }
        src={avatar ? avatar : defaultAvatar}
        alt="avatar"
      />
      <div className="flex gap-4 flex-wrap items-center max-w-full">
        {skills
          .filter((s) => s.display)
          .map((skill) => (
            <img
              className="h-8 w-auto"
              key={skill.name}
              src={images.find((img) => img.name === skill.name)?.url}
              alt={`logo ${skill.name}`}
            />
          ))}
      </div>
      <button
        className={
          name && team && avatar && !done
            ? `px-4 py-2 rounded-lg bg-purple-400 text-white font-semibold`
            : `hidden`
        }
        type="button"
        onClick={() => setDone((prev) => !prev)}
      >
        done !
      </button>
    </div>
  );
}
