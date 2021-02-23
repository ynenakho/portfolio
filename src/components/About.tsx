const About: React.FC = () => {
  return (
    <div className="section black about">
      <div className="container">
        <div className="flex">
          <div className="avatar-container" data-aos="fade-in">
            <img
              src="/pictures/yuriy-avatar-1.png"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div>
            <p>
              Dynamic Full Stack Developer with 3+ years of software and Web
              application development experience. Skilled at developing complex
              solutions and processing strong creative thinking skills.
            </p>
            <p>
              <span className="bluebold">
                I am currently looking for employment
              </span>
              , so if you find that my background and experience meet your
              needs, <span className="bluebold">let's get in touch!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
