import { useEffect, useRef, useState } from "react";
import { Skill } from "../App";

interface FormProps {
  name: string;
  done: boolean;
  skills: Skill[];
  setName: (name: string) => void;
  setTeam: (team: string) => void;
  setAvatar: (avatar: string) => void;
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}

export default function Form({
  name,
  done,
  setName,
  setTeam,
  setAvatar,
  setSkills,
}: FormProps) {
  const [limit, setLimit] = useState<number>(0);
  const reactRef = useRef<HTMLInputElement>(null);
  const typescriptRef = useRef<HTMLInputElement>(null);
  const expressRef = useRef<HTMLInputElement>(null);
  const dockerRef = useRef<HTMLInputElement>(null);
  const figmaRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);

  const handleSkills = (skillName: string) => {
    const refs = [
      reactRef,
      typescriptRef,
      expressRef,
      dockerRef,
      figmaRef,
      githubRef,
    ];

    const currRef = refs.find((ref) => ref.current?.name === skillName);

    if (currRef?.current) {
      setSkills((old) =>
        old.map((skill) => {
          if (currRef.current && skill.name === currRef.current.name) {
            return {
              ...skill,
              display: currRef.current.checked,
            };
          }

          return skill;
        })
      );
      setLimit(currRef.current.checked ? limit + 1 : limit - 1);
    }
  };

  useEffect(() => {
    console.log(done);
  }, [done]);

  return (
    <div className={done ? `hidden` : `w-1/2`}>
      <form className="flex flex-col gap-8">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <select name="team" id="team" onChange={(e) => setTeam(e.target.value)}>
          <option value="">Team</option>
          <option value="dev">Web developers</option>
          <option value="design">Designers</option>
          <option value="ops">DevOps</option>
        </select>
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={(e) =>
            setAvatar(
              e.target.files ? URL.createObjectURL(e.target.files?.[0]) : ""
            )
          }
        />
        <div className="grid grid-rows-3 grid-cols-2">
          <div>
            <input
              type="checkbox"
              ref={reactRef}
              name="react"
              id="react"
              onChange={(e) => handleSkills(e.target.name)}
              disabled={!reactRef.current?.checked && limit === 3}
            />
            <label htmlFor="react">React</label>
          </div>
          <div>
            <input
              type="checkbox"
              ref={typescriptRef}
              name="typescript"
              id="typescript"
              onChange={(e) => handleSkills(e.target.name)}
              disabled={!typescriptRef.current?.checked && limit === 3}
            />
            <label htmlFor="typescript">typescript</label>
          </div>
          <div>
            <input
              type="checkbox"
              ref={expressRef}
              name="express"
              id="express"
              onChange={(e) => handleSkills(e.target.name)}
              disabled={!expressRef.current?.checked && limit === 3}
            />
            <label htmlFor="express">express</label>
          </div>
          <div>
            <input
              type="checkbox"
              ref={figmaRef}
              name="figma"
              id="figma"
              onChange={(e) => handleSkills(e.target.name)}
              disabled={!figmaRef.current?.checked && limit === 3}
            />
            <label htmlFor="figma">figma</label>
          </div>
          <div>
            <input
              type="checkbox"
              ref={dockerRef}
              name="docker"
              id="docker"
              onChange={(e) => handleSkills(e.target.name)}
              disabled={!dockerRef.current?.checked && limit === 3}
            />
            <label htmlFor="docker">docker</label>
          </div>
          <div>
            <input
              type="checkbox"
              ref={githubRef}
              name="github"
              id="github"
              onChange={(e) => handleSkills(e.target.name)}
              disabled={!githubRef.current?.checked && limit === 3}
            />
            <label htmlFor="github">github</label>
          </div>
        </div>
      </form>
    </div>
  );
}
