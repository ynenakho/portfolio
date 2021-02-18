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
    'Next',
    'HTML',
    'CSS',
    'Sass',
    'Material UI',
    'Socket.io',
  ];

  const backEndSkills: string[] = [
    'Node',
    'Express',
    'Passport',
    'PostgreSQL',
    'MongoDB',
    'C/C++',
    'Python',
  ];

  const otherSkills: string[] = [
    'Git',
    'Github',
    'Heroku',
    'AWS S3',
    'Postman',
    'OOP',
  ];

  return (
    <div className="skills section blue">
      <div className="container">
        <h2>Skills</h2>
        <h3>FrontEnd</h3>
        {frontEndSkills.map((skill) => (
          <Skill skill={skill} />
        ))}
        <h3>BackEnd</h3>
        {backEndSkills.map((skill) => (
          <Skill skill={skill} />
        ))}
        <h3>Other</h3>
        {otherSkills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
