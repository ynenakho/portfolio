import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/Main';
import ScrollToTop from 'components/ScrollToTop';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
