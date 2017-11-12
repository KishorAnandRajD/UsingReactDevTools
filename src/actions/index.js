/*
The whole function is called as Action Creator
The two props (type and payload) are called as Actions
NOTE: Whenever an action is created, it is sent to all REDUCERS (made available to them. A Reducer can use them or do not use them. The reducer for Storage(reducer_books) doesn't act on these actions. But the reducer for event trigger(reducer_active_book) acts on these actions
*/

export function selectBook(book){
  //console.log('A book has been selected:',book.title);
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  //Action contains type and payload as two inbuilt props. We have to assign value to them and return
  // type: mandatory prop. describes the change. Any constant value
  // payload: optional prop.  Any extra data needed to perform the action
  return{
    type:'BOOK_SELECTED',
    payload: book
  };
}
