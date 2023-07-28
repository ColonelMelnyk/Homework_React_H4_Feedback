import React, { Component } from 'react';
import { Notification } from './Notification';
import { FeedbackButtons } from './FeedbackButtons';
import { FeedbackSection } from './Section';
import { FeedbackStats } from './Stats';
 export class Feedback extends Component{
state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleTotalFeedbackCount = () =>{
    const {good, bad, neutral} = this.state;
    const total = good + neutral + bad;
    return total;
  }
  handlePositiveFeedbackPercentage = () => {
    const { good, bad, neutral} = this.state;
    const total = good + neutral + bad;
    let percentage = (good / total)*100;
    return Math.round(percentage) ; 
  }
   handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
render(){
  const { good, bad, neutral} = this.state;
  const total = this.handleTotalFeedbackCount();
  const percentage = this.handlePositiveFeedbackPercentage();
  const AppOptions = Object.keys(this.state);
  return (
    <div>
    <FeedbackSection title = {"Please leave your feedback"}>
    <FeedbackButtons
      options = {AppOptions} handleFeedback ={this.handleFeedback}
    />
    </FeedbackSection>
    <FeedbackSection title = {"Statistics"}>
    {total > 0 ? (
       <FeedbackStats
       good={good} 
       bad={bad} 
       neutral={neutral} 
       total={total} 
       percentage= {percentage}
       />
    ):(
      <Notification
      message = {"There is no feedback"}
      />
    )};
    </FeedbackSection>
    </div>
  );
}
}