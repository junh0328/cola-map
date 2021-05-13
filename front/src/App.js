import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Categories from './Pages/Categories';
import Submit from './Pages/Submit';
import Private from './Pages/Private';

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
