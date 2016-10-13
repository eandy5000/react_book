import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => selectBook(book)}
                >{book.title}</li>
            );
        })
    }
    
    render(){
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

};

function mapStateToProps(state){
    return {
        books : state.books
    };
}

//anything returned from this will end up as props in BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result is funneled to our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//This function connect promotes BookList from a Component to a container with react-redux.
//mapDispatchToProps lets the function know about the selectBook function
//mapStateToProps gives the data from state to props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


