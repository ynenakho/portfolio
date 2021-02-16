const About: React.FC = () => {
  return (
    <div className="about section black">
      <div className="avatar-container">
        <img
          src="/pictures/yuriy-avatar-1.png"
          alt="avatar"
          className="avatar"
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          omnis quod eos deserunt, eveniet, exercitationem itaque debitis vero
          quas ratione quisquam ipsa! Eius ad minima consectetur quis aliquam
          soluta? Sapiente.
        </p>
        <p>
          <span className="bluebold">
            I am currently looking for employment
          </span>
          , so if you find that my background and experience meet your needs,{' '}
          <span className="bluebold">let's get in touch!</span>
        </p>
      </div>
    </div>
  );
};

export default About;
