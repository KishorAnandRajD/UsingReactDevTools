// Container to display the list of all books from reducer_books

import React,{Component} from 'react';
import {connect} from 'react-redux'; // import only one function
import {selectBook} from '../actions/index';// import Action class. TO use this a function mapDispatchToProps needs to be used
import {bindActionCreators} from 'redux';


class BookList extends Component{
  renderList(){
    // Loop thru the books array using map function
    return this.props.books.map((book)=>{
      return(
        <li
           key={book.title}
           onClick={()=>this.props.selectBook(book)} // call the action 'selectBook' and pass props 'book' for the spefic rendered book for that line item<li>
           className="list-group-item">
           {book.title}
         </li>
      );
    }
   );
  }


  render(){

    return(
      <ul className="list-group col-sm-4">
         {this.renderList()}
      </ul>
    )
  }
}

// It takes the states from the containers and converts them to props for the components
// To call/use this function, it needs to be included in the export default option along with the component export as connect
// Only after doing this, we can use 'this.props.books' in this container (check line at the top "return this.props.books.map((book)=>{.." )
function mapStateToProps(state){
  // Whatever is returned will showup as props inside of BookList
  return{
    books: state.books
  };
}

// mapDispatchToProps - to access the actions, this function needs to be called to bind the Actions.
// Anything returned from this function will end up as props on the BookList container(Calling container)
// Only after doing this, we can use 'this.props.selectBook' in this container (check line at the top "onClick={()=>this.props.selectBook(book)}" )
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the results should be passed to all our reducer_books
  return bindActionCreators({selectBook:selectBook},dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispath method,
// state. Make the state from Reduces to the props for containers
// selectBook. Make the action function it available as a prop.
// Export the Params along with the Component
export default connect(mapStateToProps,mapDispatchToProps) (BookList);
