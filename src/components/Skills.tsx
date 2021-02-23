interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className="skill" data-aos="flip-left">
      {skill}
    </div>
  );
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
    <div className="skills section blue-gradient">
      <div className="container">
        <h2 data-aos="slide-left">Skills</h2>
        <h3 data-aos="slide-right">FrontEnd</h3>
        <div className="skills-container">
          {frontEndSkills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </div>
        <h3 data-aos="slide-left">BackEnd</h3>
        <div className="skills-container">
          {backEndSkills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </div>
        <h3 data-aos="slide-right">Other</h3>
        <div className="skills-container">
          {otherSkills.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
