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

class AnswerCard extends React.Component {

  render() {
    return (
      <Card onClick={this.props.onClick} shadow={0} style={{width: '240px', minHeight: '80px', background: this.props.color }}>
<CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
    <h4 style={{marginTop: '0', fontSize: (this.props.fontSize || '32px')}}>
      {this.props.text}
    </h4>
</CardTitle>
</Card>
    )
  }

}

export default AnswerCard;
