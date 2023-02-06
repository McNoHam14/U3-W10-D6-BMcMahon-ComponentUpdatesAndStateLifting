import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";

import fantasy from "./data/fantasy.json";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBook: undefined,
  };

  selectBook = (elementClicked) =>
    this.setState({ selectedBook: elementClicked });

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        {/* <AllTheBooks /> */}
        <Container>
          <Row>
            <Col>
              <BookList
                books={fantasy}
                selectedBookFromApp={this.state.selectedBook}
                changeAppStateFromApp={this.selectBook}
              />
            </Col>
            <Col>
              <CommentArea selectedBookFromApp={this.state.selectedBook} />
            </Col>
          </Row>
        </Container>

        <MyFooter />
      </Container>
    );
  }
}

export default App;
