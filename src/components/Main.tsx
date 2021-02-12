import Header from 'components/Header';
import Connect from './Connect';
import Education from './Education';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Title from './Title';

interface Props {}

const Main: React.FC<Props> = (props) => {
  return (
    <div>
      <Header title="Software Engineer" />
      <Title />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Connect />
    </div>
  );
};

export default Main;
