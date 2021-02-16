interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return <div className="skill">{skill}</div>;
};

const Skills: React.FC = () => {
  const frontEndSkills: string[] = [
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'HTML',
    'CSS',
    'Sass',
    'Material UI',
    'Socket.io',
  ];
  return (
    <div className="skills section blue">
      <h2>Skills</h2>
      <h3>Front End</h3>
      {frontEndSkills.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
