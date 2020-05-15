import React, { Component } from 'react';
import CharacterCard from './components/Card/card';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import brands from "./brands.json";
import Header from "./components/Header";
import "./index.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      brands,
      score: 0,
      clickedBrands: []
    }
    this.shuffleCards();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(character) {
    this.checkWinLose(character);

  }

  shuffle(cardArray) {
    for (let i = cardArray.length - 1; i > 0; i--) {
      const shuff = Math.floor(Math.random() * (i + 1));
      [cardArray[i], cardArray[shuff]] = [cardArray[shuff], cardArray[i]];
    }
    return cardArray;
  }

  shuffleCards() {
    const currentCards = this.state.brands;
    const newCards = this.shuffle(currentCards);
    this.setState({ characters: newCards })
  }

  incrementScore() {
    this.setState({ score: this.state.score + 1 });
    console.log("increment score")
  }

  updatetopScore(){
    if (this.state.clickedBrands.length > this.state.topScore){
      this.state.topScore++
      this.setState.length(this.state = this.state)
    }
    // this.setState(this.state)
  }

  checkWinLose(skater) {
    const { id } = skater;
    const clicked = this.state.clickedBrands.find(storedId => {
      console.log("stored: ", storedId);
      console.log("id: ", id);
      return storedId === id;


    });
    console.log("Already clicked?: ", clicked)
    if (clicked) {
      this.lose();
    }
    else if (this.state.score === 12) {
      this.incrementScore();
      this.win();
    }
    else {
      let { clickedBrands } = this.state;
      clickedBrands = [].concat(clickedBrands);
      clickedBrands.push(id);
      this.setState({ clickedBrands });
      this.incrementScore();
      this.shuffleCards();

    }
    console.log("clicked brands check win: ", this.state.clickedBrands)
  }

  reset() {
    this.setState({
      score: 0,
      clickedBrands: []
    });

  }

  win() {
    this.reset();
  }

  lose() {
    this.reset();
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} nav="navbar navbar-dark bg-light bg-secondary sticky-top" refreshPage={this.refreshPage}/>
        <Container>
        <div className = "grid-container"></div>
        <Row>
          {this.state.brands.map(brand => {
            return (
              // <Column column="col-lg-6" key={brand.id}>
                <CharacterCard
                  image={brand.image}
                  onClick={() => {
                    this.handleClick(brand)
                  }
                  }
                />
              // </Column>
            )
          })}
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
