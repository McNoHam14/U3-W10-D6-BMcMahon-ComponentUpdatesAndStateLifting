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
    selectedBook: null,
  };

  constructor(props) {
    super(props);
    this.getAsin = this.getAsin.bind(this);
  }

  getAsin(asin) {
    this.setState({ selectedBook: asin });
  }

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        {/* <AllTheBooks /> */}
        <Container>
          <Row>
            <Col>
              <BookList books={fantasy} getAsin={this.getAsin} />
            </Col>
            <Col>
              <CommentArea asin={this.state.selectedBook} />
            </Col>
          </Row>
        </Container>

        <MyFooter />
      </Container>
    );
  }
}

export default App;
