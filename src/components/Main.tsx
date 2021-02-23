import { useEffect } from 'react';
import Header from 'components/Header';
import Connect from './Connect';
import Education from './Education';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Title from './Title';

interface Props {}

const Main: React.FC<Props> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header title="Software Engineer" />
      <Title text="Hi, My name is Yuriy and I am a software engineer" />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Connect />
    </div>
  );
};

export default Main;
