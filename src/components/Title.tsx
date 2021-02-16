interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="section black-gradient title">
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
