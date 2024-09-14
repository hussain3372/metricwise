// components/EmailButton.js
import PropTypes from 'prop-types';

const EmailButton = ({ email, className, children }) => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={() => handleEmailClick(email)}
      className={className}
    >
      {children || email}
    </button>
  );
};

EmailButton.propTypes = {
  email: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default EmailButton;
