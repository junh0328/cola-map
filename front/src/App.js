import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Categories from './pages/Categories';
import Apply from './pages/Apply';
import Private from './pages/Private';
import { Global } from '@emotion/react';
import reset from './theme/globalStyle';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <Router>
      <AppLayout>
        <Global styles={reset} />
        <Route path="/" exact component={Main} />
        <Route path="/categories" component={Categories} />
        <Route path="/apply" component={Apply} />
        <Route path="/private" component={Private} />
      </AppLayout>
    </Router>
  );
}

export default App;
