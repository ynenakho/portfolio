import Typist from 'react-typist';

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <div className="section black-gradient title">
      <Typist cursor={{ show: false }}>
        <h1>{text}</h1>
      </Typist>
    </div>
  );
};

export default Title;
