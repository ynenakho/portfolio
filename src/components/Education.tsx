interface SchoolProps {
  course: string;
  school: string;
  website: string;
}

const School: React.FC<SchoolProps> = ({ course, school, website }) => {
  return (
    <div className="school-container">
      <p className="course">{course}</p>
      <p className="school">{school}</p>
      <p className="website">{website}</p>
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
  ];
  return (
    <div className="education section black-gradient">
      <h2>Education</h2>
      {schools.map(({ course, school, website }) => (
        <School course={course} school={school} website={website} />
      ))}
    </div>
  );
};

export default Education;
