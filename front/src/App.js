import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Categories from './pages/Categories';
import Submit from './pages/Submit';
import Private from './pages/Private';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/categories" component={Categories} />
        <Route path="/submit" component={Submit} />
        <Route path="/private" component={Private} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
