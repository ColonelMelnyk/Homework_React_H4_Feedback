import PropTypes from 'prop-types';
export const FeedbackStats = ({good, bad, neutral, total, percentage}) =>{
    return (   
    <div>
        <span>Good: {good}</span><br />
        <span>Neutral: {neutral}</span><br />
        <span>Bad: {bad}</span><br />
        <span>Total: {total}</span><br/> 
        {
              percentage > 0 ? ( <span>Positive Feedback: {percentage}%</span>):(<span>Positive Feedback: 0%</span>)
            }
    </div>
    )
    }
    FeedbackStats.propTypes = {
        good: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        percentage: PropTypes.number.isRequired,
    }