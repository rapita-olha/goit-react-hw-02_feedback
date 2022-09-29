import React, { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';
import Notification from './components/Notification';

import './App.scss';

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const targetBtn = e.target.textContent.toLowerCase();

    this.setState(prevState => ({
      ...prevState,
      [targetBtn]: prevState[targetBtn] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <h1 className="visually_hidden">Feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            // options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;