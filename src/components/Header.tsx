interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="header">
      {/* <div className="stage" style={{ width: 32, height: 32 }}> */}
      <div className="cubespinner">
        <div className="face1 face">
          <img src="/logo192.png" id="face-icon" alt="logo" />
        </div>
        <div className="face2 face">
          <img src="/redux-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face3 face">
          <img src="/node-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face4 face">
          <img src="/github-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face5 face">
          <img src="/sass-logo.png" id="face-icon" alt="logo" />
        </div>
        <div className="face6 face">
          <img src="/python-logo.png" id="face-icon" alt="logo" />
        </div>
        {/* </div> */}
      </div>
      <p id="title">{title}</p>
    </div>
  );
};

export default Header;
