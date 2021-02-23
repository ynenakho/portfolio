import { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface ChildComponentProps {
  history: History;
}

const ScrollToTop: React.FC<ChildComponentProps> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);
