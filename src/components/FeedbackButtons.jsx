import PropTypes from 'prop-types';
import css from './buttons.module.css'
export const FeedbackButtons = ({options, handleFeedback}) => {
    return(
        <div>
        {options.map(option => {
          return (
            <button className={css.button} key={option} onClick={() => handleFeedback(option)}>
              {option}
            </button>
          );
        })}
      </div>
        )
};
FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    })
    ).isRequired,
    handleFeedback: PropTypes.func.isRequired,
};