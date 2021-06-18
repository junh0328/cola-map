import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Store from 'pages/Main/Stores';
import Categories from 'pages/Categories';
import Apply from 'pages/Apply';
import Personal from 'pages/Personal';
import { Global } from '@emotion/react';
import reset from 'theme/globalStyle';
import AppLayout from 'components/AppLayout';
import Category from 'pages/Categories/Category';
import MyApply from 'pages/MyApply';
import MyReview from 'pages/MyReview';
import Qna from 'pages/Qna';
import Question from 'pages/Question';
import Quit from 'pages/Quit';

function App() {
  return (
    <Router>
      <AppLayout>
        <Global styles={reset} />
        <Route path="/" exact component={Main} />
        <Route path="/store/:title" exact component={Store} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/category/:name" exact component={Category} />
        <Route path="/apply" component={Apply} />
        <Route path="/personal" component={Personal} />
        <Route path="/myapply" component={MyApply} />
        <Route path="/myreview" component={MyReview} />
        <Route path="/qna" component={Qna} />
        <Route path="/question" component={Question} />
        <Route path="/quit" component={Quit} />
      </AppLayout>
    </Router>
  );
}

export default App;
