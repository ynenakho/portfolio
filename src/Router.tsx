import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/Main';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
