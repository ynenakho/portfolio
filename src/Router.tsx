import { useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/Main';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import Resume from 'components/Resume';
import Connect from 'components/Connect';

const Router: React.FC = () => {
  const connectDiv = useRef<HTMLDivElement>(null);

  const scrollToContacts = () => {
    connectDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header title="Software Engineer" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main scrollToContacts={scrollToContacts} />}
          />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Connect />
        <div ref={connectDiv} />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
