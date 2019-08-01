import React, { Component } from 'react';

class Vote extends Component {
  state = { 
    voteQuestion: "Which movie to watch next?",
    voteAnswers: [
      { option: "Avengers: Endgame", votes: 5000, voted: false },
      { option: "Avengers: Infinity War", votes: 3000, voted: false }
    ]
  }

  addVote = (option) => {
    let voteAnswers = [...this.state.voteAnswers]
    voteAnswers.map((answer) => {
      if(answer.option === option){
        if(! answer.voted){
          answer.votes++;
          answer.voted = true;
        } else {
          answer.votes--;
          answer.voted = false;
        }
        return null;
      }
    })
    this.setState(voteAnswers);
  }

  render() { 
    let { voteQuestion, voteAnswers } = this.state
    return ( 
      <div>
        <div> {voteQuestion} </div>
        <div>
           { voteAnswers.map( (answer) => {
             return (
               <div onClick={() => this.addVote(answer.option)}>{answer.option} - {answer.votes} Votes</div>
             );
           })}
        </div>
      </div>
     );
  }
}
 
export default Vote;