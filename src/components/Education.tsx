interface SchoolProps {
  course: string;
  school: string;
  website: string;
}

const School: React.FC<SchoolProps> = ({ course, school, website }) => {
  const handleClick = () => {
    window.open(website, '_blank');
  };

  return (
    <div className="school-container">
      <p className="course">{course}</p>
      <p className="school" data-tool-tip={website} onClick={handleClick}>
        {school}
      </p>
    </div>
  );
};

const Education: React.FC = () => {
  const schools: SchoolProps[] = [
    {
      course: 'Software Engineering Program',
      school: '42 Silicon Valley',
      website: 'https://www.42.us.org/',
    },
    {
      course: 'JavaScript Algorithms and Data Structures',
      school: 'FreeCodeCamp',
      website:
        'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    },
    {
      course: 'Node with React: Fullstack Web Development',
      school: 'Udemy',
      website:
        'https://www.udemy.com/course/node-with-react-fullstack-web-development/',
    },
    {
      course: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
      school: 'Udemy',
      website: 'https://www.udemy.com/course/mern-stack-front-to-back/',
    },
    {
      course: 'Complete Python Bootcamp: Go from zero to hero in Python',
      school: 'Udemy',
      website: 'https://www.udemy.com/course/complete-python-bootcamp/',
    },
  ];
  return (
    <div className="education section black-gradient">
      <div className="container">
        <h2>Education</h2>
        <div className="flex">
          {schools.map(({ course, school, website }) => (
            <School course={course} school={school} website={website} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
