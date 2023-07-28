import React from 'react';
import { useState } from 'react';
import { Notification } from './Notification';
import { FeedbackButtons } from './FeedbackButtons';
import { FeedbackSection } from './Section';
import { FeedbackStats } from './Stats';
 export const Feedback = ()=> {
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0,});

  const { good, neutral, bad } = feedback;

  const total = good + neutral + bad;

  const countPercentage = () => {
    let percentage = (good / total)*100;
    return Math.round(percentage); 
  };

  const onHandleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const options = Object.keys(feedback);

 
  return (
    <div>
      <FeedbackSection title = {"Please leave your feedback"}>
      <FeedbackButtons
        options = {options} handleFeedback ={onHandleFeedback}
      />
      </FeedbackSection>
      <FeedbackSection title = {"Statistics"}>
      {total > 0 ? (
        <FeedbackStats
        good={good} 
        bad={bad} 
        neutral={neutral} 
        total={total} 
        percentage= {countPercentage()}
        />
      ):(
        <Notification
        message = {"There is no feedback"}
        />
      )};
      </FeedbackSection>
    </div>
  );
 };

