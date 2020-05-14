import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

class ReturnButton extends React.Component {
  render() {
    return <Link to="/"><FontAwesomeIcon icon={faUndo} color="black" /></ Link>;
  }
}

export default ReturnButton;
