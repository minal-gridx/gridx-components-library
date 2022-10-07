import React from 'react';
import PropTypes from 'prop-types';

export default function CustomButton({ label, backgroundColor, onClick }) {
    return (
        <button onClick={onClick}
            style={backgroundColor && { backgroundColor }}>
            {label}
        </button>
    );
}

CustomButton.propTypes = {
    backgroundColor: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
CustomButton.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
};