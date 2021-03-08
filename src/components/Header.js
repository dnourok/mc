import React from 'react';
import propTypes from 'prop-types';

export default function Header(props) {
    const { title } = props;
    return (
        <h1>{title}</h1>
    );
}

Header.defaultProps = {
    title: ''
}

Header.propTypes = {
    title: propTypes.string
}
