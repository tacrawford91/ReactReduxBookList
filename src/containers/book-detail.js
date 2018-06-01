import React, {Component} from 'react';
//must connect application state to the props of this component
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {
        if(!this.props.book) {
            return <div>Select A Book To Get Started!</div>
        }

        return(
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Length:{this.props.book.pages}</div>
            </div>
        )
    }
 };

 function mapStateToProps(state) {
    //this tells the container what props to 'grab'
    return {
      book: state.activeBook
    }
  }
  
  export default connect(mapStateToProps)(BookDetail);