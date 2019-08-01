import React from 'react';
import Poll from './Components/Poll';
import Vote from './Components/Vote';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pollQuestion: 'Is this poll useful?',
      pollAnswers: [
        { option: 'Yes', votes: 8 },
        { option: 'No', votes: 2 },
        { option: "Don't know", votes: 0}
      ]
    }
  }
  
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }

  render () {
    return (
      <div className="App">
        <Poll question={this.state.pollQuestion} answers={this.state.pollAnswers} onVote={this.handleVote}/>
        <Vote />
      </div>
    );
  }  
}

export default App;
