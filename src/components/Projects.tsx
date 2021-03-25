import Project from './Project';

const projects = [
  {
    name: 'Camagru',
    about: 'Instagram-like social network',
    picture: 'pictures/camagru-website.png',
    link: 'https://camagru-app-v2.herokuapp.com/',
  },
  {
    name: 'Matcha',
    about: 'Dating website',
    picture: 'pictures/matcha-website.png',
    link: 'https://matcha-sv.herokuapp.com/',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="section projects black-gradient">
      <h2 data-aos="slide-right">Projects</h2>
      <div className="projects-container">
        {projects.map(({ name, about, picture, link }) => (
          <Project
            name={name}
            about={about}
            picture={picture}
            link={link}
            key={name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
