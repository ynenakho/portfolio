interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="header">
      <div className="cubespinner">
        <div className="face1 face">
          <img src="/icons/react-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face2 face">
          <img src="/icons/redux-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face3 face">
          <img src="/icons/node-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face4 face">
          <img src="/icons/github-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face5 face">
          <img src="/icons/sass-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face6 face">
          <img src="/icons/python-logo.png" id="face-icon" alt="logo" />
        </div>
      </div>
      <p id="title">{title}</p>
    </div>
  );
};

export default Header;
