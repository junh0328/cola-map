import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Categories from './pages/Categories';
import Submit from './pages/Submit';
import Private from './pages/Private';
import { Global } from '@emotion/react';
import reset from './theme/globalStyle';
import AppLayout from './components/applayout';

function App() {
  return (
    <Router>
      <Global styles={reset} />
      <Route path="/" exact component={Main} />
      <Route path="/categories" component={Categories} />
      <Route path="/submit" component={Submit} />
      <Route path="/private" component={Private} />
      <AppLayout />
    </Router>
  );
}

export default App;
