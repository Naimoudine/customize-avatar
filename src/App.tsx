import { useEffect, useState } from "react";
import Form from "./components/Form";
import Profile from "./components/Profile";

export interface Skill {
  name: string;
  display: boolean;
}

function App() {
  const [name, setName] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const [skills, setSkills] = useState<Skill[]>([
    { name: "react", display: false },
    { name: "typescript", display: false },
    { name: "express", display: false },
    { name: "figma", display: false },
    { name: "docker", display: false },
    { name: "github", display: false },
  ]);

  console.log(avatar);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>Customize your profile</h1>
      <div className="flex gap-16 border-2 border-zinc-400 shadow-lg rounded-3xl p-8 min-w-[300px] max-w-[550px] mt-16">
        <Form
          name={name}
          done={done}
          skills={skills}
          setName={setName}
          setTeam={setTeam}
          setAvatar={setAvatar}
          setSkills={setSkills}
        />
        <Profile
          name={name}
          team={team}
          avatar={avatar}
          skills={skills}
          done={done}
          setDone={setDone}
        />
      </div>
    </div>
  );
}

export default App;
