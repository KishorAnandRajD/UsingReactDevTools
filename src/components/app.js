import React, { Component } from 'react';
import {connect} from 'react-redux'; // import only one function

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

import createDevTools from '../containers/DevTools';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
   
      </div>
    );
  }
}
