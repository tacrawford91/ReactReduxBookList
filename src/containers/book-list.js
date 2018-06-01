import React, {Component} from 'react';
import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';

import{ selectBook} from '../actions/index';


class Booklist extends Component {

    renderList() {
        return this.props.books.map((book)=> {
            return (
                <li 
                    onClick={()=> this.props.selectBook(book)}
                    key={book.title} 
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever ges returned from will show up as props inside of book list
    return {
        books: state.books
    };
};

//Anything return fromed this function will end up as props on the BookList Container 
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called the result should be passed to all reducers --> dispatch -- pushes all action through reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
};

// Promote Booklist from component to containter. it needs to know about the dispatch method -> selectBook. Make it availbe as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);