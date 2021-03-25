type Props = {
  name: string;
  about: string;
  picture: string;
  link: string;
};

const Project: React.FC<Props> = ({ name, about, picture, link }) => {
  const handleEvent = () => {
    window.analytics.logEvent(`click-${name}`, { name });
  };

  return (
    <div
      className="project"
      data-aos="fade-up"
      data-aos-offset="300"
      onClick={handleEvent}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <p className="project-title">{name}</p>
        <p className="project-about">{about}</p>
        <div className="image-wrapper">
          <img width="100%" src={picture} alt="website screenshot" />
        </div>
      </a>
    </div>
  );
};

export default Project;
