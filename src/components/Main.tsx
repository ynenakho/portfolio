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
      <div className="main">
        <Title text="Hi, I'm Yuriy and I'm a software engineer" />
        <About />

        <Skills />
        <Education />
        <Projects />
        <Connect />
      </div>
    </div>
  );
};

export default Main;
