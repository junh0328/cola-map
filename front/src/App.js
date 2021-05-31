import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Categories from './pages/Categories';
import Submit from './pages/Submit';
import Private from './pages/Private';
import { Global } from '@emotion/react';
import reset from './theme/globalStyle';
import AppLayout from './components/AppLayout';
import Category from './pages/Categories/Category';

function App() {
  return (
    <Router>
      <AppLayout>
        <Global styles={reset} />
        <Route path="/" exact component={Main} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/category/:name" exact component={Category} />
        <Route path="/submit" component={Submit} />
        <Route path="/private" component={Private} />
      </AppLayout>
    </Router>
  );
}

export default App;
