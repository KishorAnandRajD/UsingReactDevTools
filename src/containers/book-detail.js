// Container to display the active book selected

import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){

    // DUring first load of the page(initialization), none of the books are selected. In that case put some message.
    // If you don't do this check, then during first load, the value of all props will be null ( <div>Title: {this.props.book.title}</div>,...) and page will error
    if(!this.props.book){
      return <div>Select a book to get started</div>;
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// It takes the states from the containers and converts them to props for the components
// To call/use this function, it needs to be included in the export default option along with the component export as connect
// Only after doing this, we can use 'this.props.books' in this container (check line at the top "  <div>Title: {this.props.book.title}</div> " and "<div>Pages: {this.props.book.pages}</div>" )

function mapStateToProps(state){
  return{
    book:state.activeBook  // This assigns the book props from reducer_active_book (activeBook:ActiveBook present in the index.js of the reducers) selected book
  };
}
//Connect Redux state to the Container props
export default connect(mapStateToProps)(BookDetail);
