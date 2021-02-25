import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/Main';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import Resume from 'components/Resume';
import Connect from 'components/Connect';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header title="Software Engineer" />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Connect />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
