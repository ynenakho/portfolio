interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="header">
      {/* <div className="stage" style={{ width: 32, height: 32 }}> */}
      <div className="cubespinner">
        <div className="face1">1</div>
        <div className="face2">2</div>
        <div className="face3">3</div>
        <div className="face4">4</div>
        <div className="face5">5</div>
        <div className="face6">6</div>
        {/* </div> */}
      </div>
      <p id="title">{title}</p>
    </div>
  );
};

export default Header;
