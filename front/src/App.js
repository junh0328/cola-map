import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reset from 'theme/globalStyle';
import { Global } from '@emotion/react';
import AppLayout from 'components/AppLayout';
import Main from 'pages/Main';
import Store from 'pages/Main/Stores';
import Categories from 'pages/Categories';
import Category from 'pages/Categories/Category';
import Apply from 'pages/Apply';
import Personal from 'pages/Personal';
import MyReview from 'pages/Personal/MyReview';
import Qna from 'pages/Personal/Qna';
import Question from 'pages/Personal/Question';
import Quit from 'pages/Personal/Quit';
import Setting from 'pages/Personal/Setting';
import PageNotFound from 'pages/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <AppLayout>
          <Global styles={reset} />
          <Route path="/" exact component={Main} />
          <Route path="/store/:title/:id" component={Store} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/category/:name" component={Category} />
          <Route path="/apply" component={Apply} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/personal/setting" component={Setting} />
          <Route path="/myreview" component={MyReview} />
          <Route path="/qna" component={Qna} />
          <Route path="/question" component={Question} />
          <Route path="/quit" component={Quit} />
          <Route component={PageNotFound} />
        </AppLayout>
      </Switch>
    </Router>
  );
}

export default App;
