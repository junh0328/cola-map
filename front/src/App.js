import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Categories from './pages/Categories';
import Apply from './pages/Apply';
import Personal from './pages/Personal';
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
        <Route path="/apply" component={Apply} />
        <Route path="/personal" component={Personal} />
      </AppLayout>
    </Router>
  );
}

export default App;
