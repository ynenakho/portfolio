interface AboutProps {
  scrollToContacts: () => void;
}

const About: React.FC<AboutProps> = ({ scrollToContacts }) => {
  const handleSwipeDown = () => {
    scrollToContacts();
  };

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
              I develop websites and web-based applications from the ground up.
              A lot of my work involves creating intuitive user interfaces to
              make websites easier to navigate and to help companies to
              accomplish their business objectives. Clean, functional code is my
              number one priority. This makes it much easier for other
              developers to update the codebase and minimize the time spent on
              improvements. I am also a highly motivated team player, able to
              collaborate in a cohesive manner to create the best results in
              product development in the shortest possible time.
            </p>
            <p>
              <span className="bluebold">
                I am currently looking for employment
              </span>
              , so if you find that my background and experience meet your
              needs,{' '}
              <span className="bluebold scroll-link" onClick={handleSwipeDown}>
                let's get in touch!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
