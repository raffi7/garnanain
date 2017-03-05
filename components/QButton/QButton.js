import React, { PropTypes } from 'react';
import cx from 'classnames';
import Link from '../Link';
import {
  Button,
  CardText,
  Card,
  CardTitle,
  CardMenu,
  CardActions,
  IconButton,
  Grid,
  Icon,
  FABButton,
  Cell,
  ProgressBar,
  IconToggle,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from 'react-mdl';

class QButton extends React.Component {
  render() {
    let color = '#4db6ac';
    if (this.props.seen) {
      color = '#f44336';
    }

    return (
      <FABButton onClick={this.props.onClick} ripple colored style={{ backgroundColor: color, fontSize: '32px' }}>
        {this.props.text}
      </FABButton>
    )
  }

}

export default QButton;
